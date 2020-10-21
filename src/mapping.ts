import { AdvisorOnBoarded, Investment, ProtocolInvestment, Unwind, NewfiAdvisor } from '../generated/NewfiAdvisor/NewfiAdvisor'
import { Investor, Advisor } from '../generated/schema'
import { BigInt } from '@graphprotocol/graph-ts'


export function handleAdvisorOnBoarded(event: AdvisorOnBoarded): void {
  let advisorAddress = event.params.advisor;
  let advisor = new Advisor(advisorAddress.toHex());
  advisor.stablePool = event.params.stablePool;
  advisor.volatilePool = event.params.volatilePool;
  advisor.stablePoolToken = event.params.stablePoolToken;
  advisor.volatilePoolToken = event.params.volatilePoolToken;
  advisor.stableCoinMstableProportion = event.params.stableCoinMstableProportion;
  advisor.stableCoinYearnProportion = event.params.stableCoinYearnProportion;
  advisor.stablePoolLiquidityValue = BigInt.fromI32(0);
  advisor.volatilePoolLiquidityValue = BigInt.fromI32(0);
  advisor.investors = new Array<string>();
  advisor.fees = BigInt.fromI32(0);
  advisor.save()
}

export function handleInvestment(event: Investment): void {
  let contract = NewfiAdvisor.bind(event.address);
  let investorAddress = event.params.investor;
  let investor = Investor.load(investorAddress.toHex())
  if (investor == null) {
    investor = new Investor(investorAddress.toHex());
    investor.stablePoolShare = event.params._stablecoinAmount;
    investor.volatilePoolShare = event.params._volatileAmount;
    investor.advisors = new Array<string>();
  }
  else {
    investor.stablePoolShare = investor.stablePoolShare.plus(event.params._stablecoinAmount);
    investor.volatilePoolShare = investor.volatilePoolShare.plus(event.params._volatileAmount);
  }
  let advisorAddress = event.params._advisor;
  let advisor = Advisor.load(advisorAddress.toHex())
  advisor.stablePoolLiquidity =  advisor.stablePoolLiquidity.plus(investor.stablePoolShare);
  advisor.volatilePoolLiquidity =  advisor.volatilePoolLiquidity.plus(investor.volatilePoolShare);
  advisor.stablePoolLiquidityValue = advisor.stablePoolLiquidityValue.plus(contract.getStablePoolValue(advisorAddress));
  advisor.volatilePoolLiquidityValue = advisor.stablePoolLiquidityValue.plus(contract.getVolatilePoolValue(advisorAddress));

  let investors = advisor.investors 
  if (!investors.includes(investor.id)) {
    investors.push(investor.id);
    advisor.investors = investors;
  }
  let advisors = investor.advisors;
  if (!advisors.includes(advisor.id)) {
    advisors.push(advisor.id);
    investor.advisors = advisors;
  }
  investor.save()
  advisor.save()
}

export function handleProtocolInvestment(event: ProtocolInvestment): void {
  let contract = NewfiAdvisor.bind(event.address);
  let advisorAddress = event.params.advisor;
  let advisor = Advisor.load(advisorAddress.toHex())
  advisor.stablePoolLiquidityValue = advisor.stablePoolLiquidityValue.plus(event.params.mstableShare).plus(contract.getStablePoolValue(advisorAddress));
  advisor.stablePoolLiquidityValue = advisor.volatilePoolLiquidityValue.plus(contract.getVolatilePoolValue(advisorAddress));
  advisor.save()
}

export function handleUnwind(event: Unwind): void {
  let advisorAddress = event.params.advisor;
  let advisor = Advisor.load(advisorAddress.toHex())
  advisor.fees = advisor.fees.plus(event.params.fess);
  advisor.save()
}
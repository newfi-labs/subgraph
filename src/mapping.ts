import { AdvisorOnBoarded, Investment, ProtocolInvestment, Unwind } from '../generated/NewfiAdvisor/NewfiAdvisor'
import { Investor, Advisor } from '../generated/schema'


export function handleAdvisorOnBoarded(event: AdvisorOnBoarded): void {
  let advisorAddress = event.params.advisor;
  let advisor = new Advisor(advisorAddress.toHex());
  advisor.stablePool = event.params.stablePool;
  advisor.volatilePool = event.params.volatilePool;
  advisor.stablePoolToken = event.params.stablePoolToken;
  advisor.volatilePoolToken = event.params.volatilePoolToken;
  advisor.volatileProtocolStableCoinProportion = event.params.volatileProtocolStableCoinProportion;
  advisor.volatileProtocolVolatileCoinProportion = event.params.volatileProtocolVolatileCoinProportion;
  advisor.mstableShare = null;
  advisor.yearnShare = null;
  advisor.investors = new Array<string>();
  advisor.fees = null;
  advisor.save()
}

export function handleInvestment(event: Investment): void {
  let investorAddress = event.params.investor;
  let investor = Investor.load(investorAddress.toHex())
  if (investor == null) {
    investor = new Investor(investorAddress.toHex());
    investor.stablePoolShare = event.params._stablecoinAmount;
    investor.volatilePoolShare = event.params._volatileAmount;
    investor.advisors = new Array<string>();
  }
  else {
    investor.stablePoolShare = investor.stablePoolShare + event.params._stablecoinAmount;
    investor.volatilePoolShare = investor.volatilePoolShare + event.params._volatileAmount;
  }
  let advisorAddress = event.params._advisor;
  let advisor = Advisor.load(advisorAddress.toHex())
  advisor.stablePoolLiquidity =  advisor.stablePoolLiquidity + investor.stablePoolShare;
  advisor.volatilePoolLiquidity =  advisor.volatilePoolLiquidity + investor.volatilePoolShare;

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
  let advisorAddress = event.params.advisor;
  let advisor = Advisor.load(advisorAddress.toHex())
  advisor.mstableShare = advisor.mstableShare + event.params.mstableShare;
  advisor.yearnShare = advisor.yearnShare + event.params.yearnShare;
  advisor.save()
}

export function handleUnwind(event: Unwind): void {
  let advisorAddress = event.params.advisor;
  let advisor = Advisor.load(advisorAddress.toHex())
  advisor.fees = advisor.fees + event.params.fess;
  advisor.save()
}
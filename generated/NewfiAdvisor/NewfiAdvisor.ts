// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AdvisorOnBoarded extends ethereum.Event {
  get params(): AdvisorOnBoarded__Params {
    return new AdvisorOnBoarded__Params(this);
  }
}

export class AdvisorOnBoarded__Params {
  _event: AdvisorOnBoarded;

  constructor(event: AdvisorOnBoarded) {
    this._event = event;
  }

  get advisor(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }

  get stablePool(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get volatilePool(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get stablePoolToken(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get volatilePoolToken(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get stableCoinMstableProportion(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get stableCoinYearnProportion(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class Investment extends ethereum.Event {
  get params(): Investment__Params {
    return new Investment__Params(this);
  }
}

export class Investment__Params {
  _event: Investment;

  constructor(event: Investment) {
    this._event = event;
  }

  get investor(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _stablecoinAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _volatileAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _advisor(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class ProtocolInvestment extends ethereum.Event {
  get params(): ProtocolInvestment__Params {
    return new ProtocolInvestment__Params(this);
  }
}

export class ProtocolInvestment__Params {
  _event: ProtocolInvestment;

  constructor(event: ProtocolInvestment) {
    this._event = event;
  }

  get advisor(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get mstableShare(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get yearnShare(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ProxyCreated extends ethereum.Event {
  get params(): ProxyCreated__Params {
    return new ProxyCreated__Params(this);
  }
}

export class ProxyCreated__Params {
  _event: ProxyCreated;

  constructor(event: ProxyCreated) {
    this._event = event;
  }

  get proxy(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Unwind extends ethereum.Event {
  get params(): Unwind__Params {
    return new Unwind__Params(this);
  }
}

export class Unwind__Params {
  _event: Unwind;

  constructor(event: Unwind) {
    this._event = event;
  }

  get advisor(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get fess(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class NewfiAdvisor extends ethereum.SmartContract {
  static bind(address: Address): NewfiAdvisor {
    return new NewfiAdvisor("NewfiAdvisor", address);
  }

  advisorName(account: Address): string {
    let result = super.call("advisorName", "advisorName(address):(string)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toString();
  }

  try_advisorName(account: Address): ethereum.CallResult<string> {
    let result = super.tryCall("advisorName", "advisorName(address):(string)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  advisorToken(): Address {
    let result = super.call("advisorToken", "advisorToken():(address)", []);

    return result[0].toAddress();
  }

  try_advisorToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("advisorToken", "advisorToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  advisorTokens(param0: BigInt): Address {
    let result = super.call(
      "advisorTokens",
      "advisorTokens(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_advisorTokens(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "advisorTokens",
      "advisorTokens(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  advisorVolatilePool(account: Address): Address {
    let result = super.call(
      "advisorVolatilePool",
      "advisorVolatilePool(address):(address)",
      [ethereum.Value.fromAddress(account)]
    );

    return result[0].toAddress();
  }

  try_advisorVolatilePool(account: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "advisorVolatilePool",
      "advisorVolatilePool(address):(address)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  advisors(param0: BigInt): Address {
    let result = super.call("advisors", "advisors(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_advisors(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("advisors", "advisors(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  deployMinimal(_logic: Address, _data: Bytes): Address {
    let result = super.call(
      "deployMinimal",
      "deployMinimal(address,bytes):(address)",
      [ethereum.Value.fromAddress(_logic), ethereum.Value.fromBytes(_data)]
    );

    return result[0].toAddress();
  }

  try_deployMinimal(
    _logic: Address,
    _data: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "deployMinimal",
      "deployMinimal(address,bytes):(address)",
      [ethereum.Value.fromAddress(_logic), ethereum.Value.fromBytes(_data)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getAdvisors(account: Address): Array<Address> {
    let result = super.call("getAdvisors", "getAdvisors(address):(address[])", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toAddressArray();
  }

  try_getAdvisors(account: Address): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getAdvisors",
      "getAdvisors(address):(address[])",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getStablePoolValue(_advisor: Address): BigInt {
    let result = super.call(
      "getStablePoolValue",
      "getStablePoolValue(address):(uint256)",
      [ethereum.Value.fromAddress(_advisor)]
    );

    return result[0].toBigInt();
  }

  try_getStablePoolValue(_advisor: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getStablePoolValue",
      "getStablePoolValue(address):(uint256)",
      [ethereum.Value.fromAddress(_advisor)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getUSDCVault(): Address {
    let result = super.call("getUSDCVault", "getUSDCVault():(address)", []);

    return result[0].toAddress();
  }

  try_getUSDCVault(): ethereum.CallResult<Address> {
    let result = super.tryCall("getUSDCVault", "getUSDCVault():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getUsdcQuote(_ethAmount: BigInt): BigInt {
    let result = super.call("getUsdcQuote", "getUsdcQuote(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_ethAmount)
    ]);

    return result[0].toBigInt();
  }

  try_getUsdcQuote(_ethAmount: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getUsdcQuote",
      "getUsdcQuote(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_ethAmount)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getVolatilePoolValue(_advisor: Address): BigInt {
    let result = super.call(
      "getVolatilePoolValue",
      "getVolatilePoolValue(address):(uint256)",
      [ethereum.Value.fromAddress(_advisor)]
    );

    return result[0].toBigInt();
  }

  try_getVolatilePoolValue(_advisor: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getVolatilePoolValue",
      "getVolatilePoolValue(address):(uint256)",
      [ethereum.Value.fromAddress(_advisor)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  investorStableLiquidity(account: Address): BigInt {
    let result = super.call(
      "investorStableLiquidity",
      "investorStableLiquidity(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );

    return result[0].toBigInt();
  }

  try_investorStableLiquidity(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "investorStableLiquidity",
      "investorStableLiquidity(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  investorStablePoolTokens(_advisor: Address): BigInt {
    let result = super.call(
      "investorStablePoolTokens",
      "investorStablePoolTokens(address):(uint256)",
      [ethereum.Value.fromAddress(_advisor)]
    );

    return result[0].toBigInt();
  }

  try_investorStablePoolTokens(_advisor: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "investorStablePoolTokens",
      "investorStablePoolTokens(address):(uint256)",
      [ethereum.Value.fromAddress(_advisor)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  investorVolatileLiquidity(account: Address): BigInt {
    let result = super.call(
      "investorVolatileLiquidity",
      "investorVolatileLiquidity(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );

    return result[0].toBigInt();
  }

  try_investorVolatileLiquidity(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "investorVolatileLiquidity",
      "investorVolatileLiquidity(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  investors(param0: BigInt): Address {
    let result = super.call("investors", "investors(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_investors(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("investors", "investors(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  massetAddress(): Address {
    let result = super.call("massetAddress", "massetAddress():(address)", []);

    return result[0].toAddress();
  }

  try_massetAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "massetAddress",
      "massetAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  savingContract(): Address {
    let result = super.call("savingContract", "savingContract():(address)", []);

    return result[0].toAddress();
  }

  try_savingContract(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "savingContract",
      "savingContract():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  stablePoolProxy(): Address {
    let result = super.call(
      "stablePoolProxy",
      "stablePoolProxy():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_stablePoolProxy(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "stablePoolProxy",
      "stablePoolProxy():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  volatilePoolProxy(): Address {
    let result = super.call(
      "volatilePoolProxy",
      "volatilePoolProxy():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_volatilePoolProxy(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "volatilePoolProxy",
      "volatilePoolProxy():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _stablePool(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _volatilePool(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _token(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateAdvisorCall extends ethereum.Call {
  get inputs(): CreateAdvisorCall__Inputs {
    return new CreateAdvisorCall__Inputs(this);
  }

  get outputs(): CreateAdvisorCall__Outputs {
    return new CreateAdvisorCall__Outputs(this);
  }
}

export class CreateAdvisorCall__Inputs {
  _call: CreateAdvisorCall;

  constructor(call: CreateAdvisorCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _stableCoinMstableProportion(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _stableCoinYearnProportion(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CreateAdvisorCall__Outputs {
  _call: CreateAdvisorCall;

  constructor(call: CreateAdvisorCall) {
    this._call = call;
  }
}

export class DeployMinimalCall extends ethereum.Call {
  get inputs(): DeployMinimalCall__Inputs {
    return new DeployMinimalCall__Inputs(this);
  }

  get outputs(): DeployMinimalCall__Outputs {
    return new DeployMinimalCall__Outputs(this);
  }
}

export class DeployMinimalCall__Inputs {
  _call: DeployMinimalCall;

  constructor(call: DeployMinimalCall) {
    this._call = call;
  }

  get _logic(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class DeployMinimalCall__Outputs {
  _call: DeployMinimalCall;

  constructor(call: DeployMinimalCall) {
    this._call = call;
  }

  get proxy(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class InvestCall extends ethereum.Call {
  get inputs(): InvestCall__Inputs {
    return new InvestCall__Inputs(this);
  }

  get outputs(): InvestCall__Outputs {
    return new InvestCall__Outputs(this);
  }
}

export class InvestCall__Inputs {
  _call: InvestCall;

  constructor(call: InvestCall) {
    this._call = call;
  }

  get _stablecoin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _totalInvest(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _advisor(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class InvestCall__Outputs {
  _call: InvestCall;

  constructor(call: InvestCall) {
    this._call = call;
  }
}

export class ProtocolInvestmentCall extends ethereum.Call {
  get inputs(): ProtocolInvestmentCall__Inputs {
    return new ProtocolInvestmentCall__Inputs(this);
  }

  get outputs(): ProtocolInvestmentCall__Outputs {
    return new ProtocolInvestmentCall__Outputs(this);
  }
}

export class ProtocolInvestmentCall__Inputs {
  _call: ProtocolInvestmentCall;

  constructor(call: ProtocolInvestmentCall) {
    this._call = call;
  }

  get _stablecoin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ProtocolInvestmentCall__Outputs {
  _call: ProtocolInvestmentCall;

  constructor(call: ProtocolInvestmentCall) {
    this._call = call;
  }
}

export class UnwindCall extends ethereum.Call {
  get inputs(): UnwindCall__Inputs {
    return new UnwindCall__Inputs(this);
  }

  get outputs(): UnwindCall__Outputs {
    return new UnwindCall__Outputs(this);
  }
}

export class UnwindCall__Inputs {
  _call: UnwindCall;

  constructor(call: UnwindCall) {
    this._call = call;
  }

  get _advisor(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _stablecoin(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class UnwindCall__Outputs {
  _call: UnwindCall;

  constructor(call: UnwindCall) {
    this._call = call;
  }
}

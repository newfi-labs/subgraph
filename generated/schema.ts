// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Investor extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Investor entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Investor entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Investor", id.toString(), this);
  }

  static load(id: string): Investor | null {
    return store.get("Investor", id) as Investor | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get advisors(): Array<string> {
    let value = this.get("advisors");
    return value.toStringArray();
  }

  set advisors(value: Array<string>) {
    this.set("advisors", Value.fromStringArray(value));
  }

  get stablePoolShare(): BigInt {
    let value = this.get("stablePoolShare");
    return value.toBigInt();
  }

  set stablePoolShare(value: BigInt) {
    this.set("stablePoolShare", Value.fromBigInt(value));
  }

  get volatilePoolShare(): BigInt {
    let value = this.get("volatilePoolShare");
    return value.toBigInt();
  }

  set volatilePoolShare(value: BigInt) {
    this.set("volatilePoolShare", Value.fromBigInt(value));
  }
}

export class Advisor extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Advisor entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Advisor entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Advisor", id.toString(), this);
  }

  static load(id: string): Advisor | null {
    return store.get("Advisor", id) as Advisor | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get stablePool(): Bytes {
    let value = this.get("stablePool");
    return value.toBytes();
  }

  set stablePool(value: Bytes) {
    this.set("stablePool", Value.fromBytes(value));
  }

  get volatilePool(): Bytes {
    let value = this.get("volatilePool");
    return value.toBytes();
  }

  set volatilePool(value: Bytes) {
    this.set("volatilePool", Value.fromBytes(value));
  }

  get investors(): Array<string> {
    let value = this.get("investors");
    return value.toStringArray();
  }

  set investors(value: Array<string>) {
    this.set("investors", Value.fromStringArray(value));
  }

  get stablePoolToken(): Bytes {
    let value = this.get("stablePoolToken");
    return value.toBytes();
  }

  set stablePoolToken(value: Bytes) {
    this.set("stablePoolToken", Value.fromBytes(value));
  }

  get volatilePoolToken(): Bytes {
    let value = this.get("volatilePoolToken");
    return value.toBytes();
  }

  set volatilePoolToken(value: Bytes) {
    this.set("volatilePoolToken", Value.fromBytes(value));
  }

  get stablePoolLiquidityValue(): BigInt {
    let value = this.get("stablePoolLiquidityValue");
    return value.toBigInt();
  }

  set stablePoolLiquidityValue(value: BigInt) {
    this.set("stablePoolLiquidityValue", Value.fromBigInt(value));
  }

  get volatilePoolLiquidityValue(): BigInt {
    let value = this.get("volatilePoolLiquidityValue");
    return value.toBigInt();
  }

  set volatilePoolLiquidityValue(value: BigInt) {
    this.set("volatilePoolLiquidityValue", Value.fromBigInt(value));
  }

  get stablePoolLiquidity(): BigInt {
    let value = this.get("stablePoolLiquidity");
    return value.toBigInt();
  }

  set stablePoolLiquidity(value: BigInt) {
    this.set("stablePoolLiquidity", Value.fromBigInt(value));
  }

  get volatilePoolLiquidity(): BigInt {
    let value = this.get("volatilePoolLiquidity");
    return value.toBigInt();
  }

  set volatilePoolLiquidity(value: BigInt) {
    this.set("volatilePoolLiquidity", Value.fromBigInt(value));
  }

  get volatileProtocolStableCoinProportion(): BigInt {
    let value = this.get("volatileProtocolStableCoinProportion");
    return value.toBigInt();
  }

  set volatileProtocolStableCoinProportion(value: BigInt) {
    this.set("volatileProtocolStableCoinProportion", Value.fromBigInt(value));
  }

  get volatileProtocolVolatileCoinProportion(): BigInt {
    let value = this.get("volatileProtocolVolatileCoinProportion");
    return value.toBigInt();
  }

  set volatileProtocolVolatileCoinProportion(value: BigInt) {
    this.set("volatileProtocolVolatileCoinProportion", Value.fromBigInt(value));
  }

  get fees(): BigInt {
    let value = this.get("fees");
    return value.toBigInt();
  }

  set fees(value: BigInt) {
    this.set("fees", Value.fromBigInt(value));
  }
}

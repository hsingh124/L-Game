class player {
  private _id: number;
  private _lPosition: Array<[number, number]>;
  private _coinPosition: [number, number];
  
  get id(): number{
    return this._id;
  }

  get lPosition(): Array<[number, number]> {
    return this._lPosition;
  }

  get coinPosition(): [number, number] {
    return this._coinPosition;
  }

  set lPosition(lPosition: Array<[number, number]>) {
    this._lPosition = lPosition;
  }

  set coinPosition(coinPosition: [number, number]) {
    this._coinPosition = coinPosition;
  }
}
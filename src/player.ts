class player {
  private _id: number;
  private _lPosition: Array<[number, number]>;
  private _coinPosition: [number, number];

  constructor(lPosition: Array<[number, number]>, coinPosition: [number, number]) {
    this._lPosition = lPosition;
    this._coinPosition = coinPosition;
  }
  
  get id(): number{
    return this._id;
  }

  get lPosition(): Array<[number, number]> {
    return this._lPosition;
  }

  get coinPosition(): [number, number] {
    return this._coinPosition;
  }

  isMoveValid(lPosition:Array<[number, number]>): boolean {

    return false;
  }

  makeMove(lPosition:Array<[number, number]>, coinPosition?: [number, number]) {
    this._lPosition = lPosition;
    if (coinPosition) this._coinPosition = coinPosition;
  }
}
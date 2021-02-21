class game {
  private _gameId: number;
  private _board: number[][];
  private _player1: player;
  private _player2: player;

  get id(): number {
    return this._gameId;
  }

  get board(): number[][] {
    return this._board;
  }

  get player1(): player {
    return this._player1;
  }

  get player2(): player {
    return this._player2;
  }
}
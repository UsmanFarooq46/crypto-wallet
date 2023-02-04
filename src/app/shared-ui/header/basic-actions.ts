export class basicActtions {
  constructor() {}

  customRound(num: number, decimalPlaces: number): number {
    return (
      Number(Number(num * Math.pow(10, decimalPlaces)).toFixed(0)) /
      Number(Math.pow(10, decimalPlaces))
    );
  }
}

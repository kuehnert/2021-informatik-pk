let x;
let y = 13;
let z: number = 13;
console.log(z + z);

interface ISchueler {
  vorname: string;
  nachname: string;
  alter: number;
  telefon?: string;
}

let schueler: ISchueler = {
  vorname: "Jeff",
  nachname: "Bezos",
  alter: 13
}

schueler.telefon = "02107148901";

console.log(schueler.telefon); //?
schueler

function test(a: number, b: string): string {
  let blub = b + b;
  return blub;
}

interface Cell {
  color: string;
  index: number;
}

interface HintCell extends Cell {
  hint: string;
}

let c: HintCell = {
  color: "black",
  index: 1,
  hint: "Was ist klein und schwarz"
}

console.log(c as Cell);
c; //?

// Leeres Array erzeugen
a = []

// Elemente hinten anhängen
a.push("Simon")
a
a.push("Luis")
a
a.unshift("Finn")
a
// Jedes Element verändern
for (let index = 0; index < a.length; index++) {
  const element = a[index];
  a[index] = a[index] + " Goldi";
}
a

// Jedes Element einwickeln mit map
const b = a.map((e, i) => `<div key=${i}>${e}</div>`);
b

// Entfernen von Elementen
a;
const geloescht = a.shift(); // vorne
a
a.pop() // hinten

a = [2, 4, 6, "Martini", 10, 12];
const index = a.indexOf("Martini") //?
a.splice(index, 1); //?
a

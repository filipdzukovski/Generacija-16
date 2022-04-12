import React from 'react';
import { Users } from './components/Users';
import { Comments } from './components/Comments';
import { Car } from './components/Car';

const user1 = {
  ime: 'Filip',
  username: "filipdz",
  mail: 'filipdzukovski@yahoo.com'
}

var numId = 123;

let comments = [
  { author: 'Filip', content: 'This is my first comment' },
  { author: 'Pero', content: 'Second comment on the way' },
  { author: 'Simon', content: 'Third and final Comment added' }
];

var cifra = 5;

let registracija = [
  { grad: { naselba: "Nesto-Naselba1", ulica: "Nesto-Ime1" }, oznaka: "SK-0000-AB" },
  { grad: { naselba: 'Nesto-Naselba2', ulica: "Nesto-Ime2" }, oznaka: "GV-0000-AA" },
  { grad: { naselba: 'Nesto-Naselba3', ulica: "Nesto-Ime3" }, oznaka: "DB-0000-RR" }
]

let cars = [
  { brand: "Ford", model: "Fiesta", year: 2003, plates: registracija[0] },
  { brand: "Opel", model: "Corsa", year: 2011, plates: registracija[1] },
  { brand: "Zastava", model: "101", year: 1987, plates: registracija[2] }
]

let data = '12/14/2022';

export function App() {

  return (
    <div id="app">
      <h2>App</h2>
      <Users korisnik1={user1} korisnik2={numId} />
      <Comments listOfComments={comments} cifra={cifra} />
      <Car vozila={cars} datum={data} />
    </div>
  )
}
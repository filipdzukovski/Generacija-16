import React from 'react';
import {Welcome} from './components/Welcome';
import {Comments} from './components/Comments';
import {Student} from './components/Student';
import {StudentClass} from './components/StudentClass';
import {FruitList} from './components/FruitList';
import { Example } from './components/Example';

var name = 'Filip';
var prezime = 'Dzukovski';
var age = 26;
var hasComments = false;
var student = {
  name: 'Filip',
  lastName: 'Dzukovski',
  college: 'FINKI'
}

let listaNaOvosje = ["apple","orange","banana"];


export const App = () =>{

  return(
      <div id="app">
          <StudentClass student={student}/>
          <hr/>
          <Welcome name={'Petar'} lastName={'Perovski'}/>
          <hr/>
          <h2>Some Content</h2>
          <hr/>
          <Welcome name={name} lastName={prezime} godini={age}/>
          <hr/>
          <Comments hasComments = {hasComments} multipleComments={false}/>
          <hr/>
          <Student student = {student}/>
          <hr/>
          <FruitList listOfFruits = {listaNaOvosje}/>
          <hr/>
          <Example ime={name} prezime={prezime} age={age}/>
      </div>
  )

}
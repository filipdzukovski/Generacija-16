import React,{useState,useEffect} from 'react';
// import { ClassComponent } from './components/ClassComponent';
// import { Domasna } from './components/Domasna';
// import { DomasnaClass } from './components/DomasnaClass';

// const movies = [
//   {name:'Back to the Future',genre:'Sci-fi',plot:'Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.',
//   year: 1985,imdbLink:'https://www.imdb.com/title/tt0088763/?ref_=nv_sr_srsg_0',imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Back_to_the_Future_Part_II.jpg/220px-Back_to_the_Future_Part_II.jpg'},
//   {name:'The Dark Knight',genre:'Crime',plot:'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.'
//   ,year:2008,imdbLink:'https://www.imdb.com/title/tt0468569/?ref_=nv_sr_srsg_0',imageUrl: 'https://variety.com/wp-content/uploads/2022/03/dark-knight-batman-split.jpg?w=1000'},
//   {name:'Star Wars',genre:'Sci-fi',plot: 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire\'s world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.',
//   year:1977,imdbLink:'https://www.imdb.com/title/tt0076759/?ref_=nv_sr_srsg_9',imageUrl:'https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190313021755'}
// ]


export function App() {

  const [promenliva1,setPromenliva1] = useState('Vrednost 1');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [counter,setCounter] = useState(0);

  useEffect(()=>{
    console.log("Component Did Update")
    console.log(username);
    console.log(password)
  },[username,password])
  return(
    <div id='app'>
      {/* <DomasnaClass listaNaFilmovi = {movies}/> */}
      <p>{promenliva1}</p>
      <button onClick={()=>{setPromenliva1('Vrednost 2')}}>Smeni Vrednost</button>
      <h2>App</h2>
      {/* <Domasna listaNaFilmovi={movies}/> */}
      {/* <ClassComponent/> */}
      <input
        type="text"
        placeholder='Enter Username'
        value={username}
        onChange={(e)=>{setUsername(e.target.value)}}
      />
      <p>{username}</p>
      <input 
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(event)=>{setPassword(event.target.value)}}
      />
      <p>{password}</p>
      <br/>
      <br/>
      <img
      onClick={()=>{setCounter(counter + 1)}}
      src='https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Back_to_the_Future_Part_II.jpg/220px-Back_to_the_Future_Part_II.jpg' alt=""/>
      <p>Counter: {counter}</p>
    </div>
  )
}
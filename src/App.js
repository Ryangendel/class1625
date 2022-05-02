import logo from './logo.svg';
import { useState, useEffect } from "react";
import AccountPage from "./pages/account"
import JokePage from "./pages/joke"
import './App.css';

function App() {

  const [balance, setBalance] = useState(100)
  const [currentUser, setCurrentUser] = useState("Skadi")
  const [joke, setJoke] = useState("")
  const [apiData, setApiData]=useState(
    [
      {name:"Ruan", age:1, breed:"bulldog"},
      {name:"Skadi", age:3, breed:"bull"},
      {name:"Hunter", age:5, breed:"dog"},
      ]
  )




fetch("http://localhost:3002/bulldog", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))

  useEffect(()=>{
    fetch("http://localhost:3002/bulldog", {
      "method": "GET",
      "mode": 'Access-Control-Allow-Origin'
    })
    .then(unSanitizedJoke=> {
      return unSanitizedJoke.json()
    }).then(sanitizedJoke=>{
      let newJoke = sanitizedJoke.value
      setJoke(newJoke)
    })
  }, [])

  return (
    <div className="App">
      {/* <AccountPage apiData={apiData} user={currentUser} setUser={setCurrentUser} /> */}
      <AccountPage joke={joke} apiData={apiData} user={currentUser} setCurrentUser={setCurrentUser} />
      <JokePage user={currentUser} />
    </div>
  );
}

export default App;

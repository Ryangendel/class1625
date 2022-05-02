import logo from "./logo.svg";
import { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AccountPage from "./pages/account";
import JokePage from "./pages/joke";
import "./App.css";

export const AppContext = createContext();

function App() {
  const [balance, setBalance] = useState(100);
  const [currentUser, setCurrentUser] = useState("Skadi");
  const [joke, setJoke] = useState("");
  const [apiData, setApiData] = useState([
    { name: "Ruan", age: 1, breed: "bulldog" },
    { name: "Skadi", age: 3, breed: "bull" },
    { name: "Hunter", age: 5, breed: "dog" },
  ]);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random", {
      method: "GET",
      // "mode": 'Access-Control-Allow-Origin'
    })
      .then((unSanitizedJoke) => {
        return unSanitizedJoke.json();
      })
      .then((sanitizedJoke) => {
        let newJoke = sanitizedJoke.value;
        console.log("==================");
        console.log(newJoke);
        console.log("==================");
        setJoke(newJoke);
      });
  }, []);

  return (
    <AppContext.Provider value={{ joke: joke, name: "Ryan", setJoke: setJoke }}>
      <BrowserRouter>
        <Routes>
        <Route path="*" element={
            <JokePage user={currentUser} />
          }/>
          <Route path="/account/" element={
          <AccountPage
            joke={joke}
            apiData={apiData}
            user={currentUser}
            setCurrentUser={setCurrentUser}
        />
          } />
          <Route exact path="/joke/:jokeid" element={
            <JokePage user={currentUser} />
          }/>
          
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;

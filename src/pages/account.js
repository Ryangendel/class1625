import { useState } from "react";

function AccountPage(props) {
console.log(props)
  const [user1, setUser1] = useState();

  function handleChange(event){
    setUser1(event.target.value)
  }

  function handleFormSubmit(e){
      e.preventDefault()
      props.setCurrentUser(user1)
  }

  return (
    <div className="account">
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit"  />
      </form>
      account page for {props.user}
      <br></br>
      {/* age of dog is: {props.bulldog.age} */}
      <br></br>
      {props.apiData.map(dog=>{
        if(dog.name=="Skadi"){
         return dog.age = dog.age+1
        }
        return dog.age
        }
      )
      }
      <br></br>
      welcome to my page...chuck norris says: 
      {props.joke}
    </div>
  );
}

export default AccountPage;

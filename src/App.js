import './App.css';
import React from 'react';
import axios from 'axios';
import { Avatar} from '@material-ui/core';

function App() {

const [name, setName] = React.useState("")
const [age, setAge] = React.useState("")

const getAge =(event) => {
  event.preventDefault()
  axios.get(`https://api.agify.io/?name=${name}`)
.then(response => setAge(response.data.age))
}
const getName = (event) => {
 
    setName(event.target.value)}

  return (
    <div className = 'container'>

     <h1 className = "greeting"> Hi there!! Let's know how old are you by your name.</h1>
      <form>
        <input className = "name__input"
        onChange = {getName} type = 'text' 
        placeholder='Enter your name in latin letters'
        value = {name}/>
         <button onClick = {getAge}>Get age</button>
        <Avatar src={`https://avatars.dicebear.com/api/human/${name}.svg`} />
        <h3 className = "age">Age: {age}</h3>
        <h4 className = "name">Name: {name}</h4>
       
      </form>
     </div>
  );
}

export default App;

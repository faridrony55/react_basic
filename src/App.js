import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const coldDrinks = ['Cocacola','Sprite','Fanta'];

  const products = [
    {name:'web design', price:'23.22'},
    {name:'graphic design', price:'423.9'},
    {name:'wordpress', price:'27.6'},
    {name:'React', price:'27.6'}
  ]
  //const productNames = products.map(product => product.name);
   //const productPrice = products.map(product => product.price);
 
 
  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>

        <ul>
          {
             coldDrinks.map(coldDrink => <li>{coldDrink}</li>)
          }
        </ul> 
           {
             products.map(product => <Me name={product.name} price={product.price}></Me>)
           } 
      </header>
    </div>
  );
}



function Users(){
 
  const [users, setUsers] = useState([]);
  useEffect(()=> {
     fetch('https://jsonplaceholder.typicode.com/users')
    //fetch('https://dailydhaka.com/wp-json/wp/v2/posts')
    .then(res => res.json())
    .then(data =>setUsers(data));

    //console.log(users);
  },[])
  return(
    <div>
      <h2>Users: {users.length}</h2>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
 

function Me(props){
  var loopStyle = {
    backgroundColor:'#333',
    padding:'20px 100px',
    border:'1px solid #ddd',
    marginBottom: '30px'
  }
  return (
    <div className="loop" style={loopStyle}>
        <h1>{props.name}</h1>
        <h3>{props.price}</h3>
        <mark>we</mark>
        
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.   Saepe at cumque, debitis ea a sunt.</span>
    </div>
  )
}
export default App;

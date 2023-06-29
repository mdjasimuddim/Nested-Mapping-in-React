// import './App.css';
// import Card from './Card';
// import List from './UniqueList/List';
// import Data from './data.json'
// import './index.css'

// function App() {
//   // let arr = [];
//   // for(let x = 0; x < Data.length; x++){
//   //   arr.push(<Card titleText ={Data[x].title} descText = {Data[x].desc}/>)
//   // }
//   return (
//     <div className="App">
//         <h1 className='headingStyle'>Todo App</h1>
//         {/* {Data.map((item, index) => <Card key ={index} titleText ={item.title} descText = {item.desc}/>)} */}
//         <List />
//     </div>
//   );
// }

// export default App;

import React from 'react'
const users = [
  {
    fullName: "Md Jasim Uddim",
    age: 26,
    phones: [
      {
        home:"01753472157"
      },
      {
        office:'01819224705'
      }
    ]
  },
  {
    fullName: "Md Firoz Kobir",
    age: 30,
    phones: [
      {
        home:"01053472157"
      },
      {
        office:'01919224705'
      }
    ]
  },
  {
    fullName: "Mst Taslima khatun",
    age: 21,
    phones: [
      {
        home:"01553472157"
      },
      {
        office:'01919224705'
      }
    ]
  }
]

export default function App() {
  return (
    <div>
      <h1>
        Nested Lists
      </h1>
      {
        users.map((user, index) => <article key ={index}>
          <h3>FullName : {user.fullName}</h3>
          <p>Age : {user.age}</p>
          {
            user.phones.map((phone, index) =>
              (<div key = {index}>
                <p>Home: {phone.home}</p>
                <p>Office: {phone}</p>
              </div> )
            )
          }
        </article>)
      }
    </div>
  )
}

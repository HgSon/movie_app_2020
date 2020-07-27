import React from 'react';



class App extends React.Component{
  state = {
    counting: 0
  }
  add = () =>{
    this.setState(current=>({counting: current.counting +1}))
  }
  minus = () =>{
    this.setState(current=>({counting: current.counting-1}))
  }
  render(){
    return <div>
                <h1>The number is: {this.state.counting}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
          </div> 
  }
}
//this.add() : 클릭할때만 실행되는거아니고 즉시실행됨


// 변수받는것. props도 변수명이고 꼭 props로 쓸필요없음
// 리엑트가 추가된 프로퍼티를 인자로 갖고오는것. 그래서 아래경우에는
// 그중 fav 가져온것 {id} = req처럼
// function Food({name, pic}){
//   return <div>
//             <h3>I love {name}</h3>
//             <img src= {pic} alt={name}/>
//         </div>
//   }
// const foodILike=[{
//   id: 1,
//   name: "kimchi",
//   image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Korean_traditional_food,_kimchi.jpg"
// },{
//   id: 2,
//   name: "ramen",
//   image: "https://commons.wikimedia.org/wiki/File:Shoyu_Ramen.jpg"
// }]
// function App() {
//   return (
//     <div>
//       {foodILike.map(value=><Food key={value.id} name={value.name} pic={value.image}/>)}
//     </div>
//   );
// }

export default App;

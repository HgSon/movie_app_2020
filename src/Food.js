// 변수받는것. props도 변수명이고 꼭 props로 쓸필요없음
// 리엑트가 추가된 프로퍼티를 인자로 갖고오는것. 그래서 아래경우에는
// 그중 fav 가져온것 {id} = req처럼
import React from "react";
import propTypes from "prop-types";

function Food({ name, pic }) {
  return (
    <div>
      <h3>I love {name}</h3>
      <img src={pic} alt={name} />
    </div>
  );
}
Food.propTypes = {
  name: propTypes.string.isRequired,
  pic: propTypes.string.isRequired,
  rating: propTypes.string,
};
const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/94/Korean_traditional_food,_kimchi.jpg",
    rating: 3.5,
  },
  {
    id: 2,
    name: "ramen",
    image: "https://commons.wikimedia.org/wiki/File:Shoyu_Ramen.jpg",
    rating: 4.2,
  },
];
function FoodList() {
  return (
    <div>
      {foodILike.map((value) => (
        <Food key={value.id} name={value.name} pic={value.image} />
      ))}
    </div>
  );
}

export default FoodList;

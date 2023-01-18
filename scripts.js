// Make Cards
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const foods = [
  {
    title: "Big Burguer",
    price: "$ 6.00",
    back_img: "./images/burger.jpg",
    food_id: "GykTLqODQuU"
  },
  {
    title: "Monster Pizza",
    price: "$ 12.00",
    back_img: "./images/pizza.jpg",
    food_id: "HN1UjzRSdBk"
  },
  {
    title: "Fries",
    price: "$ 4.50",
    back_img: "",
    food_id: "rAzHvYnQ8DY"
  },
  {
    title: "Orange Cake",
    price: "$ 10.00",
    back_img: "",
    food_id: "ghTrp1x_1As"
  },
  {
    title: "Especial Salad",
    price: "$ 4.00",
    back_img: "./images/salad.jpg",
    food_id: "GSqR2i-Pq6o"
  },
  {
    title: "Milk-Shake",
    price: "$ 3.80",
    back_img: "",
    food_id: "2alg7MQ6_sI"
  }
];

foods.map(food => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", food.food_id);
  cardClone.querySelector("img").src = food.back_img;
  cardClone.querySelector(".title").innerHTML = food.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML =
  food.price;
  sectionCards.appendChild(cardClone);
});

card.remove();

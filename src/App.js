import React from "react";
import Heading from "./Components/Heading";
import Category from "./Components/Category";
import PrizeYear from "./Components/PrizeYear";
import CatButton from "./Components/CatButton"
import Card from "./Components/Card";
import YearButton from "./Components/YearButton"

componentDidMount() {
  let url = "https://nobelprizes.herokuapp.com/";
  fetch(url)
    .then(data => data.json())
    .then(countries =>
      this.setState({ countries: countries })
    )
}





function App() {
  return (
    <div>
      <Heading />
      <Category />
      <PrizeYear />
      <CatButton />
      <YearButton />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;


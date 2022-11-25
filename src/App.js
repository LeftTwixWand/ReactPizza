import React from 'react';
import Header from './Components/Header';
import Sort from './Components/Sort';
import Categories from './Components/Categories';
import PizzaBlock from './Components/PizzaBlock';
import './scss/app.scss';

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://mockapi.io/')
      .then((response) => response.json())
      .then((array) => setItems(array));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((item) => (
              <PizzaBlock key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

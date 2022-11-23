import React from 'react';
import Header from './Components/Header';
import Sort from './Components/Sort';
import Categories from './Components/Categories';
import PizzaBlock from './Components/PizzaBlock';
import './scss/app.scss';

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock title="Mexican" price={500} />
            <PizzaBlock title="Mexican2" price={600} />
            <PizzaBlock title="Mexican3" price={700} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

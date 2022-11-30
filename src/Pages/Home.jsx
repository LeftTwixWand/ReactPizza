import React from 'react';

import Sort from '../Components/Sort';
import Categories from '../Components/Categories';
import PizzaBlock from '../Components/PizzaBlock';
import Skeleton from '../Components/PizzaBlock/Skeleton';
import Pagination from '../Components/Pagination';

const Home = ({ searchValue }) => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({ name: 'Name', sortProperty: 'title' });
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((response) => response.json())
      .then((array) => {
        setItems(array);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items
    .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((item) => <PizzaBlock key={item.id} {...item} />);

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onSelectionChanged={(id) => setCategoryId(id)} />
        <Sort value={sortType} onSelectionChanged={(id) => setSortType(id)} />
      </div>

      <h2 className="content__title">All pizzas</h2>

      <div className="content__items">{isLoading ? skeletons : pizzas}</div>

      <Pagination onPageChanged={(number) => setCurrentPage(number + 1)} />
    </div>
  );
};

export default Home;

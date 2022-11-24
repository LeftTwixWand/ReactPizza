import React from 'react';

function Categories() {
  const [activeCategoryIndex, setActiveCategoryIndex] = React.useState(0);

  const categories = ['All', 'Vegeterian', 'Meat', 'Grill', 'Spicy', 'Closed'];

  const onCategoryClick = (activeIndex) => {
    setActiveCategoryIndex(activeIndex);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            onClick={() => onCategoryClick(index)}
            className={activeCategoryIndex === index ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

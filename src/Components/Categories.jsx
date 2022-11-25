import React from 'react';

function Categories() {
  const [activeCategoryIndex, setActiveCategoryIndex] = React.useState(0);

  const categories = ['All', 'Vegeterian', 'Meat', 'Grill', 'Spicy', 'Closed'];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            key={index}
            onClick={() => setActiveCategoryIndex(index)}
            className={activeCategoryIndex === index ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

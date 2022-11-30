import React from 'react';

function Categories({ value, onSelectionChanged }) {
  const categories = ['All', 'Vegeterian', 'Meat', 'Grill', 'Spicy', 'Specials'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onSelectionChanged(index)}
            className={value === index ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

import React, { useEffect, useState } from 'react';
import './MainProduct.scss';
import ProductFilter from './ProductFilter/ProductFilter';
import ProductItem from './ProductItem/ProductItem';

const MainProduct = () => {
  const [category, setCategory] = useState('');
  const [item, setItem] = useState('');

  const sortCategory = name => {
    fetch('http://192.168.0.69:8000/products?category=' + name)
      .then(response => response.json())
      .then(result => {
        setItem(result);
      });
  };

  useEffect(() => {
    fetch('http://192.168.0.69:8000/products/category')
      .then(response => response.json())
      .then(result => {
        setItem(result.categories);
        setCategory(result);
      });
  }, []);

  return (
    <div className="mainproduct">
      <h2 className="main-wrapper-homefurnishing">홈 퍼니싱 상품</h2>
      <ProductFilter category={category} sortCategory={sortCategory} />
      <ProductItem item={item} />
    </div>
  );
};

export default MainProduct;
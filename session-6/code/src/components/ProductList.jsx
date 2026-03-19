import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({products, onAdd}) => {

    return (
        <div>
            {products.map((product) => {
                return <ProductItem key={product.id} product={product} onAdd={onAdd} />
            })}
        </div>
    );
};

export default ProductList;
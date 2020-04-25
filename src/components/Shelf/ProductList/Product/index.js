import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Thumb from '../../../Thumb';
import { addProduct } from '../../../../services/cart/actions';

const Product = ({ product, addProduct }) => {
  product.quantity = 1;

  return (
    <div
      className="shelf-item"
      onClick={() => addProduct(product)}
      data-sku={product.title}
    >
      {/*TODO: change url image to firebase hit */}
      <Thumb
        classes="shelf-item__thumb"
        src={require(`../../../../static/products/${product.sku}.jpg`)}
        alt={product.title}
      />
      <p className="shelf-item__title">{product.title}</p>
      <div className="shelf-item__price">
        <div className="val">
          <small>Rp. </small>
          <b>{product.price}</b>
        </div>
      </div>
      <div className="shelf-item__buy-btn">Add to cart</div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default connect(
  null,
  { addProduct }
)(Product);

import React, { Component } from "react";
import PropTypes from "prop-types";
import Dashboard from "../layout/Dashboard"

class ProductFeed extends Component {
  render() {
    const { products } = this.props;

    return products.map((product) => <Dashboard key={product._id} product={product} />);
  }
}

ProductFeed.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductFeed;

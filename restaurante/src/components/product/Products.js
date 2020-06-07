import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProducts } from "../../actions/productAction";
import ProductFeed from "./ProductFeed";
import { Link } from "react-router-dom";

class Products extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    let { products } = this.props.product;

    return (
      <div>
        <header>Restaurante</header>
        <ProductFeed products={products} />
        <Link to="/orders"> Pedidos </Link>
      </div>
    );
  }
}

Products.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProducts })(Products);

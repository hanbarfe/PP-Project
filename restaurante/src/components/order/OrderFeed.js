import React, { Component } from "react";
import PropTypes from "prop-types";
import Order from "../layout/Order";

class OrderFeed extends Component {
  render() {
    const { orders } = this.props;

    return orders.map((order) => <Order key={order._id} order={order} />);
  }
}

OrderFeed.propTypes = {
  orders: PropTypes.array.isRequired,
};

export default OrderFeed;

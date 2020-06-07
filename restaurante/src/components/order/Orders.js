import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getOrders, updateOrders } from "../../actions/orderAction";
import OrderFeed from "./OrderFeed";

class Orders extends Component {
  componentDidMount() {
    this.props.getOrders();
  }

  updateStatus = () => {
    this.props.updateOrders();
  }

  render() {
    let { orders } = this.props.order;

    return (
      <div>
        <OrderFeed orders={orders} />
        <button type="sumit" onClick={this.updateStatus} > Atualizar </button>
      </div>
    );
  }
}

Orders.propTypes = {
  getOrders: PropTypes.func.isRequired,
  updateOrders: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps, { getOrders, updateOrders })(Orders);

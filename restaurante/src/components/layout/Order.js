import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeOrder } from "../../actions/orderAction";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    maxWidth: 345,
    display: "flex",
    float: "left",
  },
  media: {
    height: 140,
  },
});

class Order extends Component {
  cancelOrder = () => {
    const { order } = this.props;
    if(order.status === "NA_FILA") {
      this.props.removeOrder(order._id);
    } else {
      alert("Pedido não pode ser cancelado")
    }
  };

  render() {
    const { order } = this.props;
    const { classes } = this.props;
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={process.env.PUBLIC_URL + "/images/" + `${order.photo}`}
            title="Product image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {order.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Valor: {order.value}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Tipo: {order.type}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Status: {order.status}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={this.cancelOrder}>
            Cancelar
          </Button>
        </CardActions>
      </Card>
    );
  }
}

Order.propTypes = {
  removeOrder: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { removeOrder })
)(Order);

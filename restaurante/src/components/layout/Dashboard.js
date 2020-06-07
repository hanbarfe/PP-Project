import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { addOrder } from "../../actions/productAction";

const styles = (theme) => ({
  root: {
    maxWidth: 345,
    display: "flex", 
    float: "left"
  },
  media: {
    height: 140,
  },
});

class Dashboard extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    const { product } = this.props;
    this.props.addOrder(product._id);
  };

  render() {
    const { product } = this.props;
    const { classes } = this.props;
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={process.env.PUBLIC_URL + "/images/" + `${product.photo}`}
            title="Product image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Valor: {product.value}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Tipo: {product.type}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={this.onSubmit}>
            Pedir
          </Button>
        </CardActions>
      </Card>
    );
  }
}

Dashboard.propTypes = {
  addOrder: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { addOrder })
)(Dashboard);

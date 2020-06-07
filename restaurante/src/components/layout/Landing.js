import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Login from "../auth/Login";
import Register from "../auth/Register";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Landing = (props) => {
  const [register, setRegister] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (props.auth.isAuthenticated) {
      history.push("/dashboard");
    }
  });

  useEffect(() => {
    if (props.auth.isAuthenticated) {
      history.push("/dashboard");
    }
  }, [props.auth.isAuthenticated]);

  const showRegister = (e) => {
    e.preventDefault();
    setRegister(true);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {!register ? (
            <div>
              <Login></Login>
              <p className="form-group-has-feedback-cadastro">
                NÃO POSSUI CADASTRO?
                <button onClick={(event) => showRegister(event)}>
                  CLIQUE AQUI
                </button>
              </p>
            </div>
          ) : (
            <Register></Register>
          )}
        </div>
      </Grid>
    </Grid>
  );
};

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);

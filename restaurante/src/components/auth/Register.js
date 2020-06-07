import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authAction";
import { useHistory } from "react-router-dom";

import TextFieldGroup from "../common/TextFieldGroup";

const Register = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

  const onSubmit = (e) => {
    const newUser = {
      username: username,
      password: password,
    };
    props.registerUser(newUser);
  };

  return (
    <form
      onSubmit={(event) => onSubmit(event)}
      className="login100-form validate-form"
    >
      <div
        className="wrap-input100 validate-input"
        data-validate="Insira um username válido: Haniel"
      >
        <span className="label-input100">username</span>
        <TextFieldGroup
          placeholder="username"
          name="username"
          type="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div
        className="wrap-input100 validate-input"
        data-validate="Senha é Necessária"
      >
        <span className="label-input100">Senha</span>
        <TextFieldGroup
          placeholder="*************"
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div className="container-login100-form-btn">
        <div className="wrap-login100-form-btn">
          <div className="login100-form-bgbtn"></div>
          <button className="login100-form-btn">Registrar</button>
        </div>
      </div>
    </form>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { registerUser })(Register);

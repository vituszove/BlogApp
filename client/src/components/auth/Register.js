import React, { useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password does not match");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/loggedin" />;
  }
  return (
    <div className="container">
      <div className="row">
        <form className="col s12" onSubmit={e => onSubmit(e)}>
          <h3>Sign up</h3>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">account_circle</i>
              <input
                id="name"
                type="text"
                className="validate"
                name="name"
                value={name}
                onChange={e => onChange(e)}
                required
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                id="email"
                type="email"
                className="validate"
                name="email"
                value={email}
                onChange={e => onChange(e)}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">lock</i>
              <input
                id="password"
                type="password"
                className="validate"
                name="password"
                value={password}
                onChange={e => onChange(e)}
                required
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">lock</i>
              <input
                id="password2"
                type="password"
                className="validate"
                name="password2"
                value={password2}
                onChange={e => onChange(e)}
                required
              />
              <label htmlFor="password2">Confirm Password</label>
            </div>
          </div>
          <input type="submit" className="btn-large col s12" />
        </form>
      </div>
    </div>
  );
};
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { setAlert, register })(Register);

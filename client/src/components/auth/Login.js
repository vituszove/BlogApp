import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="container">
      <div className="row">
        <form className="col s12" onSubmit={e => onSubmit(e)}>
          <h3>Login</h3>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                id="email"
                type="email"
                className="validate"
                name="email"
                value={email}
                onChange={e => onChange(e)}
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
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <input
            type="submit"
            value="LOGIN"
            className="btn-large col s12 right "
          />
        </form>
      </div>
    </div>
  );
};
export default Login;

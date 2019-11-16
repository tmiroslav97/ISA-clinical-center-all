import React from 'react';

function Login() {
    return (
        <div className="row">
            <div className="col-md-3 col-sm-12 col-xs-12"></div>
            <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="login-form">
                    <form>
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control" placeholder="E-mail"></input>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" className="form-control" placeholder="Password"></input>
                        </div>
                        <button type="submit" className="btn btn-black">Login</button>
                    </form>
                </div>
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12"></div>
        </div>
    );
  }
  
  export default Login;
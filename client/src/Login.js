import React from 'react';
import './css/bootstrap.css';

function Login() {
    return (
        <div class="row">
            <div class="col-md-6 col-sm-12">
                <div class="login-form">
                    <form>
                        <div class="form-group">
                            <label>User Name</label>
                            <input type="text" class="form-control" placeholder="User Name"></input>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="text" class="form-control" placeholder="Password"></input>
                        </div>
                        <button type="submit" class="btn btn-black">Login</button>
                        <button type="submit" class="btn btn-black">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
  }
  
  export default Login;
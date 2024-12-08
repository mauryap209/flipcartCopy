import React from 'react';
import Ragister from '../Page/Ragister';
import '../Page/Login.css';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='Con' style={{marginTop:"75px"}}>
            <form className='form'>
            <h2>Welcome to Login </h2>
            
            <div class="container">
                <label for="uname"><b> Username </b></label>
                <br/>
                <input type="text" placeholder="Enter Username" name="uname" required />
                   <br/>
                <label for="psw"><b>Password</b></label>
                <br/>
                <input type="password" placeholder="Enter Password" name="psw" required />
                      <br/>
                <label>
                    <input type="checkbox"  name="remember" /> Remember me
                </label>
                <br/>
                <button type="submit">Login</button>
                
               
            </div>

            <div class="container" >
                <Link to='/ragister' className='sing'>Create an Account then Login</Link>
                <div class="psw">Forgot <a href="#" className='a'>Password?</a></div>
            </div>
            </form>
        </div>
    )
}
export default Login;
import React from 'react'
import '../Page/Ragister.css';
const Ragister = () => {
  return (
    <div className='con' style={{marginTop:"75px"}}>
      <form action="Action.php">
        <div class="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label for="email"><b>Email</b></label>
          <br />
          <input type="text" placeholder="Enter Email" name="email" id="email" className='fill' required />
          <br />
          <label for="psw"><b>Password</b></label>
          <br />
          <input type="password" placeholder="Enter Password" name="psw" id="psw" className='fill' required />
          <br />
          <label for="psw-repeat"><b>Repeat Password</b></label>
          <br />
          <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" className='fill' required />
          <br />
          <button type="submit" class="registerbtn">Register</button>
        </div>

        {/* <div class="container signin">
          <p>Already have an account? <a href="#" className='a'>Sign in</a>.</p>
        </div> */}
      </form>
    </div>
  )
}

export default Ragister;
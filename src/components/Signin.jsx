import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Signin(props) {
  return (
    <div className='wrapper d-flex align-items-center justify-content-center w-80'>
        <div className='login'>
        <section class="login-img hero container max-w-screen-lg mx-auto text-center pb-10">
      <div class="">
        <img src="https://theme4press.com/wp-content/uploads/2015/11/featured-small-circular.jpg" alt="screenshot" width="120" height="120" />
      </div>
  </section>
        <h2 className='mb-3 heading'>Sign In</h2>
        <form className='needs-validation'>
        <div className='from-grp was-validated mb-2'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='email' className='form-control' required></input>
            <div className="invalid-feedback">
                Please Enter Your Email!
            </div>
        </div>
        <div className='from-grp was-validated mb-2'>
            <label htmlFor='password' className='form-label'>Password</label>
            <input type='password' className='form-control' required></input>
            <div className="invalid-feedback">
                Please Enter Your Password!
            </div>
        </div>
        <div className='from-group form-check mb-2'>
            <input type='checkbox' className='form-check-input'></input>
            <label htmlFor='check' className='form-check-label'>Remember Me</label>
        </div>
        </form>
        <button type='submit' className='btn btn-success w-100 mt-2'>Sign In</button>
    </div>
    </div>
  )
}

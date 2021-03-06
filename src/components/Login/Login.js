import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
export const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h4 className="form-title">Login Page</h4>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" />
          </div>
          <input className="form-submit" type="submit" value="Login" />
        </form>

        <p>
          New to Ema-john?
          <Link className="form-link" to="/signup">
            Create new Account
          </Link>
        </p>
      </div>
    </div>
  )
}

import React from 'react'
import "../styles/Dash.css"
function Dash(props) {
    const {
        email,password,setemail,setpassword,handleLogin,
        handleSignup,
        hasaccount,
        sethasaccount,
        emailerror,
        passworderror
    }=props;
    
    return (
        <div classNameName="login">
<div className="container-login">
  <div className="left-login">
    <div className="header-login">
      <h2 className="animation-login a1-login">Welcome Back</h2>
      <h4 className="animation-login a2-login">Log in to your account using email and password</h4>
    </div>
    <div className="form-login">
                     <input type="email"
                className="form-field-login animation-login a3-login"
                autoFocus
                required
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                placeholder="Email Address"
                />
                <p className="errorMsg">{emailerror}</p>
               
                <input type="password"
                className="form-field-login animation-login a4-login"
                autoFocus
                placeholder="Password"
                required
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
                />
                   <p classNameName="errorMsg">{passworderror}</p>

           <button className="animation-login a6-login" onClick={handleLogin}>Sign in</button>
    </div>
  </div>
  <div className="right-login"></div>
</div>

        </div>

    )
}

export default Dash

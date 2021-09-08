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
        <div className="login">
            <div className="bg_login"/>
            <div className="bg"/>
            <div className="loginContainer">
                <label>Username</label>
                <input type="text"
                autoFocus
                required
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                />
                <p className="errorMsg">{emailerror}</p>
                <label>Password</label>
                <input type="password"
                autoFocus
                required
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
                />
                <p className="errorMsg">{passworderror}</p>
                <div className="btnContainer">
                    {hasaccount?(
                        <>
                        <button onClick={handleLogin}>Sign in</button>
                        <p>
                            Don't have an account ?
                            <span onClick={()=>sethasaccount(!hasaccount)}>Sign up</span>
                        </p>
                        </>
                    ):(
                        <>
                        <button onClick={handleSignup}>Sign up</button>
                        <p>
                            Have an account ?
                            <span onClick={()=>sethasaccount(!hasaccount)}>Sign in</span>
                        </p>
                        </>
                    )}
                </div>
                
            </div>
        </div>

    )
}

export default Dash

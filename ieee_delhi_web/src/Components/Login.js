import React from 'react';
import {useState,useEffect} from "react";
import Fire from './Fire';
import Dash from "./Dash"
import Dashboard from "./Dashboard"
import "../styles/Login.css"
function Login() {
    const [user, setuser] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [emailerror, setemailerror] = useState('')
    const [passworderror, setpassworderror] = useState('')
    const [hasaccount, sethasaccount] = useState(false)
    const clearInputs=()=>{
        setemail('');
        setpassword('');
    }
    const clearErrors=()=>{
        setemailerror('');
        setpassworderror('');
    }
    const handleLogin=()=>{
        clearErrors();
        Fire
            .auth()
            .signInWithEmailAndPassword(email,password)
            .catch((err)=>{
                switch(err.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setemailerror(err.message);
                        break;
                    case "auth/wrong-password":
                        setpassworderror(err.message);
                        break;
                }
            })
            
            

            
    };
    const handleSignup=()=>{
        clearErrors();
        Fire
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .catch((err)=>{
                switch(err.code){
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setemailerror(err.message);
                        break;
                    case "auth/weak-password":
                        setpassworderror(err.message);
                        break;
                }
            })
            
            

            
    };
    const handleLogout=()=>{
Fire.auth().signOut();
    };
    const authListener=()=>{
        Fire.auth().onAuthStateChanged((user)=>{
            if(user){
                clearInputs();
                setuser(user);
            }else{
                setuser('');
            }
        });
    };
    useEffect(() => {
        
        authListener();
    }, [])
    return (
            
        <div>
            {(user)?(
                <Dashboard handleLogout={handleLogout}/>
            ):(
                <Dash email={email}
            password={password}
            setemail={setemail}
            setpassword={setpassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasaccount={hasaccount}
            sethasaccount={sethasaccount}
            emailerror={emailerror}
            passworderror={passworderror}/>
            )}
        </div>
    )
}

export default Login


import {googleProvider } from '../config/firebase';
import {auth} from '../config/firebase'
import {createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import { useContext } from 'react';
function Login (){
    
  const currentUser = useContext(UserContext);    //since in context we are passing array of login user state 

    let navigate = useNavigate();
     async function signInWithGoogle (){
        try{
          await signInWithPopup(auth, googleProvider);
            currentUser[1](auth.currentUser.displayName);
            localStorage.setItem("currentUSer", auth.currentUser.displayName)   //just demo
            navigate("/");
        }
        catch(err){
          console.log(err);
        }
      }
    return (
        <>
        <div className="loginPage">
        <p>Sign in with google to continue</p>
        <button className="login-with-google-btn" onClick={signInWithGoogle}> Sign In With Google</button>
        </div>
        </>

    )
}
export default Login;
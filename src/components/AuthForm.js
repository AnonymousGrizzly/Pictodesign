import {useState, useRef} from "react";
import "../design/AuthForm.css";
import AuthContext from "../contexts/auth-context"

const AuthForm = () => {
    
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setisLoading] = useState(false);
  
    const switchAuthModeHandler = () => {
      setIsLogin((prevState) => !prevState);
    };
    const authCtx = useContext(AuthContext);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const submitHandler = (event) => {
      event.preventDefault();
      const enteredemail = emailInputRef.current.value;
      const enteredpassword = passwordInputRef.current.value;
      let url;
      if(isLogin){
        url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBzmagrwH6PYD8c-jhPEalgusQDLz-Vkqk"
      } else {
        url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBzmagrwH6PYD8c-jhPEalgusQDLz-Vkqk"
      }
      fetch(url, {
          method: "POST", body: JSON.stringify({enteredemail, password: enteredpassword, returnSecureToken: true}),
          headers: {"Content-Type": "application/json"},
      }).then(res=>{
          if(res.ok){
            return res.json();
          }else{
            res.json().then(data=>{
              authCtx.login(data.idToken);
              let errorMessage = "Authentication failed!";
              if(data && data.error && data.error.message){
                errorMessage = data.error.message;
              }
              
              throw new Error(errorMessage);
            });
          }
        }).then(data => {}).catch(err =>{
          alert(errMessage);
        });
    }; 
    return (
      <section className="auth">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit ={submitHandler}>
          <div className="control">
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' required ref={emailInputRef} />
          </div>
          <div className="control">
            <label htmlFor='password'>Your Password</label>
            <input type='password' id='password' required ref={passwordInputRef}/>
          </div>
          <div className="actions">
            {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
            {isLoading && <p>Sending . . .</p>}
            <button type='button' className="toggle" onClick={switchAuthModeHandler} >
              {isLogin ? 'Create new account' : 'Login with existing account'}
            </button>
          </div>
        </form>
      </section>
    );
  };
  
  export default AuthForm;
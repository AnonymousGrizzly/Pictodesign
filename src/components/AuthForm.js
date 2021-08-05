import {useState, useRef} from "react";
import "../design/AuthForm.css";

const AuthForm = () => {
    
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setisLoading] = useState(false);

    const switchAuthModeHandler = () => {
      setIsLogin((prevState) => !prevState);
    };
    
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const submitHandler = (event) => {
      event.preventDefault();
      const enteredemail = emailInputRef.current.value;
      const enteredpassword = passwordInputRef.current.value;

      if(isLogin){

      } else {
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBzmagrwH6PYD8c-jhPEalgusQDLz-Vkqk", {
          method: "POST", body: JSON.stringify({enteredemail, password: enteredpassword, returnSecureToken: true}),
          headers: {"Content-Type": "application/json"}
        }
        ).then(res=>{
          if(res.ok){

          }else{
            res.json().then(data=>{
              console.log(data);
              let errorMessage = "Authentication failed!";
              if(data && data.error && data.error.message){
                errorMessage = data.error.message;
              }
              alert(errorMessage);
            });
          }
        });
      }
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
            <button>{isLogin ? 'Login' : 'Create Account'}</button>
            <button type='button' className="toggle" onClick={switchAuthModeHandler} >
              {isLogin ? 'Create new account' : 'Login with existing account'}
            </button>
          </div>
        </form>
      </section>
    );
  };
  
  export default AuthForm;
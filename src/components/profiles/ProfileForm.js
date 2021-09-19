//import css
import {useRef, useContext} from "react";
import AuthContext from "../../contexts/auth-context"
import "../../design/ProfileForm.css"


const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const submitHandler = event => {
    event.preventDefault();
    const enteredNewPassword = newPasswordInputRef.current.value;
    //add validation
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=[AIzaSyBzmagrwH6PYD8c-jhPEalgusQDLz-Vkqk]", {
      method: "POST", 
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        "Content-Type" : "application/json"
      }
    }).then(res=>{}); //error handling
  };



  return (
    <form className="form">
      <div className="control">
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPasswordInputRef} />
      </div>
      <div className="action">
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;

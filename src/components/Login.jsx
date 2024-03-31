import { useState } from "react";
import app from "../Firebase/firebase.init";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

const Login = () => {
  const [user, setUser] = useState();
  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider();
  const GitHubProvider = new GithubAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      })
  }
  const handleGitHubSignIn=()=>{
    signInWithPopup(auth,GitHubProvider)
    .then(result=>{
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
    }).catch((error)=>{
        console.log(error);
    })
  }
  const handleSignOut=()=>{
    signOut(auth).then((result)=>{
     console.log(result);
        setUser(null);
    }).catch((error)=>{
        console.log(error);
    })
  };
  return (
    <div>
       
     {
      user ?   <button onClick={handleSignOut}>Sign Out</button>:
      <div>
        <button onClick={handleGoogleSignIn}>Google login</button>
      <button onClick={handleGitHubSignIn}>GitHub login</button>
        </div>
     }
     
      {
        user && <div>
          <h2>userName:  {user.displayName}</h2>
          <p>Email:{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      }
    </div>
  );
};

export default Login;

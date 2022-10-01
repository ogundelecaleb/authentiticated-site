import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./Login.css";

const LoginAdmin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (e) {
      console.log(e);
      setError("Failed to sign in");
    }

    setLoading(false);
  }

  return (
    <>
      <div className="section">
      <div className="container">
        <div className="row form-container">
          <div className="col left-side">
            <img src="./Mobile login-bro.svg" alt="avatar" />
          </div>
          <div className="col right-side">
            <div className="login-form">
              <div className="profile">
                <img src="./profile_pic.svg" alt="avatar" />
                <h3>Log In</h3>
                <p className={"errmsg"} aria-live="assertive"> {error} </p>
              </div>
              <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="input-box">
                  <i className="bx bx-user"></i>
                  
                  <input
                    type="text"
                    id="email"
                    ref={emailRef}
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-box">
                  <i className="bx bx-key"></i>
                  <input
                    type="password"
                    id="password"
                    required
                    ref={passwordRef}
                  />
                  <label htmlFor="password">PassWord</label>
                </div>
                <div className="helper">
                  <div>
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">Remember Me</label>
                  </div>
                  <button className="text-btn"><Link to="/forgot-password">Forgot Password?</Link></button>
                </div>
                <button disabled={loading} className="contained-btn">
                LOG IN
              </button>
              </form>
              
              <div className="social-media">
                <h3>Sign in With</h3>
                <div>
                  <i className="bx bxl-google"></i>
                  <i className="bx bxl-facebook"></i>
                  <i className="bx bxl-twitter"></i>
                </div>
              </div>
              <div className="form-footer">
                <div>
                  <p>Dont have account yet ?</p>

                  <button className="simple-btn signUp-btn">
                    <Link to="/sign-up">Sign Up</Link>
                  </button>
                </div>
                <div className="w-100 text-center mt-3">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default LoginAdmin;


// {
//   /* <h1>Login</h1>
// <form onSubmit={handleSubmit}>
//   <p className={"errmsg"} aria-live="assertive">
//     {error}
//   </p>
//   <div className="input">
//     <label htmlFor="email" className="label">
//       Email:
//     </label>
//     <input
//       type="text"
//       id="email"
//       ref={emailRef}
//       autoComplete="off"
//       required
//     />
//   </div>
//   <div className="input">
//     <label htmlFor="password">Password:</label>
//     <input type="password" id="password" required ref={passwordRef} />
//   </div>

//   <button disabled={loading} className="btn">
//     Log In
//   </button>
// </form>
// <div className="w-100 text-center mt-3">
//     <Link to="/forgot-password">Forgot Password?</Link>
//   </div>

// <div className="signup">
//   <p>
//     Not registered?
//     <br />
//     <span className="line">
//       <Link to="/sign-up">Sign Up</Link>
//     </span>
//   </p>
// </div> */
// }

// import React, { useEffect, useRef, useState,  } from "react"
// import { Form, Button, Card, Alert } from "react-bootstrap"
// import { useAuth } from "./AuthContext"
// import { Link, useNavigate } from "react-router-dom"

// export default function Login() {
//   const emailRef = useRef()
//   const passwordRef = useRef()
//   const { login, currentUser } = useAuth()
//   const [error, setError] = useState("")
//   const [loading, setLoading] = useState(false)
//   const history = useNavigate()

// useEffect(()=> {
//       if(currentUser){
//         history('/')
//       }
//     })

//   async function handleSubmit(e) {
//     e.preventDefault()

//     try {
//       setError("")
//       setLoading(true)
//       await login(emailRef.current.value, passwordRef.current.value)

//       history.push("/")
//     } catch {
//       setError("Failed to log in")
//     }
// setLoading(false)

//   }

//   return (
//     <>
//       <Card>
//         <Card.Body>
//           <h2 className="text-center mb-4">Log In</h2>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <Form onSubmit={handleSubmit}>
//             <Form.Group id="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" ref={emailRef} required />
//             </Form.Group>
//             <Form.Group id="password">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" ref={passwordRef} required />
//             </Form.Group>
//             <Button disabled={loading} className="w-100" type="submit">
//               Log In
//             </Button>
//           </Form>
//           <div className="w-100 text-center mt-3">
//             <Link to="/forgot-password">Forgot Password?</Link>
//           </div>
//         </Card.Body>
//       </Card>
//       <div className="w-100 text-center mt-2">
//         Need an account? <Link to="/signup">Sign Up</Link>
//       </div>
//     </>
//   )
// }

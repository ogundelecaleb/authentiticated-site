import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    if (currentUser) {
      history("/");
    }
  });

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);

      history.push("/login");
    } catch {
      setError("Failed to create an account");
      console.log(error);
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
                  <h3>Sign Up</h3>
                  <p className={"errmsg"} aria-live="assertive">
                    {" "}
                    {error}{" "}
                  </p>
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
                  <div className="input-box">
                    <i className="bx bx-key"></i>
                    <input
                      id="password-confirm"
                      type="password"
                      ref={passwordConfirmRef}
                      required
                    />
                    <label htmlFor="password-confirm">Confirm PassWord</label>
                  </div>
                  <div className="helper">
                    <div>
                      <input type="checkbox" id="checkbox" />
                      <label htmlFor="checkbox">Remember Me</label>
                    </div>
                    <button className="text-btn">
                      <Link to="/forgot-password">Forgot Password?</Link>
                    </button>
                  </div>
                  <button disabled={loading} className="contained-btn">
                    SIGN UP
                  </button>
                </form>

                <div className="social-media">
                  <h3>Sign UP With</h3>
                  <div>
                    <i className="bx bxl-google"></i>
                    <i className="bx bxl-facebook"></i>
                    <i className="bx bxl-twitter"></i>
                  </div>
                </div>
                <div className="form-footer">
                  <div>
                    <p>Already have account yet ?</p>

                    <button className="simple-btn signUp-btn">
                      <Link to="/login">login</Link>
                    </button>
                  </div>
                  <div className="w-100 text-center mt-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  
    </>
  );
}

// {/* <Card>
// <Card.Body>
//   <h2 className="text-center mb-4">Sign Up</h2>
//   {error && <Alert variant="danger">{error}</Alert>}
//   <Form onSubmit={handleSubmit}>
//     <Form.Group id="email">
//       <Form.Label>Email</Form.Label>
//       <Form.Control type="email" ref={emailRef} required />
//     </Form.Group>
//     <Form.Group id="password">
//       <Form.Label>Password</Form.Label>
//       <Form.Control type="password" ref={passwordRef} required />
//     </Form.Group>
//     <Form.Group id="password-confirm">
//       <Form.Label>Password Confirmation</Form.Label>
//       <Form.Control type="password" ref={passwordConfirmRef} required />
//     </Form.Group>
//     <Button disabled={loading} className="w-100" type="submit">
//       Sign Up
//     </Button>
//   </Form>
// </Card.Body>
// </Card> */}

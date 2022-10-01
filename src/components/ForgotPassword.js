import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
      <div className="forgot-password">
        <div className="wrapper">
          <h2>Password Reset</h2>
          <p className={"errmsg"} aria-live="assertive">
            {" "}
            {error}{" "}
          </p>
          <p className={"errmsg"} aria-live="assertive">
            {" "}
            {message}{" "}
          </p>
          <form action="" onSubmit={handleSubmit} className='passreset-form'>
            <div className="passreset-input-box">
              <i className="bx bx-user"></i>
              <input type="email" ref={emailRef} id="email" required />
              <label htmlFor="email">email</label>
            </div>

            <Button disabled={loading} className="w-100" type="submit">
              Reset Password
            </Button>
          </form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/sign-up">Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  );
}

// {/* <Card>
// <Card.Body>
//   <h2 className="text-center mb-4">Password Reset</h2>
//   {error && <Alert variant="danger">{error}</Alert>}
//   {message && <Alert variant="success">{message}</Alert>}
//   <Form onSubmit={handleSubmit}>
//     <Form.Group id="email">
//       <Form.Label>Email</Form.Label>
//       <Form.Control type="email" ref={emailRef} required />
//     </Form.Group>
//     <Button disabled={loading} className="w-100" type="submit">
//       Reset Password
//     </Button>
//   </Form>
//   <div className="w-100 text-center mt-3">
//     <Link to="/login">Login</Link>
//   </div>
// </Card.Body>
// </Card>
// <div className="w-100 text-center mt-2">
// Need an account? <Link to="/signup">Sign Up</Link>
// </div> */}

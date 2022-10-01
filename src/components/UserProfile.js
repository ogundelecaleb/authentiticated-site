import React, { useState } from "react";
import {Button} from './Button.js'
import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";
import './UserProfile.css'

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <div className="user-profile">
        <div className="profile">
          <img src="./profile_pic.svg" alt="avatar" />
          <h3>Profile</h3>
          <p className={"errmsg"} aria-live="assertive">
            {" "}
            {error}{" "}
          </p>
        </div>
        <strong>Email:</strong> {currentUser.email}
        <div className="box">
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
          <Button variant="link" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </div>
    </>
  );

  // return (
  //   <>
  //     <Card>
  //       <Card.Body>
  //         <h2 className="text-center mb-4">Profile</h2>
  //         {error && <Alert variant="danger">{error}</Alert>}
  //         <strong>Email:</strong> {currentUser.email}
  //         <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
  //           Update Profile
  //         </Link>
  //       </Card.Body>
  //     </Card>
  //     <div className="w-100 text-center mt-2">
  //       <Button variant="link" onClick={handleLogout}>
  //         Log Out
  //       </Button>
  //     </div>
  //   </>
  // )
}

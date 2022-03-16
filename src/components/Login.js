import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Container } from "react-bootstrap";
import "./Login.css";
import { auth, provider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate('/player')
        console.log(result);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.email;
      });
  };
  return (
    <div>
      <h1 style={{ alignText: "center" }}>Welcome to Soccer Training Beta!</h1>
      <Container className="Login">
        <Container className="Login-form">
          <Button
            sx={{
              "&:hover": {
                borderColor: "purple",
                backgroundColor: "#f2d5f2",
                color: "White",
              },
              color: "blue",
              borderColor: "black",
            }}
            onClick={() => signIn()}
            variant="outlined"
          >
            Sign in with Google
          </Button>
        </Container>
      </Container>
    </div>
  );
}

export default Login;

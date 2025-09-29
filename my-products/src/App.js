import React from "react";
import { Card } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

function App() {
  const firstName = "Hellen"; 

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card style={{ width: "22rem", padding: "10px" }}>
        <div style={{ position: "relative" }}>
          <Image />
          <div 
            style={{
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(255,255,255,0.7)",
              padding: "5px 10px",
              borderRadius: "8px",
              fontWeight: "bold"
            }}
          >
            {firstName ? `Hello, ${firstName}!` : "Hello, there!"} 😊
          </div>
        </div>

        <Card.Body className="text-center">
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;   

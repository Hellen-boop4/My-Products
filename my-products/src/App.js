import React from "react";
import { Card } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./images";

function App() {
  const firstName = "Hello There"; 

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card style={{ width: "22rem", padding: "10px" }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <div className="text-center mt-3">
        <h3>
          {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
        </h3>
        {firstName && (
          <img
            src="https://via.placeholder.com/100.png?text=😊"
            alt="greeting"
            style={{ marginTop: "10px" }}
          />
        )}
      </div>
    </div>
  );
}

export default App;

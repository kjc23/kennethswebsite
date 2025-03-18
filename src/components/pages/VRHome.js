import React, { useState } from "react";
import Viewer360 from "./Viewer360";


export default function VRHome() {
  const [viewing, setViewing] = useState(false);

  return (
    <div>
      {viewing ? (
        <Viewer360 onBack={() => setViewing(false)} />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundImage: "url('/kennethswebsite/photosphere-images/kildonan.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)"
          }}
        >
          <h1>Broch of Kilphedir 360° Photo Viewer</h1>
          <h2>By: Kenneth Cain</h2>
          <button onClick={() => setViewing(true)} style={{ padding: "10px 20px", fontSize: "18px", cursor: "pointer", color: "black" }}>
            View Photos
          </button>
        </div>
      )}
    </div>
  );
}
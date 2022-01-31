import React from "react";

export default function Notfound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "90vh",
      }}
    >
      <h1 style={{ fontSize: "300%" }}>404</h1>
      <h3>Page not found</h3>
    </div>
  );
}

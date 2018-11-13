import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <div>
        <Link to="/managers">manager</Link>
        <hr />
        <Link to="/bikers">bikers</Link>
      </div>
    </div>
  );
}

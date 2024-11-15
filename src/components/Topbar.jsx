import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Topbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const showBackButton = location.pathname !== "/";

  return (
    <div className="topbar">
      {showBackButton && (
        <button className="btn" onClick={() => navigate(-1)}>
          <ion-icon name="arrow-back-outline"></ion-icon>
        </button>
      )}
      <p>Atlas</p>
      <div className="otherside">
        <ion-icon name="search"></ion-icon>
      </div>
    </div>
  );
}

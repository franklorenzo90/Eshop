import React, { useState } from "react";

function FlashMessage() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  const show = (msg) => {
    setMessage(msg);
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      setMessage("");
    }, 2000);
  };

  const Alert = () => {
    if (visible) {
      return (
        <div
          style={{ zIndex: 2, position: "fixed" }}
          className={visible ? "alert alert-success me-4" : "d-none"}
          role="alert"
        >
          <i className="fas fa-check-circle me-2"></i>
          {message}
        </div>
      );
    } else {
      return null;
    }
  };

  return { show, Alert };
}

export default FlashMessage;

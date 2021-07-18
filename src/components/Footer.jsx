import React from "react";

function Footer() {
  const date = new Date().toDateString();
  return (
    <footer className="footer fixed-bottom py-3 bg-light">
      <div className="container text-center">
        <span className="text-muted">
          &copy;Eshop {date}
        </span>
      </div>
    </footer>
  );
}

export default Footer;

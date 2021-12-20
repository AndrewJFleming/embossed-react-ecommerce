import React from "react";

import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletterWrapper">
      <h2>Newsletter</h2>
      <p>Sign up for the newsletter to receive updates on new products.</p>
      <form>
        <input type="email" placeholder="Your email" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Newsletter;

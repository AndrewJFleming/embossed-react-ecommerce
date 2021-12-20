import React from "react";

import { Container } from "react-bootstrap";

const Newsletter = () => {
  return (
    <Container>
      <h2>Newsletter</h2>
      <p>Sign up for the newsletter to receive updates on new products.</p>
      <form>
        <input type="email" placeholder="Your email" />
        <button>Send</button>
      </form>
    </Container>
  );
};

export default Newsletter;

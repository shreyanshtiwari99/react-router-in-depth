import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Necessitatibus, officia magni fugit esse obcaecati eos! Tenetur
        excepturi assumenda sint adipisci hic eos tempora dolore nihil, saepe
        architecto ad! Molestias, in.
      </p>

      <p>
        Go to the <Link to="/">Homepaage</Link>
      </p>
    </div>
  );
}

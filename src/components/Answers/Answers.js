import React from "react";
import "./Answers.css";

const Answers = () => {
  return (
    <div>
      <section className="answers">
        <h3>
          <b>Question: </b>How react works?
        </h3>
        <h4>Answer:</h4>
        <br />
        <p>
          React goes over the virtual DOM, the diffing algorithm, optimizations
          that the diffing algorithm uses to speed up the process. There is also
          a bit on some tools that we can use to optimize and speed up our React
          app. The invention of AJAX (Asynchronous JavaScript and XML) brought
          us the single-page application, or SPA. Since browsers could request
          and load tiny bits of data using AJAX, entire web applications could
          now run out of a single page and rely on JavaScript to update the user
          interface.
        </p>
        <h3>
          <b>Question: </b> How use state works?
        </h3>
        <h4>Answer:</h4>
        <br />
        <p>
          Hooks are a fundamentally simpler way to encapsulate stateful behavior
          and side effects in user interfaces. The useState is a Hook that
          allows us to have state variables in functional components. We can
          pass the initial state to this function and it returns a variable with
          the current state value (not necessarily the initial state) and
          another function to update this value.
        </p>
      </section>
    </div>
  );
};

export default Answers;

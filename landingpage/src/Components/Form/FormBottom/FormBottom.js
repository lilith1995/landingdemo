import React from "react";

import "./FormBottom.scss";

const Form = () => {
  return (
    <form class="access-form-container bottom" autocomplete="off">
      <input
        type="email"
        name="email"
        id="access-form-email"
        class="bottom"
        placeholder="Enter your work email"
      />
      <button className="btn2">Request Access</button>
    </form>
  );
};

export default Form;

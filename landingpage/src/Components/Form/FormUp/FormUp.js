import React from "react";

import "./FormUp.scss";

const Form = () => {
  return (
    <div class="access-form-header">
      <form className="access-form-container">
        <div className="access-form-up" autocomplete="off">
          <input
            class
            type="email"
            name="email"
            id="access-form-email"
            placeholder="Enter your work email"
          />
          <button className="btn1">Request Access</button>
        </div>
      </form>
    </div>
  );
};

export default Form;

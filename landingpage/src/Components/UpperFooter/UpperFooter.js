import { React } from "react";

import FormBottom from "../Form/FormBottom/FormBottom";
import "./UpperFooter.css";

const UpperFooter = () => {
  return (
    <div className="upper-footer">
      <div className="Get-Orbiter">
        <p className="inOrbiter">Get Orbiter Early Access</p>
      </div>
      <div className="data-revolution">
        <p className="inDataRevolution">
          We're opening early access to companies that want to join the
          automated data revolution.
        </p>
      </div>
      <div className="app-form">
        <input className="input-footer" />
        <FormBottom />
      </div>
    </div>
  );
};

export default UpperFooter;

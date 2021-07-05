import { React } from "react";
import Farmstsead from "../../Assets/logo_farmstsead_grey.png";
import Tandem from "../../Assets/logo_tandem_grey.png";
import DoorDash from "../../Assets/logo_doordash_grey.png";
import Rune from "../../Assets/logo_rune_grey.png";

import "./UnderHeader.css";

const UnderHeader = () => {
  return (
    <div className="app-underHeader">
      <div className="Trusted">
        <p>Trusted by next-gen companies</p>
      </div>
      <div className="fourPics">
        <span>
          {" "}
          <img src={Farmstsead} alt="fistPicture" className="firstPic" />
        </span>
        <span>
          <img src={Tandem} alt="Tandem" className="secondPic" />
        </span>
        <span>
          <img src={DoorDash} alt="DoorDash" className="thirdPic" />
        </span>
        <span>
          <img src={Rune} alt="Rune" className="fourtPic" />
        </span>
      </div>
    </div>
  );
};

export default UnderHeader;

import React from "react";
import logo from "../../assets/img/footer/LOGO-footer.png";
import instagram from "../../assets/img/footer/instagram.png";
import telegram from "../../assets/img/footer/telegram.png";
import facebook from "../../assets/img/footer/facebook.png";
import linkedin from "../../assets/img/footer/linkedin .png";

const SecondPart = () => {
  return (
    <div className="second-part">
      <img src={logo} />
      <div className="flex mt-6 bg-social rounded-lg py-2 justify-around w-96">
        <div>
          <p className="text-lg">Social Media</p>
        </div>

        <div className="flex gap-3">
          <a href="#">
            <img src={instagram} />
          </a>
          <a href="#">
            <img src={telegram} />
          </a>
          <a href="#">
            <img src={facebook} />
          </a>
          <a href="#">
            <img src={linkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SecondPart;

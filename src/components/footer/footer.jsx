import React from "react";
import { Link } from "react-router-dom";
import { Icon19, Icon20, Icon21, logo } from "../imagepath";

const Footer = () => {
  return (
    <footer className="footer row m-0 p-0 pt-3 pb-3 justify-content-md-between justify-content-center align-items-center flex-md-row flex-col" style={{backgroundColor:'rgb(245 244 244)'}}>
      <div className="w-auto ms-2">
        <p className="m-0 p-0 text-secondary w-auto">
          2024 © Unfluke. All rights reserved.
        </p>
      </div>
      <div className="w-auto d-flex align-items-center ">
        <Link className=" w-md-auto ms-md-3 me-md-3 ms-1 me-1" to='https://api.whatsapp.com/send/?phone=%2B919971701053&text&type=phone_number&app_absent=0'>
          <i className=" m-0 p-0 w-auto fs-3 bi bi- bi-whatsapp"></i>
        </Link>
        <Link className=" w-md-auto ms-md-3 me-md-3 ms-1 me-1" to='https://twitter.com/aseem_singhal'>
          <i className="m-0 p-0 w-auto fs-3 bi bi- bi-twitter"></i>
        </Link>

        <Link className=" w-md-auto ms-md-3 me-md-3 ms-1 me-1" to='https://www.linkedin.com/in/singhalaseem/'>
          <i className="m-0 p-0 w-auto fs-3 bi bi- bi-linkedin"></i>
        </Link>
        <Link className=" w-md-auto ms-md-3 me-md-3 ms-1 me-1">
          <p className="m-0 p-0 w-auto">Terms and conditions</p>
        </Link>
        <Link className=" w-md-auto ms-md-3 me-md-3 ms-1 me-1">
          <p className="m-0 p-0 w-auto">Refund Policy</p>
        </Link>
        <Link className=" w-md-auto ms-md-3 me-md-3 ms-1 me-1">
          <p className="m-0 p-0 w-auto">Privacy Policy</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

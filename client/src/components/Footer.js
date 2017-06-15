import React from "react";
import { Link } from "react-router-dom";

const Footer = props => {
  let style = {
    backgroundColor: "#DCC6E0",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "5px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "30px",
    width: "100%"
  };

  return (
    <footer style={style} className="text-center">

      <p>
        <Link to={"/terms"}>
          <h1>Terms of Service</h1>
        </Link>
        Powered by
        {" "}
        <i className="fa fa-foursquare" aria-hidden="true" />
        {" "}
        Foursquare
      </p>
    </footer>
  );
};

export default Footer;

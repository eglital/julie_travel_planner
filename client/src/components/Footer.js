import React from "react";
import { Link } from "react-router-dom";

const Footer = props => {
  let style = {
    backgroundColor: "#DCC6E0",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",

    marginTop: "50px",
    paddingTop: "25px",
    position: "absolute",
    right: "0",
    left: "0",
    bottom: "0",
    width: "100%"
  };

  return (
    <footer style={style} className="text-center">
      <p>
        <h6><Link to={"/terms"}>Terms of Service</Link></h6>
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

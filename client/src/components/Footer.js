import React from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../assets/powered_by_google_on_white.png';
import foursquareLogo from '../assets/foursquare.ico';

const Footer = props => {
  let style = {
    backgroundColor: 'rgba(193, 125, 191, .33)',
    borderTop: '1px solid #E7E7E7',
    textAlign: 'center',
    width: '100%'
  };

  return (
    <footer style={style} className="text-center app-footer">
      <p style={{ marginBottom: '0px' }}>
        <Link to={'/terms'}>Terms of Service</Link>
      </p>
      <p style={{ marginBottom: '0px' }}>
        <span>
          <img
            src={googleLogo}
            alt=""
            style={{ display: 'inline', marginRight: '5px' }}
          />
        </span>
        <span
          style={{
            color: 'rgb(109, 98, 108)',
            fontFamily: 'sans-serif',
            fontWeight: '300',
            fontSize: '15px'
          }}
        >
          and
        </span>
        <span style={{ color: 'white' }}>
          <img
            src={foursquareLogo}
            alt=""
            style={{ height: '22px', marginRight: '-5px', marginLeft: '5px' }}
          />
          FOURSQUARE
        </span>
      </p>
    </footer>
  );
};
//252,83, 132
export default Footer;

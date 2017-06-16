import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => {
  let style = {
    backgroundColor: 'rgba(193, 125, 191, .33)',
    borderTop: '1px solid #E7E7E7',
    textAlign: 'center',
    position: 'absolute',
    right: '0',
    left: '0',
    bottom: '0',
    width: '100%'
  };

  return (
    <footer style={style} className="text-center">
      <p style={{ marginBottom: '0px' }}>
        <Link to={'/terms'}>Terms of Service</Link>
      </p>
      <p style={{ marginBottom: '0px' }}>
        Powered by
        {' '}
        <i className="fa fa-foursquare" aria-hidden="true" />
        {' '}
        Foursquare
      </p>
    </footer>
  );
};

export default Footer;

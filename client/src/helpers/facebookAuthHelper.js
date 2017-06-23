let FacebookAuthHelper = {};

FacebookAuthHelper.makeFBQS = () => {
  let fbAuth = JSON.stringify(localStorage.getItem('facebookAuth'));
  return `facebookjwt=${fbAuth}`;
};

FacebookAuthHelper.authUser = token => {
  return localStorage.setItem('facebookAuth', token);
};

FacebookAuthHelper.unauthUser = () => {
  localStorage.removeItem('facebookAuth');
  window.location = '/';
};

FacebookAuthHelper.userLoggedIn = () => {
  return localStorage.getItem('facebookAuth');
};

module.exports = FacebookAuthHelper;

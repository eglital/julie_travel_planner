let FacebookAuthHelper = {};

FacebookAuthHelper.makeFBQS = () => {
    return `facebookjwt=${localStorage.getItem('facebookAuth')}`;
};

FacebookAuthHelper.authUser = (token) => {
    return localStorage.setItem('facebookAuth', token);
}

FacebookAuthHelper.unauthUser = () => {
    localStorage.removeItem('facebookAuth');
    window.location = '/';
}

FacebookAuthHelper.userLoggedIn = () => {
    return localStorage.getItem('facebookAuth');
}


module.exports  = FacebookAuthHelper;
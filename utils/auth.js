const withAuth = (req, res, next) => {
    //If the user is not logged in then redirect request to login route
    if(!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;
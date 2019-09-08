const router = require('express').Router();
const passport = require('passport');
//auth login will render a login page
router.get('/login', (req, res) => {
	res.render('login', { user: req.user }); 
});	

//auth logout
router.get('/logout', (req, res) => {
	//handle with passport
	req.logout();
	res.redirect('/');
});

//auth with google, scope tells passport what we want to retrieve from the user profile
router.get('/google', passport.authenticate('google', {
	scope: ['profile']
}));

//callback for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
	//res.send(req.user);
	res.redirect('/profile/');
});

module.exports = router;
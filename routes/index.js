exports.index = function(req, res) {
	res.render('index', {
		title: 'Home',
		classname: 'index'
	});
}


exports.about = function(req, res) {
	res.render('index', {
		title: 'About',
		classname: 'about'
	});
}

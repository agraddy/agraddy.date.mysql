var mod = function(input) {
	if(!input) {
		input = new Date();
	}
	return input.toISOString().substring(0, 19).replace('T', ' ');
}

module.exports = mod;

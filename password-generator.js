var generator = require('generate-password');

var password = generator.generate({
	length: 06,
	numbers: true
});


console.log(password);
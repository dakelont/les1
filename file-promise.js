const fs = require('fs'), opt = { encoding: 'utf8' };
function read(file) {
	return new Promise((done, fail)=>{
		fs.readFile(file , opt, (err, content) => {
			if(err) fail(err);
			else done(content);
		});
	});
}
function write(file , data) {
	return new Promise((done, fail)=>{
		fs.writeFile(file , data, opt, (err, content) => {
			if(err) fail(err);
			else done(file);
		});
	});
}
module.exports={write,read};

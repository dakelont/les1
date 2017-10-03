const fs = require('fs'), opt = { encoding: 'utf8' };
const files=[];

function show(path) {
	return new Promise((done, fail)=>{
		fs.readdir(path, (err, file) => {
			if(err) fail(err);
			else {
				Promise.all(file.map(item => read(path, item)))
					.then(concents => done(concents))
					.catch(error => console.error(error));
			}
		});
	});
}
function read(path, file) {
	return new Promise((done, fail)=>{
		fs.readFile(path + file, opt, (err, content) => {
			if(err) fail(err);
			else done({"name":file, "content":content});
		});
	});
}
module.exports=show;

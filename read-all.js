const fs = require('fs'), opt = { encoding: 'utf8' };
const files=[];

function show(path) {
	return new Promise((done, fail)=>{
		fs.readdir(path, (err, file) => {
			if(err) fail(err);
			else {
				file.forEach(function(item, i) {
					read(path + item)
						.then(content => files.push({"name":item, "content":content})
						.catch(error => console.error(error));
				})
				console.log(files);
				done(files);
			}
		});
	});
}
function read(file) {
	return new Promise((done, fail)=>{
		fs.readFile(file, opt, (err, content) => {
			if(err) fail(err);
			else done(content);
		});
	});
}
module.exports=show;

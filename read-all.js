const fs = require('fs'), opt = { encoding: 'utf8' };
const files=[];

function show(path) {
	return new Promise((done, fail)=>{
		readDir(path)
			.then(files => Promise.all(
				files.map(item => read(path,item)))
			)
			.then(content => done(content));
	});
}

function readDir(path) {
	return new Promise((done, fail)=>{
		fs.readdir(path, (err, files) => {
			if(err) fail(err);
			else done(files);
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

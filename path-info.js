const fs = require('fs'), opt = { encoding: 'utf8' };

function showDir(link, callback) {
	let info ={};
	try {
		info.path = link;
		let stats = fs.stat(link, (err, stats) => {
			if (stats.isFile()) {
				info.type = 'file';
				info.content = fs.readFileSync(link, opt.encoding);
			}
			if (stats.isDirectory()) {
				info.type = 'directory';
				info.childs = fs.readdirSync(link);
			}
			callback(null, info);
		});

	}
	catch(err) {
		callback(err, info);
	}
}

module.exports=showDir;

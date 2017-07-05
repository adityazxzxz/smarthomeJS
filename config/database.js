var mysql = require('mysql');

function Connection(){
	this.pool = null;
	var konek = {
		host:'localhost',
		user:'root',
		password:'password',
		database:'stooldb'
	};

	var pool = mysql.createPool(konek);

	this.acquire = function(callback){
			pool.getConnection(function(err,connection){
			callback(err,connection);
		});
	};
}

module.exports = new Connection();


var db = require('../../config/database');

function Todo(){
	this.get = function(req,res,next){
		db.acquire(function(err,con){
			if(err) throw err;
			con.query('select * from campaign',function(err,data){
				con.release();
				if(err)
					return res.json({status:'400',message:'Failed',result:[]});

				return res.json({status:'200',message:'Success',result:data});
			});
		});
	}

	this.post = function(req,res,next){
		db.acquire(function(err,con){
			if(err) throw err;
			con.query('select * from pmb',function(err,data){
				con.release();
				if(err)
					return res.json({status:'400',message:'Failed',result:[]});

				return res.json({status:'200',message:'Success',result:data});
			});
		});
	}

	this.update = function(req, res) {
    connection.acquire(function(err, con) {
      con.query('update user set ? where id_user = ?', [req.body, req.body.id_user], function(err, result) {
	        con.release();
	        if (err) {
	          res.send({status: 400, message: 'User update failed'});
	        } else {
	          res.send({status: 200, message: 'User updated successfully'});
	        }
	      });
	    });
	  };

	this.delete = function(id, res) {
	    connection.acquire(function(err, con) {
	      con.query('delete from user where id_user = ?', [id], function(err, result) {
	        con.release();
	        if (err) {
	          res.send({status: 400, message: 'Failed to delete'});
	        } else {
	          res.send({status: 200, message: 'Deleted successfully'});
	        }
	      });
	    });
	  };

}

module.exports = new Todo();
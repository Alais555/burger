// MySQL connection.
const connection = require("../config/connection.js");

const orm = {


	//selectAll

	selectAll: function(callback) 
	{
		//mySQL Query
		connection.query('SELECT * FROM burgers', function(err, result)
		{
			if (err) throw err;
			callback(result);
		});
	},

	//insert
	insertOne: function(burger_name, callback)
	{
		connection.query('INSERT INTO burgers SET ?', 
			{	burger_name: burger_name,
				devoured: false,
			}, function(err, result)
			{
				if (err) throw err;
				callback(result);
			});
				
	},

	//update
	updateOne: function(burgerID, callback)
	{
		connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}],
			function(err, result)
			{
				if (err) throw err;
				callback(result);
			});
	}
};


// ORM object in module.exports.
module.exports = orm;
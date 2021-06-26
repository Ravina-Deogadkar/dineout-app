var data = require('../data/hotel')

module.exports.getHotels=(cb)=>{
		// if(city!=null)
		console.log(data);
		if(data!=null)
			cb(null,data);
		else
			cb('no data found', data);
}


const model=require('../model/hotelModel')

var hotelController={
	getHotels(req,res){
		let city = req.query['city'];
		let type=req.query['type'];
		try{
			model.getHotels((err,data)=>{
				if(err!=null)
					res.send(err).status(400);
				else{
					let hotels=data.hoteldata.filter(hotel=>hotel.city==city);
					res.send('hotels').status(200);
				}
			})
		}
		catch(error){
			console.log(error);
		}
	}
}

module.exports=hotelController;
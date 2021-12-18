import React, { Component } from 'react';


const DishHOC = (DishComponent, data)=>{
	return class extends Component{

		render() {
			const profileData={
				dishname: data.dishname,
				type: data.type,
				media:data.media,
				image:data.image,
				price:data.price
			};

			return (
				<DishComponent profileData={profileData} />
			);
		}
	}
}

export default DishHOC;


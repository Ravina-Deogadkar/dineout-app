import React,{ Component } from "react";

const HOC=(Profilecomponent,data)=>{
	return class extends Component{

		render(){
			return(
				<Profilecomponent profileData={data}/>
			);
			}
	}
}

export default HOC;
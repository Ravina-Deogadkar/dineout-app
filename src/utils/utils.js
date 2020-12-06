export const generateOrderId=()=>{
	let ordid='OI';
	let v = Math.floor((Math.random()*100000000)+1);
	ordid =ordid+'-'+v;
	return ordid;
}

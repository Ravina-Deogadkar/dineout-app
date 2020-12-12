import Axios from "axios";
const serverURL="http://localhost:8030";

export const fetchDishData = async () => {
    const url =  serverURL+"/dish";

    let data = await Axios.get(url);
    const adsDetails = [];
    console.log(data.data.dishdata);
    if (data.data.dishdata !== undefined) {
        data.data.dishdata.map((value, index) => {
            if (index < 6) {
                adsDetails[index] = value;
                //adsDetails[index].image = serverURL + value.image;
            }
        });
    }
    return adsDetails;
};

export const fetchHotelData = async () => {
    const url =  serverURL+"/hotel";

    let data = await Axios.get(url);
    const adsDetails = [];
    console.log(data.data.dishdata);
    if (data.data.hoteldata !== undefined) {
        data.data.hoteldata.map((value, index) => {
            if (index < 6) {
                adsDetails[index] = value;
                //adsDetails[index].image = serverURL + value.image;
            }
        });
    }
    return adsDetails;
};

export const apiDetails={
    hotels:{
        get: fetchHotelData(),
    },
    dishes:{
        get: fetchDishData()
    }
}
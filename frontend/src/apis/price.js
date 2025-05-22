import axios from "axios";
import { PRICING_API } from "./constant";

export const fetchPrice =async()=>{
    try {
        
        const res=await axios.get(PRICING_API);
        return res.data.price;
    } catch (error) {
        console.log("Error fetching prices",error);
        throw error;
    }
}
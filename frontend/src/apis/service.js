import axios from "axios";
import {SERVICE_API} from "./constant"

export const fetchService = async()=>{
    try {
        const res=await axios.get(SERVICE_API);
        return res.data.service;
    } catch (error) {
        console.log("Error fetching Services",error);
        throw error;
        
    }
}
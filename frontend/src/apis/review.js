import axios from 'axios'
import { REVIEW_API } from './constant'

export const fetchReview=async()=>{
    try {
        const res=await axios.get(REVIEW_API);
        return res.data.review;
    } catch (error) {
        console.log("Error fetching Reviews",error);
        throw error;
    }
}
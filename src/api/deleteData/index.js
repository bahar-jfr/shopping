import axios from "axios"
import { BASE_URL } from "../const"

export const deleteData = async(id)=>{
    const response = await axios.delete(`${BASE_URL}/orders/${id}`)
    return response ;
}
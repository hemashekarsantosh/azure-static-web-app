import axios from "axios";


export async function getMyApprovals() {
    const response = await axios.get('/api/myapprovals');
    return await response;
}
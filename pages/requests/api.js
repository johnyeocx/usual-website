import axios from 'axios';

// export const endpoint = "http://127.0.0.1:5000"
export const endpoint = "http://localhost:8080"

export const getBusinessByIdReq = async (id) =>
    axios.get(`${endpoint}/api/c/business?business_id=${id}`)

// export const registerRequest = async (studentDetails) =>
//     axios.post(`${endpoint}/register`, studentDetails)

// export const voucherClaimRequest = async (details) =>
//     axios.post(`${endpoint}/claim`, details)
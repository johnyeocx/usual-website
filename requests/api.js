import axios from 'axios';

// export const endpoint = "http://127.0.0.1:5000"
export const endpoint = "http://localhost:8080"
// export const endpoint = "https://api.usual.ltd"

export const getBusinessByIdReq = async (id) =>
    axios.get(`${endpoint}/api/c/business?business_id=${id}`)

export const createCFromSubReq = async (createDetails) =>
    axios.post(`${endpoint}/api/c/customer/create_from_subscribe`, createDetails)

export const createSubscriptionReq = async (productIds, accessToken) =>
    axios.post(`${endpoint}/api/c/subscription/create`, productIds, {
        headers: {
            "Authorization": "Bearer " + accessToken
        }
    })

// export const registerRequest = async (studentDetails) =>
//     axios.post(`${endpoint}/register`, studentDetails)

// export const voucherClaimRequest = async (details) =>
//     axios.post(`${endpoint}/claim`, details)
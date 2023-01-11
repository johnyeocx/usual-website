
export const imageEndpoint = "https://usual.s3.eu-west-2.amazonaws.com"

export const getBusinessImage = (id) => {
    return `${imageEndpoint}/business/profile_image/${id}`
}

export const getProductImage = (id) => {
    return `${imageEndpoint}/business/product_image/${id}`
}

export const getPricingString = (plan) => {
    const interval = plan.recurring_duration.interval
    const intervalCount = plan.recurring_duration.interval_count
    const unitAmount = (plan.unit_amount / 100).toFixed(2);
    return `£${unitAmount} / ${intervalCount} ${interval}${intervalCount > 1 ? "s" : ""}`
}
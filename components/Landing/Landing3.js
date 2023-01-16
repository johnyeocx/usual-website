import React from 'react'
import WhySubscriptions from './WhySubscriptions'

function Landing3({
    registerPageRef,
    name,
    setName,
    email,
    setEmail,
    loading,
    handleSubmit,
    success,
    business,
    setBusiness,
    isBusinessView,
}) {

    const customerReasons = [
        { text: "Less money for a better experience", icon: "", },
        { text: "Plan your expenses better", icon: "", },
        { text: "Receive higher quality services", icon: "" }
    ]

    const businessReasons = [
        { text: "Create a loyal customer base", icon: "", },
        { text: "Understand your customers better", icon: "", },
        { text: "Obtain a recurring revenue stream", icon: "" }
    ]
    return (
        <WhySubscriptions
            registerPageRef={registerPageRef}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            loading={loading}
            handleSubmit={handleSubmit}
            success={success}
            business={business}
            setBusiness={setBusiness}
            isBusinessView={isBusinessView}
            reasons={isBusinessView ? businessReasons : customerReasons}
        />
    )
}

export default Landing3
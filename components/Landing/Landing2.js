import React from 'react'
import Better from './WhyBetter'

import ArrowUpRightDots from '../../public/images/icons/arrow-up-right-dots.svg';
import HandBackPointUp from '../../public/images/icons/hand-back-point-up.svg';
import ClipboardList from '../../public/images/icons/clipboard-list.svg';
import styles from '../../styles/Landing/Better.module.scss';

function Landing2({
    isBusinessView,
}) {
    const customerDetails = [
        {
            title: "Easy to subscribe",
            description: 'With just the click of button, you will be able to subscribe to your favourite place',
            icon: () => (
                <HandBackPointUp
                    style={{ height: '30px', marginTop: '2px', transform: 'rotate(-45deg)' }}
                    className={styles.icon}
                />
            )
        },
        {
            title: "Clear options",
            description: "Looking to subscribe to some experience? Just enter it in the search bar!",
            icon: () => (
                <ArrowUpRightDots
                    style={{ height: '25px' }}
                    className={styles.icon} />
            )
        },
        {
            title: "Easy to manage",
            description: "Cancelling subscriptions used to feel impossible. Now you can do it in one step.",
            icon: () => (
                <ClipboardList
                    style={{ height: '30px', marginTop: '2px' }}
                    className={styles.icon} />

            )
        }
    ]

    const businessDetails = [
        {
            title: "Easy to create",
            description: 'In just 3 simple steps, you will be able to list your subscription service, no technical expertise required',
            icon: () => (
                <HandBackPointUp
                    style={{ height: '30px', marginTop: '2px', transform: 'rotate(-45deg)' }}
                    className={styles.icon}
                />
            )
        },
        {
            title: "Easy to manage",
            description: "With our easy management, never lose sleep over checking who has paid you and who has used their subscription",
            icon: () => (
                <ClipboardList
                    style={{ height: '30px', marginTop: '2px' }}
                    className={styles.icon} />
            )
        },
        {
            title: "More customers",
            description: "When customers aren't troubled by where to look and how to cancel their subscriptions, acquisition is that much easier",
            icon: () => (
                <ArrowUpRightDots
                    style={{ height: '25px' }}
                    className={styles.icon} />
            )
        }
    ]

    return (
        <Better
            details={isBusinessView ? businessDetails : customerDetails}
            isBusinessView={isBusinessView}
        />
    )
}

export default Landing2
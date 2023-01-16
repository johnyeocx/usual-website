import React, { useContext, useEffect, useState } from 'react';
import styles from '../../styles/Landing/Better.module.scss';
import { GiClick } from 'react-icons/gi';
import Screen0 from '../../public/images/screen1.png'
import Screen1 from '../../public/images/business_manage.png'
import Screen2 from '../../public/images/customer_screen.png'
import CusScreen1 from '../../public/images/customer_search_iphone.png'
import CusScreen0 from '../../public/images/customer_subscribe_iphone.png'
import Image from 'next/image';

import AppContext from '../../pages/AppContext';
import { breakpoints } from '../../pages';


const Card = ({
    details,
    onClick,
    selected,
    swapping,
    swapV,
    swapH,
    index,
    isBusinessView
}) => {
    return (
        <button
            className={
                `${styles.card} ${index == 2 && styles.card3}
                ${selected ? styles.selected : styles.unselected}
                ${swapV && index == 0 && styles.swapV1}    
                ${swapV && index == 2 && styles.swapV2}

                ${swapH && index == 0 && styles.swapH1}  
                ${swapH && index == 1 && styles.swapH2}
            `}

            onClick={() => onClick()}
        >
            <div className={styles.title}>
                <h3>{details.title}</h3>

                {details.icon()}
            </div>
            {
                <p className={
                    `${selected ? styles.pShow : styles.pHide}
                    ${swapping && index == 0 && styles.pFade}
                    ${isBusinessView && swapV && index == 2 && styles.pFadeIn}
                    ${isBusinessView && swapH && index == 1 && styles.pFadeIn}
                    
                    ${!isBusinessView && swapV && index == 2 && styles.pFadeIn1}
                    ${!isBusinessView && swapH && index == 1 && styles.pFadeIn1}
                    `
                }>
                    {/* ${!isBusinessView && swapping && index != 0 && styles.pFadeIn}
                    ${isBusinessView && swapping && index != 0 && styles.pFadeIn1} */}
                    {details.description}
                </p>
            }

        </button>
    )
}

function Better({ details, isBusinessView }) {
    const [selection, setSelection] = useState([0, 1, 2])



    const [swapV, setSwapV] = useState(false)
    const [swapH, setSwapH] = useState(false)
    const [swapping, setSwapping] = useState(false)

    const [fadeOut, setFadeOut] = useState([false, false, false])
    const [selected, setSelected] = useState(false)

    const value = useContext(AppContext);
    let { dimensions } = value.state;

    const [dimensions1, setDimensions1] = useState({})
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        setDimensions1(dimensions)
        if (dimensions && dimensions.width < breakpoints.mobile) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [dimensions])

    const swapVertical = () => {
        if (swapping) return;
        setSwapping(true)
        setSwapV(true)

        let first = selection[0]
        let second = selection[2]
        let newSelection = [second, selection[1], first]

        const newFadeOut = [...fadeOut]
        newFadeOut[first] = true
        setFadeOut(newFadeOut);

        setTimeout(() => {
            setSelection(newSelection)
            setSelected((prev) => !prev);
            setSwapping(false)
            setSwapV(false)
            setFadeOut([false, false, false])
        }, 400)
    }

    const swapHorizontal = () => {
        if (swapping) return;
        setSwapping(true)
        setSwapH(true)

        let first = selection[0]
        let second = selection[1]
        let newSelection = [second, first, selection[2]]
        const newFadeOut = [...fadeOut]
        newFadeOut[first] = true
        setFadeOut(newFadeOut);
        setTimeout(() => {
            setSelection(newSelection)
            setSwapping(false)
            setSwapH(false)
            setFadeOut([false, false, false])
        }, 400)
    }

    const getScale = () => {
        // let originalWidth = 430;
        return (dimensions.width - 60) / 425;
    }

    const getHeight = () => {
        // let originalWidth = 430;
        return ((dimensions.width - 60) / 430) * 400;
    }


    const renderCards = () => {
        return (
            <>
                <Card
                    swapping={swapping}
                    selected={true}
                    details={details[selection[0]]}
                    onClick={() => { }}
                    index={0}
                    swapV={swapV}
                    swapH={swapH}
                    isBusinessView={isBusinessView}
                />
                <div style={{ width: '440px', position: 'relative' }}>
                    <Card
                        selected={false}
                        details={details[selection[1]]}
                        onClick={() => swapHorizontal()}
                        index={1}
                        swapH={swapH}
                        isBusinessView={isBusinessView}
                    />
                    <Card
                        selected={false}
                        details={details[selection[2]]}
                        onClick={() => swapVertical()}
                        index={2}
                        swapV={swapV}
                        isBusinessView={isBusinessView}
                    />
                </div>
            </>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h2>How is it better?</h2>
                <div style={{
                    display: 'flex',
                    padding: isMobile && '0px 30px',
                    height: isMobile && `${getHeight()}px`,
                    width: isMobile && '100vw',
                }}>
                    <div
                        className={styles.cardsContainer}
                        style={{
                            transformOrigin: 'top left',
                            transform: isMobile && `scale(${getScale()})`,
                        }}>
                        {renderCards()}
                    </div>
                </div>

            </div>
            <div className={styles.right}>
                <div className={styles.screenContainer}>

                    {
                        selection[0] == 0 ? (
                            <Image src={isBusinessView ? Screen0 : CusScreen0}
                                style={{
                                    height: '100%', width: '100%', objectFit: 'contain'
                                }}
                                className={`${styles.fadeIn} ${fadeOut[0] && styles.fadeOut}`}
                                alt=""
                            />
                        ) : selection[0] == 1 ? (
                            <Image src={isBusinessView ? Screen1 : CusScreen1}
                                style={{
                                    height: '100%', width: '100%', objectFit: 'contain'
                                }}
                                className={`${styles.fadeIn1} ${fadeOut[1] && styles.fadeOut1}`}
                                alt=""
                            />
                        ) : selection[0] == 2 && (
                            <Image src={isBusinessView ? Screen2 : Screen2}
                                style={{
                                    height: '100%', width: '100%', objectFit: 'contain'
                                }}
                                className={`${styles.fadeIn2} ${fadeOut[2] && styles.fadeOut2}`}
                                alt=""
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Better
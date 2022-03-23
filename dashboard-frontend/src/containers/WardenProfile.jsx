import React from 'react';

import styles from '../styles/WardenProfile.module.css'

import { Box } from '@mui/material'
import WardenHugeImage from '../images/warden-huge-image.png';

import ProofOfIdentity1 from '../images/proof-of-identity-1.png'
import ProofOfIdentity2 from '../images/proof-of-identity-2.png'

const images = [
    {
        title: 'Front Photo',
        source: ProofOfIdentity1,
    },
    {
        title: 'Back Photo',
        source: ProofOfIdentity2,
    },
]

const ImagePresenter = ({ title, source }) => {
    return (<>
        <p className={styles.imageCaption}>{title}</p>
        <img src={source} className={styles.proofImage} alt={title} />
    </>)
}

const WardenProfile = () => {
    return (<Box className={styles.wardenProfile}>
        <h1 className={styles.heading}>Warden Profile</h1>
        <img src={WardenHugeImage} alt="warden" className={styles.wardenImage} />
        <h1 className={styles.wardenName}>Abdul Bari</h1>
        <h2 className={styles.boldText}>Email</h2>
        <p className={styles.text}>abdulbari122@gmail.com</p>
        <h2 className={styles.boldText}>Phone no.</h2>
        <p className={styles.text}>+12 345 6789012</p>
        <h1 className={styles.proofHeading}>Proof Of Identity</h1>
        {images.map(image => (
            <ImagePresenter title={image.title} source={image.source} />
        ))}
    </Box>)
}

export default WardenProfile
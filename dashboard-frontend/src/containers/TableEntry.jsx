import React from 'react';

import styles from '../styles/WardenApprovals.module.css';
import WardenImage from '../images/warden-image.png'

const TableEntry = () => {
    return (<div className={styles.tableEntry}>
        <div className={styles.nameAndImage}>
            <img src={WardenImage} alt="warden" />
            <h4 className={styles.text}>Abdul Bari</h4>
        </div>
    </div>)
}

export default TableEntry
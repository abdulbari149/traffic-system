import React from 'react';

import styles from '../styles/Sidebar.module.css';


const SidebarButton = ({ title, icon, nav, setNav }) => {
    return (<div onClick={() => nav === 0 && title !== 'Approval' ? setNav(1) : nav === 1 && title !== 'Violation' ? setNav(0) : null} className={styles.button} style={{ backgroundColor: nav === 0 && title === 'Approval' ? 'black' : nav === 1 && title === 'Violation' ? 'black' : null }}>
        <div className={styles.buttonIconBack}>
            {icon}
        </div>
        <p className={styles.buttonTitle}>
            {title}
        </p>
    </div>)
}

export default SidebarButton
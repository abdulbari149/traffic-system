import React from 'react';

import styles from '../styles/Sidebar.module.css';


const SidebarButton = ({ title, icon, nav, setNav, mobile, isMenuOpened }) => {


    return (<div onClick={() => {
        setNav()
        if (mobile) return isMenuOpened(false)
    }} className={mobile ? styles.mobileButton : styles.button} style={{
        backgroundColor: !nav && title === 'Approval' ?
            'black' :
            nav === 1 && title === 'Violation' ?
                'black' :
                nav === 2 && title === 'Decline' ?
                    'black' :
                    nav === 3 && title === 'Register' ?
                        'black' : null
    }}>
        <div className={styles.buttonIconBack}>
            {icon}
        </div>
        <p className={mobile ? styles.mobileButtonTitle : styles.buttonTitle}>
            {title}
        </p>
    </div>)
}

export default SidebarButton
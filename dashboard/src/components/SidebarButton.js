import React from "react";
import styles from "../styles/Sidebar.module.css";
const SidebarButton = ({ title, icon, active }) => {
  return (
    <div
      className={styles.sideBarButton}
      style={active ? { backgroundColor: "black" } : {}}
    >
      <div className={styles.buttonIconBack}>{icon}</div>
      <p className={styles.sideBarButtonTitle}>{title}</p>
    </div>
  );
};

export default SidebarButton;

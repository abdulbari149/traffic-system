import { Box, Typography } from "@mui/material";
import React from "react";

import AdminImage from "../images/admin-image.png";
import styles from "../styles/Sidebar.module.css";
import SidebarButton from "./SidebarButton";

import PersonIcon from "@mui/icons-material/Person";
import LinkOffIcon from "@mui/icons-material/LinkOff";
import ArchiveSharpIcon from "@mui/icons-material/ArchiveSharp";
import CreateSharpIcon from "@mui/icons-material/CreateSharp";

const Sidebar = ({ nav, setNav, mobile, isMenuOpened }) => {
	const buttons = [
		{
			title: "Approval",
			icon: <PersonIcon color="white" className={styles.buttonIcon} />,
		},
		{
			title: "Violation",
			icon: <LinkOffIcon color="white" className={styles.buttonIcon} />,
		},
		{
			title: "Decline",
			icon: <ArchiveSharpIcon className={styles.buttonIcon} />,
		},
		{
			title: "Register",
			icon: <CreateSharpIcon className={styles.buttonIcon} />,
		},
	];

	return (
		<Box className={styles.sidebar}>
			{!mobile && (
				<>
					<img src={AdminImage} className={styles.image} alt="admin" />
					<Typography className={styles.heading}>Admin</Typography>
				</>
			)}
			{buttons.map((button, idx) => (
				<SidebarButton
					key={idx}
					mobile={mobile}
					title={button.title}
					icon={button.icon}
					isMenuOpened={isMenuOpened}
					nav={nav}
					setNav={() => setNav(idx)}
				/>
			))}
		</Box>
	);
};

export default Sidebar;

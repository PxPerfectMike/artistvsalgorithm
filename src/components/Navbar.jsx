import React from 'react';
import { Box } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Link, useLocation } from 'react-router-dom';
import CameraIcon from '@mui/icons-material/Camera';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import PublicIcon from '@mui/icons-material/Public';
import BookIcon from '@mui/icons-material/Book';
import VideocamIcon from '@mui/icons-material/Videocam';

const navItems = [
	{ label: 'Photo', icon: <CameraIcon />, link: '/photog' },
	{ label: 'Video', icon: <VideocamIcon />, link: '/videog' },
	{ label: 'Home', icon: <PublicIcon />, link: '/' },
	{ label: 'Blog', icon: <BookIcon />, link: '/blog' },
	{ label: 'Vlog', icon: <PhotoCameraFrontIcon />, link: '/vlog' },
];

export default function Navbar() {
	const { pathname } = useLocation();
	const initialValue = navItems.findIndex((item) => item.link === pathname);
	const [value, setValue] = React.useState(
		initialValue !== -1 ? initialValue : 2
	);

	React.useEffect(() => {
		const newIndex = navItems.findIndex((item) => item.link === pathname);
		setValue(newIndex !== -1 ? newIndex : 2);
	}, [pathname]);

	return (
		<Box sx={{ width: '100%' }}>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				sx={{
					position: 'fixed',
					bottom: 0,
					width: '100%',
					backgroundColor: '#070606',
					borderTop: '3px solid #f5f5f5',
				}}
			>
				{navItems.map((item, index) => (
					<BottomNavigationAction
						key={index}
						sx={{
							color: value === index ? '#f5f5f5' : '#979797',
							minWidth: 0,
						}}
						label={item.label}
						icon={item.icon}
						component={Link}
						to={item.link}
					/>
				))}
			</BottomNavigation>
		</Box>
	);
}

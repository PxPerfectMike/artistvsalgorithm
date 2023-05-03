import * as React from 'react';
import { Box, Paper } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CameraIcon from '@mui/icons-material/Camera';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import PublicIcon from '@mui/icons-material/Public';
import BookIcon from '@mui/icons-material/Book';
import VideocamIcon from '@mui/icons-material/Videocam';
import { useTheme } from '@mui/material/styles';

const styles = {
	navbar: {
		position: 'fixed',
		bottom: 0,
		width: '100%',
		backgroundColor: '#070606',
		boxShadow: '0px -2px 20px 1px #ffffff',
	},
};

export default function Navbar() {
	const [value, setValue] = React.useState(2);

	return (
		<Box
			sx={{
				width: '100%',
			}}
		>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				style={styles.navbar}
			>
				<BottomNavigationAction label='Photo' icon={<CameraIcon />} />
				<BottomNavigationAction label='Video' icon={<VideocamIcon />} />
				<BottomNavigationAction active label='Home' icon={<PublicIcon />} />
				<BottomNavigationAction label='Blog' icon={<BookIcon />} />
				<BottomNavigationAction label='Vlog' icon={<PhotoCameraFrontIcon />} />
			</BottomNavigation>
		</Box>
	);
}

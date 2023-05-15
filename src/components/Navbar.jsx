import React from 'react';
import { Box } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Link } from 'react-router-dom';
import CameraIcon from '@mui/icons-material/Camera';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import PublicIcon from '@mui/icons-material/Public';
import BookIcon from '@mui/icons-material/Book';
import VideocamIcon from '@mui/icons-material/Videocam';

const styles = {
	navbar: {
		position: 'fixed',
		bottom: 0,
		width: '100%',
		backgroundColor: '#070606',
		borderTop: '3px solid #f5f5f5',
	},
};

export default function Navbar() {
	const [value, setValue] = React.useState(2);

	return (
		<Box sx={{ width: '100%' }}>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				style={styles.navbar}
			>
				<BottomNavigationAction
					sx={{ color: value === 0 ? '#f5f5f5' : '#979797' }}
					label='Photo'
					icon={<CameraIcon />}
					component={Link}
					to='/photog'
				/>
				<BottomNavigationAction
					sx={{ color: value === 1 ? '#f5f5f5' : '#979797' }}
					label='Video'
					icon={<VideocamIcon />}
					component={Link}
					to='/videog'
				/>
				<BottomNavigationAction
					sx={{ color: value === 2 ? '#f5f5f5' : '#979797' }}
					label='Home'
					icon={<PublicIcon />}
					component={Link}
					to='/'
				/>
				<BottomNavigationAction
					sx={{ color: value === 3 ? '#f5f5f5' : '#979797' }}
					label='Blog'
					icon={<BookIcon />}
					component={Link}
					to='/blog'
				/>
				<BottomNavigationAction
					sx={{ color: value === 4 ? '#f5f5f5' : '#979797' }}
					label='Vlog'
					icon={<PhotoCameraFrontIcon />}
					component={Link}
					to='/vlog'
				/>
			</BottomNavigation>
		</Box>
	);
}

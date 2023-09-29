import React from 'react';
import { Container, Box } from '@mui/material';
import TitleTop from '../components/TitleTop';
import PhotoGallery from '../components/PhotoGallery';

function Photog() {
	return (
		<Container
			sx={{
				width: { xs: '100%', md: '90%' }, // Adapt width for medium devices and above
				margin: '0 auto', // Center the container
				height: '100%',
				backgroundColor: '#070606',
				position: 'relative',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<TitleTop />
			<Box sx={{ flexGrow: 1, marginTop: '8rem', marginBottom: '3rem' }}>
				<PhotoGallery />
			</Box>
		</Container>
	);
}

export default Photog;

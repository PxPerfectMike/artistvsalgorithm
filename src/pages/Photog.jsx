import React from 'react';
import { Container, Box } from '@mui/material';
import TitleTop from '../components/TitleTop';
import PhotoGallery from '../components/PhotoGallery';

function Photog() {
	return (
		<Container
			sx={{
				width: '100%',
				height: '100%',
				backgroundColor: '#070606',
				position: 'relative',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
			}}
		>
			<TitleTop />
			<Box sx={{ flexGrow: 1, marginTop: '6.3rem', marginBottom: '3rem' }}>
				<PhotoGallery />
			</Box>
		</Container>
	);
}

export default Photog;

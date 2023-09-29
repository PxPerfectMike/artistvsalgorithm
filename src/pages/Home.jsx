import React from 'react';
import { Container, Box } from '@mui/material';
import HomeCard from '../components/HomeCard';
import TitleTop from '../components/TitleTop';

export default function Home() {
	return (
		<Container
			sx={{
				width: '100%',
				height: '100%',
				backgroundColor: '#070606',
				position: 'relative',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<TitleTop />

			<Box sx={{ flexGrow: 1, marginTop: '8rem', marginBottom: '4rem' }}>
				<HomeCard />
			</Box>
		</Container>
	);
}

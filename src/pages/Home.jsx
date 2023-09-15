import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import HomeCard from '../components/HomeCard';
import TitleTop from '../components/TitleTop';

function Home() {
	const theme = useTheme();

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

export default Home;

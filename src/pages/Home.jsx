import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import HomeCard from '../components/HomeCard';

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
				alignItems: 'flex-start',
			}}
		>
			<Box
				sx={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100%',
					zIndex: 999,
					backgroundColor: '#070606',
					padding: '1rem',
					height: 'fit-content',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-around',
				}}
			>
				<Typography
					variant='h4'
					sx={{
						color: theme.palette.primary.main,
						fontFamily: "'Julius Sans One', sans-serif",
					}}
				>
					Artist VS
					<br /> Algorithm
				</Typography>
				<Instagram sx={{ marginLeft: '1rem', color: '#ffffff' }} />
				<Twitter sx={{ marginLeft: '1rem', color: '#ffffff' }} />
				<Facebook sx={{ marginLeft: '1rem', color: '#ffffff' }} />
			</Box>

			<Box sx={{ flexGrow: 1, marginTop: '6.3rem', marginBottom: '3rem' }}>
				<HomeCard />
			</Box>
		</Container>
	);
}

export default Home;

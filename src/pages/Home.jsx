import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
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
				alignItems: 'center',
			}}
		>
			<Box
				sx={{
					position: 'fixed',
					width: '100%',
					zIndex: 999,
					backgroundColor: '#070606',
					padding: '1rem',
					height: 'fit-content', // Set a height to ensure it remains fixed
				}}
			>
				<Typography
					variant='h4'
					sx={{
						color: theme.palette.primary.main,
						fontFamily: "'Julius Sans One', sans-serif",
					}}
				>
					Artist VS Algorithm
				</Typography>
			</Box>
			<Box sx={{ height: 'auto' }}>
				<HomeCard />
			</Box>
		</Container>
	);
}

export default Home;

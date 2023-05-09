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
				paddingTop: '5%',
				backgroundColor: '#070606',
			}}
		>
			<Box>
				<Typography
					variant='h4'
					sx={{
						color: theme.palette.primary.main,
						fontFamily: "'Julius Sans One', sans-serif",
					}}
				>
					Artist VS Algorithm
				</Typography>
				<HomeCard />
			</Box>
		</Container>
	);
}

export default Home;

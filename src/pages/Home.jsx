import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Home() {
	const theme = useTheme();
	return (
		<Container sx={{ width: '100%', height: '100%', paddingTop: '5%' }}>
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
			</Box>
		</Container>
	);
}

export default Home;

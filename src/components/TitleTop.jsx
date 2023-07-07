import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

function TitleTop() {
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
					top: 0,
					left: 0,
					width: '100%',
					zIndex: 999,
					backgroundColor: '#070606',
					padding: '1rem',
					height: 'fit-content',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'space-around',
				}}
			>
				<Typography
					variant='h4'
					sx={{
						color: theme.palette.primary.main,
						fontFamily: "'Julius Sans One', sans-serif",
						textAlign: 'center',
						marginTop: '0.2rem',
						whiteSpace: 'nowrap',
					}}
				>
					Artist VS Algorithm
				</Typography>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: '1rem',
					}}
				>
					<Instagram sx={{ marginLeft: '1rem', color: '#ffffff' }} />
					<Twitter sx={{ marginLeft: '1rem', color: '#ffffff' }} />
					<Facebook sx={{ marginLeft: '1rem', color: '#ffffff' }} />
				</Box>
			</Box>
		</Container>
	);
}

export default TitleTop;

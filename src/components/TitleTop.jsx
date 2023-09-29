import React, { useEffect } from 'react';
import { Container, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

function TitleTop() {
	const theme = useTheme();

	useEffect(() => {
		scaleTitleWithScreenWidth();
	}, []);
	function scaleTitleWithScreenWidth() {
		const title = document.querySelector('h4');
		const screenWidth = window.innerWidth;
		if (screenWidth < 281) {
			title.style.fontSize = '1.2rem';
		} else if (screenWidth < 800) {
			title.style.fontSize = '2rem';
		} else if (screenWidth < 1280) {
			title.style.fontSize = '3rem';
		}
	}

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
						fontSize: '2.5rem',
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
					<a
						href='https://www.instagram.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Instagram
							sx={{ marginLeft: '1rem', color: '#ffffff' }}
						/>
					</a>
					<a
						href='https://twitter.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Twitter
							sx={{ marginLeft: '1rem', color: '#ffffff' }}
						/>
					</a>
					<a
						href='https://www.facebook.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Facebook
							sx={{ marginLeft: '1rem', color: '#ffffff' }}
						/>
					</a>
				</Box>
			</Box>
		</Container>
	);
}

export default TitleTop;

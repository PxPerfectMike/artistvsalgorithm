import React from 'react';
import { Container, Box } from '@mui/material';
import TitleTop from '../components/TitleTop';
import VlogPost from '../components/VlogPost';
import { useTheme } from '@mui/material/styles';

function Vlog() {
	const theme = useTheme();
	return (
		<Container
			sx={{
				maxWidth: '1280px',
				margin: '1rem auto',
				width: '100%',
				// height: '100%',
				backgroundColor: '#070606',
				position: 'relative',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				paddingLeft: theme.spacing(2),
				paddingRight: theme.spacing(2),
			}}
		>
			<TitleTop />
			<Box
				sx={{
					flexGrow: 1,
					width: '100%',
					marginTop: '6.3rem',
					marginBottom: '3rem',
					justifyContent: 'center',
				}}
			>
				<VlogPost />
			</Box>
		</Container>
	);
}

export default Vlog;

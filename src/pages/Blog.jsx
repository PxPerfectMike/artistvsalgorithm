import React from 'react';
import { Container, Box } from '@mui/material';
import BlogPost from '../components/BlogPost';
import TitleTop from '../components/TitleTop';

export default function Blog() {
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
				<BlogPost />
			</Box>
		</Container>
	);
}

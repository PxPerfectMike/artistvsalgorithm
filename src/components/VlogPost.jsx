import React, { useState, useEffect } from 'react';
import {
	Box,
	Dialog,
	Typography,
	Button,
	DialogContent,
	DialogTitle,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Zoom from '@mui/material/Zoom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createClient } from 'contentful';

const client = createClient({
	space: '9yyxpwjpu8ht',
	accessToken: 'r2_gghUds_gCqXDe6eSc7_o9vhKQ8iplFRsWNZU_UU4', // Replace with your actual access token
});

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Zoom ref={ref} {...props} />;
});

export default function VlogPost() {
	const theme = useTheme();
	const [itemData, setItemData] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

	useEffect(() => {
		client
			.getEntries({
				content_type: 'vlogPost',
				include: 5,
			})
			.then((response) => {
				const initialItemData = response.items.map((entry) => {
					const videoUrl =
						'https:' + entry.fields.media.fields.file.url;
					return {
						video: videoUrl,
						title: entry.fields.title,
						order: entry.fields.order,
					};
				});
				initialItemData.sort((a, b) => a.order - b.order);
				setItemData(initialItemData);
			})
			.catch((error) => {
				console.error('Error fetching data from Contentful: ', error);
			});
	}, []);

	const handleVideoClick = (video) => {
		setSelectedVideo(video);
	};

	const handleClose = () => {
		setSelectedVideo(null);
	};

	return (
		<>
			<ImageList
				sx={{
					width: '100%',
					height: 'auto',
					overflow: 'hidden',
					backgroundColor: '#070606',
				}}
				variant='quilted'
				cols={isDesktop ? 12 : 4}
				rowHeight={100}
			>
				{itemData.map((item) => (
					<ImageListItem
						key={item.title}
						cols={item.cols || 4}
						rows={item.rows || 2}
						sx={{
							border: `3px solid ${theme.palette.primary.main}`,
							position: 'relative',
							margin: theme.spacing(1),
							overflow: 'hidden',
						}}
						onClick={() => handleVideoClick(item.video)}
					>
						<video
							src={item.video}
							title={item.title}
							style={{
								width: '100%',
								height: '100%', // Add this line to set height to 100%
								objectFit: 'cover', // Add this line to set objectFit to cover
								cursor: 'pointer',
							}}
							loop
							muted
							playsInline
						/>
						<Box
							sx={{
								position: 'absolute',
								bottom: 10,
								left: 10,
								width: 'auto',
								backgroundColor: 'rgb(255, 255, 255)',
								color: 'black',
								padding: '0.4rem',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<Typography
								variant='subtitle1'
								sx={{ width: '100%', textAlign: 'center' }}
							>
								{item.title}
							</Typography>
						</Box>
					</ImageListItem>
				))}
			</ImageList>
			{selectedVideo && (
				<Dialog
					open={Boolean(selectedVideo)}
					onClose={handleClose}
					maxWidth='lg'
					TransitionComponent={Transition}
				>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							border: `3px solid ${theme.palette.primary.main}`,
						}}
					>
						<video
							src={selectedVideo}
							style={{
								minHeight: '180px',
								maxWidth: '100%',
								maxHeight: '80vh',
								objectFit: 'cover',
								cursor: 'pointer',
								borderRadius: 'none',
							}}
							controls
							autoPlay
							onClick={handleClose}
						/>
					</Box>
				</Dialog>
			)}
		</>
	);
}

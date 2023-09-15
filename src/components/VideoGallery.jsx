import React, { useState } from 'react';
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

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Zoom ref={ref} {...props} />;
});

export default function VideoGallery() {
	const theme = useTheme();
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [description, setDescription] = useState(null);
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

	const handleVideoClick = (video) => {
		setSelectedVideo(video);
	};

	const handleClose = () => {
		setSelectedVideo(null);
		setDescription(null);
	};

	const handleDescriptionOpen = (description) => {
		setDescription(description);
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
				cols={isDesktop ? 12 : 4} // For desktop use 6 columns, for mobile keep it at 4
				rowHeight={121}
			>
				{itemData.map((item) => (
					<ImageListItem
						key={item.video}
						cols={item.cols || 1}
						rows={item.rows || 1}
						sx={{
							border: `3px solid ${theme.palette.primary.main}`,
							position: 'relative',
							margin: theme.spacing(1), // Add some margin
						}}
						onClick={() => handleVideoClick(item.video)}
					>
						<video
							src={item.video}
							title={item.title}
							style={{
								width: '100%',
								height: '100%',
								cursor: 'pointer',
							}}
							loop
							muted
							playsInline
						/>
						<Box
							sx={{
								position: 'absolute',
								bottom: 0,
								width: '100%',
								backgroundColor: 'rgb(255, 255, 255)',
								color: 'black',
								padding: '5px',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<Typography variant='subtitle1'>
								{item.title}
							</Typography>
							<Button
								variant='outlined'
								size='small'
								color='text'
								onClick={(event) => {
									event.stopPropagation();
									handleDescriptionOpen(item.description);
								}}
							>
								Details
							</Button>
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
							onClick={handleClose}
						/>
					</Box>
				</Dialog>
			)}
			<Dialog
				open={Boolean(description)}
				onClose={() => setDescription(null)}
			>
				<DialogTitle>Description</DialogTitle>
				<DialogContent>
					<Typography>{description}</Typography>
				</DialogContent>
			</Dialog>
		</>
	);
}

const itemData = [
	{
		video: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
		title: 'Big Buck Bunny',
		description: 'This is a description for Big Buck Bunny.',
		rows: 2,
		cols: 4,
	},
	{
		video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
		title: 'Sintel',
		description: 'This is a description for Sintel.',
		rows: 2,
		cols: 4,
	},
	{
		video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
		title: 'Elephant Dream',
		description: 'This is a description for Elephant Dream.',
		rows: 2,
		cols: 4,
	},
];

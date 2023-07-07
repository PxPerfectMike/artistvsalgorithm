import React, { useState } from 'react';
import { Box, Dialog, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Zoom from '@mui/material/Zoom';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Zoom ref={ref} {...props} />;
});

export default function VideoGallery() {
	const theme = useTheme();
	const [selectedVideo, setSelectedVideo] = useState(null);

	const handleVideoClick = (video) => {
		setSelectedVideo(video);
	};

	const handleClose = () => {
		setSelectedVideo(null);
	};

	return (
		<>
			<ImageList
				sx={{ width: 'auto', height: 'auto', overflow: 'hidden' }}
				variant='quilted'
				cols={4}
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
								backgroundColor: 'rgba(255, 255, 255, 0.7)',
								color: 'black',
								padding: '5px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Typography variant='subtitle1'>
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
								maxWidth: '100%',
								maxHeight: '100%',
								objectFit: 'contain',
								cursor: 'pointer',
								borderRadius: 'none',
							}}
							controls
							onClick={handleClose}
						/>
					</Box>
				</Dialog>
			)}
		</>
	);
}

const itemData = [
	{
		video: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
		title: 'Big Buck Bunny',
		rows: 2,
		cols: 4,
	},
	{
		video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
		title: 'Sintel',
		rows: 2,
		cols: 4,
	},
	{
		video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
		title: 'Elephant Dream',
		rows: 2,
		cols: 4,
	},
];

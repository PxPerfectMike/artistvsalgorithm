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
	accessToken: 'r2_gghUds_gCqXDe6eSc7_o9vhKQ8iplFRsWNZU_UU4',
});

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Zoom ref={ref} {...props} />;
});

export default function VideoGallery() {
	const theme = useTheme();
	const [itemData, setItemData] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [description, setDescription] = useState(null);
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

	useEffect(() => {
		client
			.getEntries({
				content_type: 'videoPost',
				include: 5,
			})
			.then((response) => {
				const initialItemData = response.items.map((entry) => {
					const videoUrl =
						'https:' + entry.fields.videoContent.fields.file.url;
					return {
						video: videoUrl,
						title: entry.fields.title,
						description:
							entry.fields.description.content[0].content[0]
								.value,
						order: entry.fields.order,
					};
				});

				initialItemData.sort((a, b) => a.order - b.order);
				setItemData(initialItemData);
			})
			.catch(console.error);
	}, []);

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
						key={item.title}
						cols={item.cols || 4}
						rows={item.rows || 2}
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
								padding: '0.55rem',
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

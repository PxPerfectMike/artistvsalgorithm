import React, { useState } from 'react';
import { Box, Dialog, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Zoom from '@mui/material/Zoom';

function srcset(image, size, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${
			size * rows
		}&fit=crop&auto=format&dpr=2 2x`,
	};
}

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Zoom ref={ref} {...props} />;
});

export default function HomeCard() {
	const theme = useTheme();
	const [selectedImage, setSelectedImage] = useState(null);

	const handleImageClick = (image) => {
		setSelectedImage(image);
	};

	const handleClose = () => {
		setSelectedImage(null);
	};

	return (
		<>
			<ImageList
				sx={{ width: 'auto', height: 'auto' }}
				variant='quilted'
				cols={4}
				rowHeight={121}
			>
				{itemData.map((item, index) => (
					<ImageListItem
						key={item.img || index}
						cols={item.cols || 1}
						rows={item.rows || 1}
						sx={{
							border: `3px solid ${theme.palette.primary.main}`,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
						onClick={() => item.img && handleImageClick(item.img)}
					>
						{item.type === 'text' ? (
							<Typography
								variant='h5'
								color='primary'
								sx={{ padding: '1rem' }}
							>
								{item.text.substring(0, 200)}
							</Typography>
						) : (
							<img
								{...srcset(item.img, 121, item.rows, item.cols)}
								alt={item.title}
								loading='eager'
								style={{
									width: '100%',
									height: '100%',
									cursor: 'pointer',
								}}
							/>
						)}
					</ImageListItem>
				))}
			</ImageList>
			{selectedImage && (
				<Dialog
					open={Boolean(selectedImage)}
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
						<img
							{...srcset(selectedImage, 600)}
							alt={selectedImage}
							style={{
								maxWidth: '100%',
								maxHeight: '100%',
								objectFit: 'contain',
								cursor: 'pointer',
								borderRadius: 'none',
							}}
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
		type: 'text',
		text: 'This is where the home page text goes.',
		title: 'Home page description',
		rows: 2,
		cols: 4,
	},
	{
		img: 'https://images.unsplash.com/photo-1654541696896-bd5d8feed3fb',
		title: 'lighthouse',
		rows: 2,
		cols: 4,
	},
	{
		img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		title: 'Breakfast',
		rows: 2,
		cols: 2,
	},
	{
		img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
		title: 'Burger',
	},
	{
		img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
		title: 'Camera',
	},
	{
		img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
		title: 'Coffee',
		cols: 2,
	},
	{
		img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
		title: 'Hats',
		cols: 2,
	},
	{
		img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
		title: 'Honey',
		author: '@arwinneil',
		rows: 2,
		cols: 2,
	},
	{
		img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
		title: 'Basketball',
	},
	{
		img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
		title: 'Fern',
	},
	{
		img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
		title: 'Mushrooms',
		rows: 2,
		cols: 2,
	},
	{
		img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
		title: 'Tomato basil',
	},
	{
		img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
		title: 'Sea star',
	},
	{
		img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
		title: 'Bike',
		cols: 2,
	},
];

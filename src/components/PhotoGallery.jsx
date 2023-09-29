import React, { useState, useEffect } from 'react';
import { Box, Dialog, useTheme } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Zoom from '@mui/material/Zoom';
import { createClient } from 'contentful';

const client = createClient({
	space: '9yyxpwjpu8ht',
	environment: 'master',
	accessToken: 'r2_gghUds_gCqXDe6eSc7_o9vhKQ8iplFRsWNZU_UU4',
});

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Zoom ref={ref} {...props} />;
});

export default function PhotoGallery() {
	const theme = useTheme();
	const [selectedImage, setSelectedImage] = useState(null);
	const [photoItemData, setPhotoItemData] = useState([]);

	useEffect(() => {
		client
			.getEntries({
				content_type: 'photoPagePost',
				include: 5,
			})
			.then((response) => {
				let initialPhotoItemData = response.items.map((entry) => {
					const imageUrl =
						'https:' + entry.fields.media.fields.file.url;
					return {
						img: imageUrl,
						title: entry.fields.title,
						rows: entry.fields.rows,
						cols: entry.fields.columns,
						order: entry.fields.order,
					};
				});

				// Sort by the 'order' field
				initialPhotoItemData.sort((a, b) => a.order - b.order);

				setPhotoItemData(initialPhotoItemData);
			})
			.catch(console.error);
	}, []);

	const handleImageClick = (image) => {
		setSelectedImage(image);
	};

	const handleClose = () => {
		setSelectedImage(null);
	};

	return (
		<>
			<ImageList
				sx={{
					width: 'auto',
					height: 'auto',
					'@media (min-width: 600px)': {
						cols: 5,
						rowHeight: 160,
					},
					'@media (min-width: 900px)': {
						cols: 6,
					},
				}}
				variant='quilted'
				cols={4}
				rowHeight={121}
			>
				{photoItemData.map((item, index) => (
					<ImageListItem
						key={item.img + Math.random(999) || index}
						cols={item.cols || 1}
						rows={item.rows || 1}
						sx={{
							border: `3px solid ${theme.palette.primary.main}`,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
						onClick={() => handleImageClick(item.img)}
					>
						<img
							src={item.img}
							alt={item.title}
							loading='eager'
							style={{
								width: '100%',
								height: '100%',
								cursor: 'pointer',
							}}
						/>
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
							padding: 0.6,
							border: `1px solid ${theme.palette.primary.main}`,
						}}
					>
						<img
							src={selectedImage}
							alt={selectedImage}
							style={{
								maxWidth: '100%',
								maxHeight: '100%',
								objectFit: 'contain',
								cursor: 'pointer',
							}}
							onClick={handleClose}
						/>
					</Box>
				</Dialog>
			)}
		</>
	);
}

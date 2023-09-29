import React, { useState, useEffect } from 'react';
import { Box, Dialog, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Zoom from '@mui/material/Zoom';
import { createClient } from 'contentful';

const client = createClient({
	space: '9yyxpwjpu8ht',
	environment: 'master',
	accessToken: 'r2_gghUds_gCqXDe6eSc7_o9vhKQ8iplFRsWNZU_UU4',
});

function srcset(image) {
	return {
		src: image,
		alt: image,
	};
}

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Zoom ref={ref} {...props} />;
});

export default function HomeCard() {
	const theme = useTheme();
	const [selectedImage, setSelectedImage] = useState(null);
	const [itemData, setItemData] = useState([]);

	useEffect(() => {
		client
			.getEntries({
				content_type: 'blogPost',
				include: 5,
			})
			.then((response) => {
				let initialItemData = response.items.map((entry) => {
					if (entry.fields.type === 'image') {
						const imageUrl =
							'https:' + entry.fields.media.fields.file.url;
						return {
							type: 'image',
							img: imageUrl,
							title: entry.fields.title,
							rows: entry.fields.rows,
							cols: entry.fields.columns,
							order: entry.fields.order,
						};
					} else {
						return {
							type: 'text',
							text: entry.fields.homePost,
							title: entry.fields.title,
							rows: entry.fields.rows,
							cols: entry.fields.columns,
							order: entry.fields.order,
						};
					}
				});

				// Sort by the 'order' field
				initialItemData.sort((a, b) => a.order - b.order);

				setItemData(initialItemData);
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
								variant='h6'
								color='primary'
								sx={{
									padding: '1rem',
									width: '100vw',
									textAlign: 'center',
								}}
							>
								{item.text}
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
							padding: 0.6,
							border: `1px solid ${theme.palette.primary.main}`,
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
							}}
							onClick={handleClose}
						/>
					</Box>
				</Dialog>
			)}
		</>
	);
}

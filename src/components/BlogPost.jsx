import React, { useState, useEffect } from 'react';
import { Box, Dialog, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Zoom from '@mui/material/Zoom';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
	space: '9yyxpwjpu8ht',
	environment: 'master',
	accessToken: 'r2_gghUds_gCqXDe6eSc7_o9vhKQ8iplFRsWNZU_UU4',
});

export default function BlogPost() {
	const theme = useTheme();
	const [selectedImage, setSelectedImage] = useState(null);
	const [itemData, setItemData] = useState([]);

	useEffect(() => {
		client
			.getEntries({
				content_type: 'blogPagePost',
				include: 5,
			})
			.then((response) => {
				const initialItemData = response.items.map((entry) => {
					return {
						type: 'text',
						text: entry.fields.blogPost,
						order: entry.fields.order,
					};
				});

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
						key={index}
						cols={item.cols || 4}
						rows={Math.floor(item.text.length) / 100}
						sx={{
							border: `3px solid ${theme.palette.primary.main}`,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Typography
							variant='h6'
							color='primary'
							sx={{
								padding: '1rem',
								width: '100vw',
								textAlign: 'center',
							}}
						>
							{documentToReactComponents(item.text)}
						</Typography>
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
							{...srcset(selectedImage)}
							alt={selectedImage}
							sx={{
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

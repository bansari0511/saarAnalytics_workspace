import { useState } from 'react';
import {
	Box,
	Tabs,
	Tab,
	Paper,
	Typography,
	Grid,
	Link,
	Pagination,
	useTheme,
	useMediaQuery,
	Fade,
} from '@mui/material';
import Card from '@mui/material/Card';
import mockArticles from '@/_mocks/newsDash';
import ArticleIcon from '@mui/icons-material/NewspaperRounded';



function NewsTabs() {
	const [selectedTab, setSelectedTab] = useState(0);
	const [page, setPage] = useState(1);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const itemsPerPage = 5;

	const countries = [
		{ label: '🇺🇸 USA', value: 'usa' },
		{ label: '🇮🇳 India', value: 'india' },
		{ label: '🇩🇪 Germany', value: 'germany' },
		{ label: '🇨🇳 China', value: 'china' },
	];

	const handleTabChange = (_, newIndex) => {
		setSelectedTab(newIndex);
		setPage(1);
	};

	const handlePageChange = (_, newPage) => {
		setPage(newPage);
	};

	const currentCountry = countries[selectedTab].value;
	const allArticles = mockArticles[currentCountry] || [];
	const totalPages = Math.ceil(allArticles.length / itemsPerPage);
	const startIndex = (page - 1) * itemsPerPage;
	const currentArticles = allArticles.slice(startIndex, startIndex + itemsPerPage);
	console.log("currentArticles",currentArticles)

	return (
		<Card
			sx={{
				height: '100%',
				padding: '15px',
			}}
		>
			<Box display="flex" alignItems="center">
				<ArticleIcon sx={{ mr: 1, fontSize: 28 }} />
				<Typography
					sx={{
						fontSize: 22,
						fontWeight: 'bold',
						color: '#333',
						padding: '10px',
					}}
				>
					Latest News
				</Typography>
			</Box>
			<Box sx={{ width: '100%' }}>
				{/* <Paper
					elevation={2}
					sx={{
						mb: 2,
						borderRadius: 3,
						background: 'linear-gradient(to top, #f5f7fa 0%, #c8e3f7 100%)',
						padding: '4px',
						marginBottom: '7px',
					}}
				> */}
				{/* <Tabs
						value={selectedTab}
						onChange={handleTabChange}
						variant={isMobile ? 'scrollable' : 'fullWidth'}
						scrollButtons={isMobile ? 'auto' : false}
						textColor="inherit"
						TabIndicatorProps={{
							style: {
								height: 0, // Hide the default indicator
							},
						}}
						sx={{
							'& .MuiTab-root': {
								textTransform: 'none',
								fontWeight: 600,
								padding: '10px',
								fontSize: '16px',
								borderRadius: 2,
								mx: 0.5,
								my: 1,
								px: 2,
								transition: 'all 0.3s ease',
								color: 'text.secondary',
								'&:hover': {
									bgcolor: 'grey.100',
									color: 'primary.main',
									boxShadow: 3,
								},
							},
							'& .Mui-selected': {
								bgcolor: 'primary.light',
								color: 'primary.contrastText',
								boxShadow: 3,
							},
						}}
					>
						{countries.map((country) => (
							<Tab key={country.value} label={country.label} sx={{ fontSize: '10px' }} />
						))}
					</Tabs> */}
				{/* </Paper> */}

				<Fade in>
					<Card
						sx={{
							height: '100%',
							borderRadius: '5px',
						}}
					>
						<Box>
							{currentArticles.length > 0 ? (
								<Grid container spacing={2}>
									{currentArticles.map((article) => (
										<Grid
											item
											xs={12}
											key={article.id}
											sx={{
												display: 'flex',
												alignItems: 'flex-start',
												borderBottom: '1px solid',
												borderColor: 'divider',
												pb: 2,
											}}
										>
											{article.imageUrl && (
												<Box
													component="img"
													src={article.imageUrl}
													alt={article.title}
													sx={{
														width: 100,
														height: 70,
														objectFit: 'cover',
														borderRadius: 1,
														mr: 2,
													}}
												/>
											)}
											<Box sx={{ flexGrow: 1 }}>
												<Typography variant="h6" sx={{ fontSize: '14px' }}>
													<Link
														href={article.url}
														rel="noopener"
														underline="hover"
													>
														{article.title}
													</Link>
												</Typography>
												<Typography variant="body2" color="text.secondary">
													{article.summary}
												</Typography>
											</Box>
										</Grid>
									))}
								</Grid>
							) : (
								<Typography variant="body1" color="text.secondary" sx={{ py: 4, textAlign: 'center' }}>
									No articles available for this country.
								</Typography>
							)}
						</Box>
					</Card>
				</Fade>

				{totalPages > 1 && (
					<Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
						<Pagination count={totalPages} page={page} onChange={handlePageChange} />
					</Box>
				)}
			</Box>
		</Card>
	);
}

export default NewsTabs;

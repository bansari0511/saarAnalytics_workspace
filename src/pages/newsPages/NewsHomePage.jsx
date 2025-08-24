import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NewsTabs from '@/pages/newsPages/NewsTabs';

function NewsHomePage() {
	return (
		<Box sx={{ px: 2, py: 4 }}>
			<Box sx={{ textAlign: 'center', mb: 6 }}>
				<Typography
					variant="h1"
					component="h1"
					sx={{
						fontSize: { xs: '2.5rem', md: '3.5rem' },
						mb: 2,
						background: 'linear-gradient(45deg, #1976d2 30%, #dc004e 90%)',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						fontWeight: 'bold',
					}}
				>
					News Center
				</Typography>
				<Typography variant="h6" component="p" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
					Stay informed with the latest developments in cybersecurity, defense, and national security affairs.
				</Typography>
			</Box>
			<NewsTabs />
		</Box>
	);
}

export default NewsHomePage;

import Grid from '@mui/material/Grid';
import PageHeader from '@/components/pageHeader';
import NewsTabs from '@/newsRoom/NewsTabs';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';

function NewsRoomPage() {
	return (
		<>
			<PageHeader title="News Inventory">
				<Breadcrumbs
					aria-label="breadcrumb"
					sx={{
						textTransform: 'uppercase',
					}}
				  >
					<Button variant="outlined" size="small" href="/dashboard3">
						BACK TO HOME
					</Button>
				</Breadcrumbs>
			</PageHeader>
			<Grid container spacing={1}>
				<Grid item xs={12} sm={12} md={12}>
					<NewsTabs />
				</Grid>
			</Grid>
		</>
	);
}

export default NewsRoomPage;

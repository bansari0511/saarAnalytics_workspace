// import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import PageHeader from '@/components/pageHeader';
import SalesOverviewCard from './salesCard';
import StatsSection from './statsSection';
import EarningsSection from './earningsSection';
import ProductsSection from './productsSection';
import NewsHomePage from '@/pages/newsPages/NewsTabs';

function Dashboard3() {
	return (
		<>
			<PageHeader title="Home">
				<Breadcrumbs
					aria-label="breadcrumb"
					sx={{
						textTransform: 'uppercase',
					}}
				/>
			</PageHeader>
			<Grid container spacing={1}>
				<Grid item xs={12} sm={12} md={12}>
					<StatsSection />
				</Grid>
				<Grid item xs={12} sm={6} md={6}>
					<NewsHomePage />
				</Grid>
				<Grid item xs={12} sm={6} md={6}>
					<EarningsSection />
				</Grid>
				<Grid item xs={12} sm={12} md={12}>
					<ProductsSection />
				</Grid>
				{/* <Grid item xs={12} sm={12} md={12}>
					<SalesOverviewCard />
				</Grid> */}
			</Grid>
		</>
	);
}

export default Dashboard3;

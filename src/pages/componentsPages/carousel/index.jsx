import getDefaultChartsColors from '@helpers/getDefaultChartsColors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import GeospatialImg from '@/assets/images/home/geo1.png';

const earningsGraphConfig = {
	options: {
		colors: getDefaultChartsColors(1),
		plotOptions: {
			bar: {
				columnWidth: '95%',
			},
		},
		chart: {
			toolbar: {
				show: false,
			},
			sparkline: {
				enabled: true,
			},
			parentHeightOffset: 0,
		},
		grid: {
			show: false,
		},
		xaxis: {
			show: false,
		},
		tooltip: {
			enabled: false,
		},
		yaxis: {
			show: false,
		},
	},
	series: [
		{
			name: 'series-1',
			data: [20, 25, 10, 15, 20, 40, 15, 40, 25],
		},
		{
			name: 'series-2',
			data: [10, 30, 45, 30, 42, 20, 30, 15, 20],
		},
	],
};

function EarningsSection() {
	return (
		<Card
			type="none"
			sx={{
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Stack direction="column" spacing={2} px={3} pt={3} flexGrow={1}>
				<Typography fontSize={30} variant="subtitle1">
					Geospatial Intelligence
				</Typography>

				{/* You can optionally add more text or a button here */}
				{/* 
				<Typography variant="h5" fontWeight="500" textTransform="uppercase">
					MapView Timeline Assets
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Activity Timeline
				</Typography>
				<Button variant="text" size="small" sx={{ textTransform: 'uppercase' }}>
					View
				</Button>
				*/}
				
				<Box
					component="img"
					src={GeospatialImg}
					alt="Geospatial Map"
					sx={{
						width: '100%',
						objectFit: 'cover',
						borderRadius: 1,
						padding:'20px',
					}}
				/>
			</Stack>
		</Card>
	);
}

export default EarningsSection;
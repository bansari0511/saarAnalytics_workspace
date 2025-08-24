// import Chart from 'react-apexcharts';
import getDefaultChartsColors from '@helpers/getDefaultChartsColors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import GeospatialImg from '@/assets/images/home/geo6.jpg';
import MapIcon from '@mui/icons-material/Map'; 

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
			  <Stack direction="row" spacing={1} px={3} pt={3} flexGrow={1} alignItems="center">
				 <MapIcon sx={{ fontSize: 30 }} />			     
				<Typography fontSize={22} variant="subtitle1" fontWeight={600}>
					 Geospatial Intelligence
				</Typography>
				{/* <Typography variant="h5" fontWeight="500" textTransform="uppercase">
					MapView Timeline Assets
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Activity Timeline
				</Typography> */}
				{/* <Button
					variant="text"
					size="small"
					sx={{
						width: 'fit-content',
						textTransform: 'uppercase',
					}}
				>
					View
				</Button> */}
			</Stack>
		   <Box
  component="img"
  src={GeospatialImg}
  alt="Geospatial Map"
  sx={{
    objectFit: 'cover',
    borderRadius: 1,
    mr: 2, // margin-right (space to the right of the image)
    p: 2,  // padding inside the image box (top, right, bottom, left)
    // height: 200, // Set the desired height here (e.g., 200px)
  }}
/>
		</Card>
	);
}

export default EarningsSection;

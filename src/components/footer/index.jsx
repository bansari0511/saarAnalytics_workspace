// MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';

// assets
import logo from '@/assets/images/logo/png/footer2.png';

function Footer() {
	return (
		<Box
			sx={{
				background: 'linear-gradient(to top, #3a7eb9 , #7DB6F1)',
			}}
			py={1}
		>
			<Container maxWidth="xxl" component={Stack} direction="column" sx={{ width: '100%' }}>
				<Grid container alignContent="center" justifyContent="center" alignItems="center">
					<Grid item xs={12} sm={6} md={6}>
						<Box
							component="img"
							src={logo}
							alt="Slim Logo"
							sx={{
								height: '5vh',
								width: '6%',
								borderRadius: '4px',
								padding: '8px',
								background: 'white',
							}}
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<Stack alignItems="right" direction="column">
							<Stack direction="row">
								<Typography
									variant="body1"
									textAlign="right"
									sx={{
										fontSize: '18px',
										color: 'white',
										marginLeft: 'auto',
									}}
								>
									Copyright 2025 © Government of India (💻 - GOI)
								</Typography>
							</Stack>
						</Stack>
					</Grid>
				</Grid>

				<Divider
					variant="middle"
					sx={{
						bgcolor: (theme) => theme.palette.secondary.main,
					}}
				/>
			</Container>
		</Box>
	);
}

export default Footer;

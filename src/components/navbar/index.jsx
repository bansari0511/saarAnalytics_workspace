// MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// Icons
import NavLinks from './navLinks';

function Navbar({ navItems, position = 'sticky' }) {
	return (
		<AppBar position={position} elevation={26} sx={{ borderLeft: 0, borderRight: 0 }}>
			<Box
				bgcolor="#DEEBFA;"
				sx={{
					paddingTop: '1px',
					paddingBottom: '1px',
				}}
			>
				<Container maxWidth="md">
					<NavLinks navItems={navItems} />
				</Container>
			</Box>
		</AppBar>
	);
}

export default Navbar;

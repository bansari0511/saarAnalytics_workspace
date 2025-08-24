import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import IconButton from '@mui/material/IconButton';

// assets
import logo from '@/assets/images/logo/png/demand-summary.png';
import LoggedUser from './loggedUser';
// import SearchBar from './searchBar';
// import SearchIcon from '@mui/icons-material/TravelExplore';

function MainHeader() {
		// const [showSearch, setShowSearch] = useState(false); // 🔄 toggle state
	return (
		<Box
			component="header"
			py={1.5}
			zIndex={1}
			sx={{
				background: 'linear-gradient(45deg, #00397d, #64a0de)',
			}}
		>
			<Stack
				direction="row"
				height={50}
				justifyContent="space-between"
				alignItems="center"
				flexWrap="wrap"
				spacing={3}
				overflow="hidden"
				sx={{ marginLeft: '24px', marginRight: '24px' }}
			>
				<Stack direction="row" alignItems="center" spacing={1}>
					<Box
						component="img"
						width={{
							xs: 50,
							sm: 50,
						}}
						src={logo}
						alt="logo"
					/>
					<Typography
						component="sub"
						variant="caption"
						alignSelf="self-end"
						display={{
							xs: 'none',
							sm: 'block',
						}}
						sx={{ color: 'white', fontSize: '30px', fontWeight: 600 }}
					>
						saarAnalytics
					</Typography>
				</Stack>
				{/* <IconButton
						color="primary"
							size="small"
							type="submit"
							sx={{ bgcolor: 'primary.main' }}
					onClick={() => setShowSearch(!showSearch)}
				>
					<SearchIcon />
				</IconButton> */}

				{/* Show SearchBar based on toggle */}
					{/* {showSearch && <SearchBar />} */}
				<LoggedUser />
			</Stack>
		</Box>
	);
}

export default MainHeader;

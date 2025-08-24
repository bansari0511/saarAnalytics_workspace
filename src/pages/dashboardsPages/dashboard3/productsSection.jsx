import { v4 as uuid } from 'uuid';
import List from '@mui/material/List';
import usersData from '@/_mocks/customers';
import ListItem from '@mui/material/ListItem';
import Tooltip from '@mui/material/Tooltip';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import CardHeader from '@/components/cardHeader';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import GeospatialImg from '@/assets/images/home/link4.png';

function ProductsSection() {
	return (
		<Card type="none">
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6} md={6}>
					<CardHeader
						title="Advanced Search"
						size="medium"
						sx={{
							p: 4,
							pb: 2,
						}}
					/>
					<Grid item xs={12} sm={12} md={12}>
						<form>
							<TextField
								size="medium"
								margin="dense"
								InputProps={{
									name: 'search text',
									endAdornment: (
										<InputAdornment position="end">
											<Button type="submit" variant="contained" disableElevation>
												Country
											</Button>
										</InputAdornment>
									),
									sx: {
										pr: 0,
									},
								}}
								placeholder="country"
								variant="outlined"
								fullWidth
							/>
						</form>
					</Grid>
					<List
						sx={{
							'& > li:not(:last-child)': {
								borderBottom: 1,
								borderColor: (theme) => theme.palette.border,
							},
						}}
					>
						{usersData.slice(0, 6).map((user) => (
							<UserListItem key={user.id} user={user} />
						))}
					</List>
				</Grid>
			  <Grid item xs={12} sm={6} md={6}>
               <CardHeader
    title="Link Analysis"
    size="medium"
    sx={{
      m: 2,
    }}
  >
    <ButtonGroup variant="outlined" size="small" aria-label="temporaly button group">
      {['Today', 'This Month', 'This Week'].map((tab, i) => (
        <Button
          key={i}
          variant={tab === 'This Week' ? 'contained' : 'outlined'}
          sx={{
            ...(tab === 'This Week' && {
              outline: (theme) => `2px solid ${theme.palette.primary.main}`,
            }),
          }}
        >
          {tab}
        </Button>
      ))}
    </ButtonGroup>
              </CardHeader>
              <Box
                component="img"
    src={GeospatialImg}
    alt="Geospatial Map"
    sx={{
      objectFit: 'cover',
      borderRadius: 1,
      mr: 2, // margin-right (space to the right of the image)
      p: 2,  // padding inside the image box (top, right, bottom, left)
      width: '80%', // Make the image span the full width of the container
      height: 'auto', // Maintain the aspect ratio
      maxHeight: 400, // Optional: set a max height to prevent the image from becoming too large
               }}
              />
          </Grid>
         </Grid>
		 </Card>
	);
}

function UserListItem({ user }) {
	const { avatarImg, name, rol } = user;
	return (
		<ListItem disablePadding alignItems="flex-start">
			<ListItemButton>
				<ListItemAvatar>
					<Avatar alt="Remy Sharp" src={avatarImg} />
				</ListItemAvatar>
				<span
					style={{
						width: '100%',
					}}
				    >
					<Typography variant="subtitle2" fontSize={13} color="primary.main">
						{name}
					</Typography>
					<Typography variant="caption">{rol}</Typography>
				</span>
				<Tooltip title="Add Friend">
					<IconButton>
						<PersonAddAlt1OutlinedIcon fontSize="small" color="primary" />
					</IconButton>
				</Tooltip>
			</ListItemButton>
		</ListItem>
	);
}

export default ProductsSection;

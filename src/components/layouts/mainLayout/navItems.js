import { v4 as uuid } from 'uuid';
// Icons
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NewspaperOutlined from '@mui/icons-material/NewspaperOutlined';
import MapOutlined from '@mui/icons-material/MapOutlined';

/**
 * @example
 * {
 *	id: number,
 *	type: "group" | "item",
 *	title: string,
 *	Icon: NodeElement
 *	menuChildren?: {title: string, href: string}[]
 *  menuMinWidth?: number
 * }
 */

const NAV_LINKS_CONFIG = [
	{
		id: uuid(),
		type: 'item',
		title: 'Home',
		Icon: BarChartOutlinedIcon,
		href: '/dashboard3',
	},
	{
		id: uuid(),
		type: 'item',
		title: 'Newsroom',
		Icon: NewspaperOutlined,
		href: '/NewsHomePage',
	},
	
	// {
	// 	id: uuid(),
	// 	type: 'group',
	// 	title: 'Pages',
	// 	Icon: AutoStoriesOutlinedIcon,
	// 	menuChildren: [
	// 		{
	// 			id: uuid(),
	// 			title: 'Sign in',
	// 			type: 'group',
	// 			menuChildren: [
	// 				{
	// 					title: 'Sign in',
	// 					href: '/pages/login',
	// 				},
	// 				{
	// 					title: 'Sign in Simple',
	// 					href: '/pages/login/simple',
	// 				},
	// 				{
	// 					title: 'Sign in Split',
	// 					href: '/pages/login/split',
	// 				},
	// 			],
	// 		},
	// 		{
	// 			id: uuid(),
	// 			title: 'Sign up',
	// 			type: 'group',
	// 			menuChildren: [
	// 				{
	// 					title: 'Sign up',
	// 					href: '/pages/signup',
	// 				},
	// 				{
	// 					title: 'Sign up Simple',
	// 					href: '/pages/signup/simple',
	// 				},
	// 				{
	// 					title: 'Sign up Split',
	// 					href: '/pages/signup/split',
	// 				},
	// 			],
	// 		},
	// 	]		
	// },
	{
		id: uuid(),
		type: 'item',
		title: 'Search and Analysis',
		Icon: SearchOutlined,
		href: '/SamplePage',
	},
	{
		id: uuid(),
		type: 'item',
		title: 'Map',
		Icon: MapOutlined,
		href: '/MapView',
	},
	{
		id: uuid(),
		type: 'item',
		title: 'Profile',
		Icon: AccountCircleOutlinedIcon,
		href: '/profile',
	},
];

export default NAV_LINKS_CONFIG;

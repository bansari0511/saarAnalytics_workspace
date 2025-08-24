import '@/assets/css/style.css';
import '@fontsource/rubik/300.css';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import '@fontsource/rubik/700.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import StoreProvider from '@/store';

import { Provider as SnackbarProvider } from '@/components/snackbar';
// linear-gradient(to bottom, #0c2031, #ced6ea)
import MUITheme from '@/utils/theme';
import Router from '@/utils/routes';
import CustomizationLayout from '@/components/layouts/customization';

function App() {
	return (
		<StoreProvider>
			<MUITheme>
				<SnackbarProvider>
					<CustomizationLayout />
					<Router />
				</SnackbarProvider>
			</MUITheme>
		</StoreProvider>
	);
}

export default App;

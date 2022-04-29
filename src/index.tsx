import {createRoot} from 'react-dom/client';
import './styles/fonts.scss';
import './styles/index.scss';
import App from './App';
import AppProvider from 'providers/appProvider';

const container: any = document.getElementById('root');
const root: any = createRoot(container);

root.render(
	<AppProvider>
		<App />
	</AppProvider>
);

import {createRoot} from 'react-dom/client';
import './styles/fonts.scss';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppProvider from 'providers/appProvider';

const container: any = document.getElementById('root');
const root: any = createRoot(container);
root.render(<AppProvider><App /></AppProvider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

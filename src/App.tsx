import {BrowserRouter} from 'react-router-dom';
import './styles/app.scss';
import AppRouter from 'components/router/router';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;

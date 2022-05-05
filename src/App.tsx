import {BrowserRouter} from 'react-router-dom';
import './styles/app.scss';
import AppRouter from 'components/router/router';
import {useRef} from 'react';

function App() {
  const topAnchor = useRef(null as any);
  const bottomAnchor = useRef(null as any);

  return (
    <BrowserRouter>
      <div className="crm-application__anchor crm-application__anchor-top" ref={topAnchor} tabIndex={0}></div>
      <AppRouter />
      <div className="crm-application__anchor crm-application__anchor-bottom" ref={bottomAnchor} tabIndex={0}></div>
    </BrowserRouter>
  );
}

export default App;

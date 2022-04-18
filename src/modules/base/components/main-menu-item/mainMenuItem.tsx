import {useMemo} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import './mainMenuItem.scss';

function MainMenuItem({item, title}: any) {
	const location = useLocation();
	const navigate = useNavigate();

	const onItemClick = () => navigate(item.path);
	const itemActive = useMemo(() => location.pathname.startsWith(item.path), [item.path, location.pathname]);

	return <button className={`crm-main-menu-item ${itemActive ? 'active' : ''}`} onClick={onItemClick} title={title}>{item.icon}</button>
}

export default MainMenuItem;
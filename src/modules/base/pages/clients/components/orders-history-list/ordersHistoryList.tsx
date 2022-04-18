import {useContext, useMemo} from 'react';
import {ClientsContext} from '../../contexts/clientsContext';
import './ordersHistoryList.scss';

function OrdersHistoryList() {
	const {selectedClient} = useContext(ClientsContext);
	const orders = useMemo(() => {
		const array = new Array(getRandomInt(5, 15)).fill({});
		console.log(array);

		return array;
	}, [selectedClient]);

	function getRandomInt(min: number, max: number) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	  }

	return <ul className="crm-client-orders-history__list">
		{
			orders.map((order: any, index: number) => <li className="crm-client-orders-history__list-item" key={index}></li>)
		}
	</ul>
}

export default OrdersHistoryList;

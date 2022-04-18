import {FaPlusCircle} from '@react-icons/all-files/fa/FaPlusCircle';
import {useTranslation} from 'hooks/useTranslation';
import {useState} from 'react';
import CategoryModal from './components/category-modal/categoryModal';
import ServiceModal from './components/service-modal/serviceModal';
import ClearCategoryModal from './components/clear-category-modal/clearCategoryModal';
import RemoveCategoryModal from './components/remove-category-modal/removeCategoryModal';
import ServicesList from './components/services-list/servicesList';
import {ServicesContext} from './contexts/servicesContext';
import './services.scss';

const initialServices = [
	{
		category: {id: 1, name: 'Автомойка', description: 'Описание автомойки'},
		items: [
			{id: 101, name: 'Смыв', description: '', price: '12 BYR'},
			{id: 102, name: 'Стандарт', description: 'Мойка водой под напором + шампунь. Смыв водой под напором + нанесение воска.', price: '20 BYR'},
			{id: 103, name: 'Люкс', description: '', price: '50 BYR'},
			{id: 104, name: 'Пылесос', description: 'Салон, багажник, коврики и сиденья', price: '35 BYR'},
			{id: 105, name: 'Удаление битума', description: 'Цена за одно колесо', price: '5 BYR'},
			{id: 106, name: 'Натирка резины', description: 'Цена за одно колесо', price: '5 BYR'}
		]
	},
	{
		category: {id: 2, name: 'СТО'},
		items: [
			{id: 201, name: 'Переобуться', description: '', price: '200 BYR'},
			{id: 202, name: 'Прокол', description: '', price: '20 BYR'}
		]
	}
];

function Services() {
	const [categoryModalVisibility, setCategoryModalVisibility] = useState(false);
	const [serviceModalVisibility, setServiceModalVisibility] = useState(false);
	const [clearCategoryModalVisibility, setClearCategoryModalVisibility] = useState(false);
	const [removeCategoryModalVisibility, setRemoveCategoryModalVisibility] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState({} as any);
	const [selectedService, setSelectedService] = useState({} as any);
	const [serviceCategoryId, setServiceCategoryId] = useState(null as any);
	const [translations, translationsLoading] = useTranslation({path: 'services', filename: 'services'});
	const [services, setServices] = useState(initialServices);

	/* Category Modal callbaks */
	const closeCategoryModal = () => {
		setCategoryModalVisibility(false);
		setSelectedCategory(null);
	};

	const onCategoryModalCancelled = (e: Event) => {
		e.preventDefault();
		closeCategoryModal();
	};
	const onCategoryModalApplied = (e: Event) => {
		e.preventDefault();
		closeCategoryModal();
	};

	const onClearCategoryCancelled = (e: Event) => {
		e.preventDefault();
		setClearCategoryModalVisibility(false);
	};
	const onClearCategoryApplied = (e: Event) => {
		e.preventDefault();
		setClearCategoryModalVisibility(false);
	};

	const onRemoveCategoryCancelled = (e: Event) => {
		e.preventDefault();
		setRemoveCategoryModalVisibility(false);
	};
	const onRemoveCategoryApplied = (e: Event) => {
		e.preventDefault();
		setRemoveCategoryModalVisibility(false);
	};

	const onAddCategoryClicked = () => {
		setSelectedCategory(null);
		setCategoryModalVisibility(true);
	}

	/* Service Modal callbacks */
	const closeServiceModal = () => {
		setServiceModalVisibility(false);
		setSelectedService(null);
	};

	const onServiceModalCancelled = (e: Event) => {
		e.preventDefault();
		closeServiceModal();
	};
	const onServiceModalApplied = (e: Event) => {
		e.preventDefault();
		closeServiceModal();
	};

	return <div className="crm-services">
		<ServicesContext.Provider value={{
			setServiceModalVisibility,
			setCategoryModalVisibility,
			setClearCategoryModalVisibility,
			setRemoveCategoryModalVisibility,
			selectedCategory,
			setSelectedCategory,
			selectedService,
			setSelectedService,
			serviceCategoryId,
			setServiceCategoryId
		}}>
			{
				categoryModalVisibility && <CategoryModal
					setModalVisibility={setCategoryModalVisibility}
					onCancel={onCategoryModalCancelled}
					onApply={onCategoryModalApplied}
					translations={translations} />
			}
			{
				serviceModalVisibility && <ServiceModal
					setModalVisibility={setServiceModalVisibility}
					onCancel={onServiceModalCancelled}
					onApply={onServiceModalApplied}
					translations={translations} />
			}
			{
				clearCategoryModalVisibility && <ClearCategoryModal
					setModalVisibility={setClearCategoryModalVisibility}
					onCancel={onClearCategoryCancelled}
					onApply={onClearCategoryApplied}
					translations={translations} />
			}
			{
				removeCategoryModalVisibility && <RemoveCategoryModal
					setModalVisibility={setRemoveCategoryModalVisibility}
					onCancel={onRemoveCategoryCancelled}
					onApply={onRemoveCategoryApplied}
					translations={translations} />
			}
			<div className="crm-services__add-new-category">
				<button
					className="crm-services__add-new-category__button"
					onClick={onAddCategoryClicked}
					title={translations['services.add.new.category.btn']}>
					<FaPlusCircle style={{marginRight: '1rem'}} />
					{translations['services.category.btn.new']}
				</button>
			</div>
			<ServicesList list={services} />
		</ServicesContext.Provider>
	</div>
}

export default Services;
import './serviceCategory.scss';
import {FiEdit} from '@react-icons/all-files/fi/FiEdit';
import {FiTrash} from '@react-icons/all-files/fi/FiTrash';
import {FiMinusSquare} from '@react-icons/all-files/fi/FiMinusSquare';
import {FiChevronDown} from "@react-icons/all-files/fi/FiChevronDown";
import ButtonIcon from 'ui/button-icon/buttonIcon';
import {useContext} from 'react';
import {ServicesContext} from '../../contexts/servicesContext';

function ServiceCategory({category, expanded, setExpanded, translations}: any) {
	const {setCategoryModalVisibility, setSelectedCategory, setClearCategoryModalVisibility, setRemoveCategoryModalVisibility} = useContext(ServicesContext);

	const onEditCategoryClicked = () => {
		setSelectedCategory(category);
		setCategoryModalVisibility(true);
	};

	return <div className="crm-service-category">
		<div className="crm-service-category__main" onClick={() => setExpanded(!expanded)}>
			<ButtonIcon
				style={{marginRight: '1rem', transition: 'all 0.5s', transform: `rotateX(${expanded ? '0deg' : '180deg'})`}}
				title={expanded ? translations['service.category.collapse'] : translations['service.category.expand']}>
				<FiChevronDown />
			</ButtonIcon>
			<h3 className="crm-service-category__heading">{category.name}</h3>
		</div>
		<div className="crm-service-category__actions">
			<ButtonIcon title={translations['service.category.edit']} style={{marginRight: '1rem'}} onClick={onEditCategoryClicked}><FiEdit /></ButtonIcon>
			<ButtonIcon title={translations['service.category.clear']} style={{marginRight: '1rem'}} onClick={() => setClearCategoryModalVisibility(true)}><FiMinusSquare /></ButtonIcon>
			<ButtonIcon title={translations['service.category.remove']} onClick={() => setRemoveCategoryModalVisibility(true)}><FiTrash /></ButtonIcon>
		</div>
	</div>
}

export default ServiceCategory;
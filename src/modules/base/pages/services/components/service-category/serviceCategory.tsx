import './serviceCategory.scss';
import {MdEdit} from '@react-icons/all-files/md/MdEdit';
import {FaTrash} from '@react-icons/all-files/fa/FaTrash';
import {MdRemoveCircle} from '@react-icons/all-files/md/MdRemoveCircle';
import {AiFillCaretUp} from "@react-icons/all-files/ai/AiFillCaretUp";
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
				<AiFillCaretUp />
			</ButtonIcon>
			<h3 className="crm-service-category__heading">{category.name}</h3>
		</div>
		<div className="crm-service-category__actions">
			<ButtonIcon title={translations['service.category.edit']} style={{marginRight: '1rem'}} onClick={onEditCategoryClicked}><MdEdit /></ButtonIcon>
			<ButtonIcon title={translations['service.category.clear']} style={{marginRight: '1rem'}} onClick={() => setClearCategoryModalVisibility(true)}><MdRemoveCircle /></ButtonIcon>
			<ButtonIcon title={translations['service.category.remove']} onClick={() => setRemoveCategoryModalVisibility(true)}><FaTrash /></ButtonIcon>
		</div>
	</div>
}

export default ServiceCategory;
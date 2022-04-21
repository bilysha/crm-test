import {BiBuilding} from '@react-icons/all-files/bi/BiBuilding';
import {BsPeopleFill} from '@react-icons/all-files/bs/BsPeopleFill';
import {FaComment} from '@react-icons/all-files/fa/FaComment';
import {IoMdTrash} from '@react-icons/all-files/io/IoMdTrash';
import {MdEdit} from '@react-icons/all-files/md/MdEdit';
import {MdViewList} from '@react-icons/all-files/md/MdViewList';
import {useContext} from 'react';
import ButtonIcon from 'ui/button-icon/buttonIcon';
import {OfficesContext} from '../../contexts/officesContext';
import {getOfficeAddressString} from '../../utils/officesUtils';
import './officesListItem.scss';

function OfficesListItem({item, translations}: any) {
	const {setOfficeDeleteModalVisibility, setSelectedOffice, setOfficeSlideoutVisibility} = useContext(OfficesContext);
	const officeAddress = getOfficeAddressString(item.address);
	const officeName = item.name || item.address.street;

	const onEditClicked = () => {
		setSelectedOffice(item);
		setOfficeSlideoutVisibility(true);
	};

	return <div className="crm-offices-list-item">
		<div className="crm-offices-list-item__actions">
			<ButtonIcon
				style={{marginBottom: '0.5rem'}}
				title={translations['offices.list.item.action.edit']}
				onClick={onEditClicked}>
				<MdEdit />
			</ButtonIcon>
			<ButtonIcon
				title={translations['offices.list.item.action.delete']}
				onClick={() => setOfficeDeleteModalVisibility(true)}
				accent="warn">
				<IoMdTrash />
			</ButtonIcon>
		</div>
		<div>
			<div className="crm-offices-list-item__icon">
				<BiBuilding />
			</div>
			<h3 className="crm-offices-list-item__name" title={officeName}>{officeName}</h3>
			<p className="crm-offices-list-item__address" title={officeAddress}>{officeAddress}</p>
		</div>
		<div className="crm-offices-list-item__info">
			<div className="crm-offices-list-item__info-item" title={translations['offices.list.item.assignedEmployees.title']}>
				<span>{item.assignedEmployees || 0}</span>
				<span className="crm-offices-list-item__info-item-icon"><BsPeopleFill /></span>
			</div>
			<div className="crm-offices-list-item__info-item" title={translations['offices.list.item.servicesCount.title']}>
				<span>{item.servicesCount || 0}</span>
				<span className="crm-offices-list-item__info-item-icon"><MdViewList /></span>
			</div>
			{
				item.comment && item.comment.length && <div className="crm-offices-list-item__info-item" title={translations['offices.list.item.comment.title']}>
					<span className="crm-offices-list-item__info-item-icon"><FaComment /></span>
				</div>
			}
		</div>
	</div>
}

export default OfficesListItem;
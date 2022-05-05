import {useFetching} from 'hooks/useFetching';
import {useTranslation} from 'hooks/useTranslation';
import {isEmpty} from 'lodash';
import {useEffect, useState} from 'react';
import Button from 'ui/button/button';
import Loader from 'ui/loader/loader';
import OfficeDeleteModal from './components/office-delete-modal/officeDeleteModal';
import OfficeSlideout from './components/office-slideout/officeSlideout';
import OfficesList from './components/offices-list/officesList';
import {OfficesContext} from './contexts/officesContext';
import {IOffice} from './models/offices.interfaces';
import './offices.scss';
import OfficesRestService from './services/officesRestService';

function Offices() {
	const [offices, setOffices] = useState([] as IOffice[]);
	const [officeSlideoutVisibility, setOfficeSlideoutVisibility] = useState(false);
	const [officeDeleteModalVisibility, setOfficeDeleteModalVisibility] = useState(false);
	const [selectedOffice, setSelectedOffice] = useState({} as IOffice);
	const [translations, translationsLoading] = useTranslation({path: 'offices', filename: 'offices'});
	const [fetchOffices, loadingOffices] = useFetching(async () => {
		const list = await OfficesRestService.getAll();

		setOffices(list);
	});

	/* Add Office Slideout callbacks */
	const closeOfficeSlideout = () => {
		setSelectedOffice({} as IOffice);
		setOfficeSlideoutVisibility(false);
	};
	const onAddNewOfficeClicked = () => {
		setOfficeSlideoutVisibility(true);
	};
	const onOfficeSlideoutApplied = async (e: Event, offices: IOffice[]) => {
		e.preventDefault();
		if (isEmpty(selectedOffice)) {
			await OfficesRestService.add(offices);
		} else {
			await OfficesRestService.edit(offices);
		}
		closeOfficeSlideout();
		fetchOffices();
	};
	const onOfficeSlideoutCancelled = (e: Event) => {
		e.preventDefault();
		closeOfficeSlideout();
	};

	/* Delete Office modal callbacks */
	const onDeleteOfficeApplied = async (e: Event, id: number) => {
		e.preventDefault();
		await OfficesRestService.delete(id);
		setOfficeDeleteModalVisibility(false);
		fetchOffices();
	};
	const onDeleteOfficeCancelled = (e: Event) => {
		e.preventDefault();
		setOfficeDeleteModalVisibility(false);
	};

	useEffect(() => {
		fetchOffices()
	}, []);

	return <div className="crm-offices">
		<OfficesContext.Provider value={{
			setOfficeDeleteModalVisibility,
			selectedOffice,
			setSelectedOffice,
			setOfficeSlideoutVisibility
		}}>
			{
				officeSlideoutVisibility && <OfficeSlideout
					setVisibility={closeOfficeSlideout}
					onCancel={onOfficeSlideoutCancelled}
					onApply={onOfficeSlideoutApplied}
					translations={translations} />
			}
			{
				officeDeleteModalVisibility && <OfficeDeleteModal
					setModalVisibility={setOfficeDeleteModalVisibility}
					onCancel={onDeleteOfficeCancelled}
					onApply={onDeleteOfficeApplied}
					translations={translations} />
			}
			{
				loadingOffices || translationsLoading
					? <Loader />
					: <>
						<div className="crm-offices__heading">
							<p className="crm-offices__heading-count">{translations['offices.current.count']} {offices.length}</p>
							<Button onClick={onAddNewOfficeClicked}>{translations['offices.add.new.office.button']}</Button>
						</div>
						<OfficesList translations={translations} list={offices} />
					</>
			}
		</OfficesContext.Provider>
	</div>
}

export default Offices;
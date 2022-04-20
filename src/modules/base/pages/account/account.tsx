import {useTranslation} from 'hooks/useTranslation';
import {useState} from 'react';
import Button from 'ui/button/button';
import Input from 'ui/input/input';
import {formatDate, formatPhomeNumber} from '../clients/utils/clientsUtils';
import './account.scss';
import PersonalInfoSlideout from './components/personal-info-slideout/personalInfoSlideout';

const MOCK_USER = {
	firstName: 'Ilya',
	lastName: 'Belavusau',
	email: 'ilyaibelousov@gmail.com',
	phone: '375259224653',
	dateOfBirth: '1996-03-12'
};

function Account() {
	const [user] = useState(MOCK_USER);
	const [translations] = useTranslation({path: 'account', filename: 'account'});
	const [personalInfoModalVisibility, setPersonalInfoModaVisibility] = useState(false);

	/* Personal Info Modal actions */
	const onPersonalInfoCancelled = (e: Event) => {
		e.preventDefault();
		setPersonalInfoModaVisibility(false);
	};
	const onPersonalInfoApplied = (e: Event) => {
		e.preventDefault();
		setPersonalInfoModaVisibility(false);
	};

	return <div className="crm-account">
		{
			personalInfoModalVisibility && <PersonalInfoSlideout
				translations={translations}
				personalInfo={user}
				setVisibility={setPersonalInfoModaVisibility}
				onCancel={onPersonalInfoCancelled}
				onApply={onPersonalInfoApplied} />
		}
		<div className="crm-account__heading">
			<div className="crm-account__content-block one-line">
				<div className="crm-account__content-block__user-info">
					<div className="crm-account__content-block__user-info__avatar">
						{user.firstName[0].toLocaleUpperCase()}{user.lastName[0].toLocaleUpperCase()}
					</div>
					<div className="crm-account__content-block__user-info__name">
						<h2>{user.firstName}</h2>
						<h2>{user.lastName}</h2>
					</div>
				</div>
				<Button onClick={() => setPersonalInfoModaVisibility(true)}>{translations['account.section.heading.button.edit']}</Button>
			</div>
		</div>
		<div className="crm-account__main">
			<div className="crm-account__content-block">
				<h2 className="crm-account__content-block__heading">{translations['account.section.general.heading']}</h2>
				<div className="crm-account__content-block__main">
					<div className="crm-account__content-block__main-item">
						<h3 className="crm-account__content-block__main-item__label">
							{translations['account.section.general.email']}
						</h3>
						<div className="crm-account__content-block__main-item__value">
							{user.email}
						</div>
					</div>
					<div className="crm-account__content-block__main-item">
						<h3 className="crm-account__content-block__main-item__label">
							{translations['account.section.general.phone']}
						</h3>
						<div className="crm-account__content-block__main-item__value">
							{formatPhomeNumber(user.phone)}
						</div>
					</div>
					<div className="crm-account__content-block__main-item">
						<h3 className="crm-account__content-block__main-item__label">
							{translations['account.section.general.dateOfBirth']}
						</h3>
						<div className="crm-account__content-block__main-item__value">
							{formatDate(user.dateOfBirth)}
						</div>
					</div>
				</div>
			</div>
			<div className="crm-account__content-block">
				<h2 className="crm-account__content-block__heading">{translations['account.section.password.heading']}</h2>
				<div className="crm-account__content-block__main">
					<Input theme="secondary" size="large" label={translations['account.section.password.current']} />
					<Input theme="secondary" size="large" label={translations['account.section.password.new']} />
					<Input theme="secondary" size="large" label={translations['account.section.password.confirm']} />
					<Button>{translations['account.section.password.button.confirm']}</Button>
				</div>
			</div>
		</div>
	</div>
}

export default Account;
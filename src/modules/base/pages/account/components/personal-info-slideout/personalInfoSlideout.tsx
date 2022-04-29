import {useTranslation} from 'hooks/useTranslation';
import {useState} from 'react';
import Button from 'ui/button/button';
import Input from 'ui/input/input';
import Loader from 'ui/loader/loader';
import Slideout from 'ui/slideout/slideout';
import './personalInfoSlideout.scss';

function PersonalInfoSlideout({setVisibility, personalInfo, onCancel, onApply}: any) {
	const [formValue, setFormValue] = useState(personalInfo);
	const [translations, translationsLoading] = useTranslation({path: 'account', filename: 'personal-info-slideout'});

	const onFormFieldChange = (field: string, value: string) => {
		setFormValue({...formValue, [field]: value});
	};

	setTimeout(() => console.log(translations), 2000);

	return <Slideout heading={translations['personal.info.slideout.heading']} setVisibility={setVisibility}>
		<div className="crm-slideout-content">
			{
				translationsLoading
					? <Loader />
					: <>
						<div className="crm-slideout-content__main">
							<form className="crm-account__personal-info__slideout">
								<Input
									value={formValue.firstName}
									uiStyle="secondary"
									onChange={(e: any) => onFormFieldChange('firstName', e.target.value)}
									label={translations['personal.info.slideout.firstName']}
									type="text" />
								<Input
									value={formValue.lastName}
									uiStyle="secondary"
									onChange={(e: any) => onFormFieldChange('lastName', e.target.value)}
									label={translations['personal.info.slideout.lastName']}
									type="text" />
								<Input
									value={formValue.email}
									uiStyle="secondary"
									onChange={(e: any) => onFormFieldChange('email', e.target.value)}
									label={translations['personal.info.slideout.email']}
									type="email" />
								<Input
									value={formValue.phone}
									uiStyle="secondary"
									onChange={(e: any) => onFormFieldChange('phone', e.target.value)}
									label={translations['personal.info.slideout.phone']}
									type="text" />
								<Input
									value={formValue.dateOfBirth}
									uiStyle="secondary"
									onChange={(e: any) => onFormFieldChange('dateOfBirth', e.target.value)}
									label={translations['personal.info.slideout.dateOfBirth']}
									lang="ru"
									type="date" />
							</form>
						</div>
						<div className="crm-slideout-content__footer">
							<Button style={{marginRight: "1rem"}} theme="secondary" onClick={onCancel}>{translations['personal.info.slideout.action.cancel']}</Button>
							<Button onClick={onApply}>{translations['personal.info.slideout.action.apply']}</Button>
						</div>
					</>
			}
		</div>
	</Slideout>
}

export default PersonalInfoSlideout;
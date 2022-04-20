import {useState} from 'react';
import Button from 'ui/button/button';
import Input from 'ui/input/input';
import Slideout from 'ui/slideout/slideout';
import './personalInfoSlideout.scss';

function PersonalInfoSlideout({translations, setVisibility, personalInfo, onCancel, onApply}: any) {
	const [formValue, setFormValue] = useState(personalInfo);

	const onFormFieldChange = (field: string, value: string) => {
		setFormValue({...formValue, [field]: value});
	};

	return <Slideout heading={translations['account.personal.info.slideout.heading']} setVisibility={setVisibility}>
		<div className="crm-slideout-content">
			<div className="crm-slideout-content__main">
				<form className="crm-account__personal-info__slideout">
					<Input
						value={formValue.firstName}
						onChange={(e: any) => onFormFieldChange('firstName', e.target.value)}
						label={translations['account.personal.info.slideout.firstName']}
						type="text" />
					<Input
						value={formValue.lastName}
						onChange={(e: any) => onFormFieldChange('lastName', e.target.value)}
						label={translations['account.personal.info.slideout.lastName']}
						type="text" />
					<Input
						value={formValue.email}
						onChange={(e: any) => onFormFieldChange('email', e.target.value)}
						label={translations['account.personal.info.slideout.email']}
						type="email" />
					<Input
						value={formValue.phone}
						onChange={(e: any) => onFormFieldChange('phone', e.target.value)}
						label={translations['account.personal.info.slideout.phone']}
						type="text" />
					<Input
						value={formValue.dateOfBirth}
						onChange={(e: any) => onFormFieldChange('dateOfBirth', e.target.value)}
						label={translations['account.personal.info.slideout.dateOfBirth']}
						lang="ru"
						type="date" />
				</form>
			</div>
			<div className="crm-slideout-content__footer">
				<Button style={{marginRight: "1rem"}} theme="secondary" onClick={onCancel}>{translations['account.personal.info.slideout.action.cancel']}</Button>
				<Button onClick={onApply}>{translations['account.personal.info.slideout.action.apply']}</Button>
			</div>
		</div>
	</Slideout>
}

export default PersonalInfoSlideout;
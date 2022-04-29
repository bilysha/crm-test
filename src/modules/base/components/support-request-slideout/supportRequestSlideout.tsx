import {useTranslation} from 'hooks/useTranslation';
import {BaseContext} from 'modules/base/contexts/baseContext';
import {useContext} from 'react';
import Button from 'ui/button/button';
import Loader from 'ui/loader/loader';
import Slideout from 'ui/slideout/slideout';
import Textarea from 'ui/textarea/textarea';
import './supportRequestSlideout.scss';

function SupportRequestSlideout() {
	const [translations, translationsLoading] = useTranslation({path: 'base', filename: 'support-request-slideout'});
	const {setSupportRequestVisibility} = useContext(BaseContext);

	const onApply = (): void => {
		setSupportRequestVisibility(false);
	};

	const onCancel = (): void => {
		setSupportRequestVisibility(false);
	};

	return <Slideout heading={translations['support.request.slideout.heading']} setVisibility={setSupportRequestVisibility}>
		<div className="crm-slideout-content">
			{
				translationsLoading
					? <Loader />
					: <>
						<div className="crm-slideout-content__main">
							<form className="crm-support-request-slideout__form">
								<p className="crm-support-request-slideout__form__tip">{translations['support.request.slideout.form.tip']}</p>
								<Textarea
									label={translations['support.request.slideout.form.problem.label']}
									placeholder={translations['support.request.slideout.form.problem.placeholder']}
									uiStyle="secondary"
									rows="8" />
							</form>
						</div>
						<div className="crm-slideout-content__footer">
							<Button style={{marginRight: "1rem"}} theme="secondary" onClick={onCancel}>{translations['support.request.slideout.action.cancel']}</Button>
							<Button onClick={onApply}>{translations['support.request.slideout.action.apply']}</Button>
						</div>
					</>
			}
		</div>
	</Slideout>
}

export default SupportRequestSlideout;
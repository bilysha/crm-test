import {isEqual} from 'lodash';
import classes from './inputRadio.module.scss';

function InputRadio({label, options, onChange, value}: any) {
	return <div className={classes.inputRadioContainer}>
		<label className={classes.label}>{label}</label>
		<div className={classes.inputRadioGroup}>
			{
				options.map((option: any, index: number) => <div className={classes.radioContainer} key={option.id}>
					<input
						className={classes.radio}
						type="radio"
						id={`choice-${index}`}
						name="contact"
						onChange={onChange}
						checked={isEqual(option.value, value)}
						value={option.value} />
					<label
						className={classes.radioLabel}
						htmlFor={`choice-${index}`}>
						{option.label}
					</label>
				</div>)
			}
		</div>
	</div>
};

export default InputRadio;
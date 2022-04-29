import InlineValidation from 'ui/inline-validation/inlineValidation';
import classes from './input.module.scss';

function Input({label, uiStyle, uiSize, invalid, invalidMessage, ...props}: any) {
	return <div className={classes.inputContainer}>
		<label className={classes.label}>{label}</label>
		<div className={[classes.inputWrapper, classes[uiStyle || 'primary'], classes[uiSize || 'default']].join(' ')}>
			<input {...props} className={
				[
					classes.input,
					classes[uiStyle || 'primary'],
					invalid ? classes.invalid : classes.valid
				].join(' ')
			} />
		</div>
		<div className={classes.validationContainer}>
			{invalid && invalidMessage && <InlineValidation message={invalidMessage} />}
		</div>
	</div>
}

export default Input;
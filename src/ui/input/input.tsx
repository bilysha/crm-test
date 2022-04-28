import InlineValidation from 'ui/inline-validation/inlineValidation';
import classes from './input.module.scss';

function Input({label, theme, size, invalid, invalidMessage, containerStyle, ...props}: any) {
	return <div style={containerStyle} className={classes.inputContainer}>
		<label className={classes.label}>{label}</label>
		<div className={classes.inputWrapper}>
			<input {...props} className={
				[
					classes.input,
					classes[theme || 'primary'],
					classes[size || 'default'],
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
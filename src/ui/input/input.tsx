import InlineValidation from 'ui/inline-validation/inlineValidation';
import classes from './input.module.scss';

function Input({label, theme, size, invalid, invalidMessage, ...props}: any) {
	return <div className={classes.inputContainer}>
		<label className={classes.label}>{label}</label>
		<input {...props} className={
			[
				classes.input,
				classes[theme || 'primary'],
				classes[size || 'default'],
				invalid ? classes.invalid : classes.valid
			].join(' ')
		} />
		{invalid && invalidMessage && <InlineValidation message={invalidMessage} />}
	</div>
}

export default Input;
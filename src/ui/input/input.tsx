import classes from './input.module.scss';

function Input({label, size, ...props}: any) {
	return <div className={classes.inputContainer}>
		<label className={classes.label}>{label}</label>
		<input className={[classes.input, classes[size || 'default']].join(' ')} {...props} />
	</div>
}

export default Input;
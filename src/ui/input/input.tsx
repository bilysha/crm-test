import classes from './input.module.scss';

function Input({label, theme, size, ...props}: any) {
	return <div className={classes.inputContainer}>
		<label className={classes.label}>{label}</label>
		<input className={[classes.input, classes[theme || 'primary'], classes[size || 'default']].join(' ')} {...props} />
	</div>
}

export default Input;
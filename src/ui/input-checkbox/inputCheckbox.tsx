import classes from './inputCheckbox.module.scss';

function InputCheckbox({label, ...props}: any) {
	return <div className={classes.checkboxContainer}>
		<input type="checkbox" className={classes.checkbox} {...props} />
		<label htmlFor={props.id}>{label}</label>
	</div>
}

export default InputCheckbox;

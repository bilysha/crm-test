import classes from './textarea.module.scss';

function Textarea({label, ...props}: any) {
	return <div className={classes.textareaContainer}>
		<label className={classes.label}>{label}</label>
		<textarea className={classes.textarea} {...props} rows="4"/>
	</div>
}

export default Textarea;
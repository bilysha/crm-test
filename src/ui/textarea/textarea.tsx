import classes from './textarea.module.scss';

function Textarea({label, uiStyle, ...props}: any) {
	return <div className={classes.textareaContainer}>
		<label className={classes.label}>{label}</label>
		<textarea className={[classes.textarea, classes[uiStyle || 'primary']].join(' ')} rows="4" {...props} />
	</div>
}

export default Textarea;
import classes from './inlineValidation.module.scss';

function InlineValidation({message}: any) {
	return <div className={classes.inlineValidation}>
		<span className={classes.inlineValidationMessage}>{message}</span>
	</div>
}

export default InlineValidation;
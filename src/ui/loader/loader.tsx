import classes from './laoder.module.scss';

function Loader() {
	return <div className={classes.loaderContainer}>
		<div className={classes.loaderInner}>
			<div className={classes.loaderRing}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	</div>
}

export default Loader;
import classes from './buttonIcon.module.scss';

function ButtonIcon({children, ...props}: any) {
	return <button className={classes.buttonIcon} {...props}>{children}</button>
}

export default ButtonIcon;
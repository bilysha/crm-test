import classes from './buttonIcon.module.scss';

function ButtonIcon({children, accent, ...props}: any) {
	return <button className={[classes.buttonIcon, classes[accent || 'regular']].join(' ')} {...props}>{children}</button>
}

export default ButtonIcon;
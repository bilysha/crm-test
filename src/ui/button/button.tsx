import classes from './button.module.scss';

function Button({children, theme, ...props}: any) {
	return <button className={[classes.button, classes[theme || 'primary']].join(' ')} {...props}>{children}</button>
}

export default Button;
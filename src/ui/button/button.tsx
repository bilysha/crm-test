import classes from './button.module.scss';

function Button({children, size, theme, ...props}: any) {
	return <button className={[classes.button, classes[theme || 'primary'], classes[size || 'default']].join(' ')} {...props}>{children}</button>
}

export default Button;
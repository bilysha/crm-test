import classes from './buttonLink.module.scss';

function ButtonLink({children, size, theme, ...props}: any) {
	return <button className={[classes.buttonLink, classes[size || 'regular'], classes[theme || 'primary']].join(' ')} {...props}>{children}</button>
}

export default ButtonLink;

import classes from './buttonIcon.module.scss';

function capitalizeFirstLetter(str: string) {
	return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
  }

function ButtonIcon({children, accent, ...props}: any) {
	return <button className={[classes.buttonIcon, classes[`accent${capitalizeFirstLetter(accent)}`]].join(' ')} {...props}>{children}</button>
}

export default ButtonIcon;
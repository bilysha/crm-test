import classes from './slideout.module.scss';
import {MdClose} from '@react-icons/all-files/md/MdClose';
import ButtonIcon from 'ui/button-icon/buttonIcon';
import {useState} from 'react';

function Slideout({children, heading, setVisibility}: any) {
	const [innerModalClasses, setInnerModalClasses] = useState([classes.crmSlideoutInner] as any);
	const onCloseButtonClick = () => setVisibility(false);

	setTimeout(() => {
		setInnerModalClasses([...innerModalClasses, classes.active]);
	})

	return <div className={classes.crmSlideout}>
		<div className={innerModalClasses.join(' ')}>
			<div className={classes.crmSlideoutHeading}>
				<h3>{heading}</h3>
				<ButtonIcon onClick={onCloseButtonClick}><MdClose /></ButtonIcon>
			</div>
			<div className={classes.crmSlideoutContent}>{children}</div>
		</div>
	</div>
}

export default Slideout;
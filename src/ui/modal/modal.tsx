import classes from './modal.module.scss';
import {MdClose} from '@react-icons/all-files/md/MdClose';
import ButtonIcon from 'ui/button-icon/buttonIcon';

function Modal({children, heading, setVisibility}: any) {
	const onCloseButtonClick = () => setVisibility(false);

	return <div className={classes.crmModal}>
		<div className={classes.crmModalInner}>
			<div className={classes.crmModalHeading}>
				<h3>{heading}</h3>
				<ButtonIcon onClick={onCloseButtonClick}><MdClose/></ButtonIcon>
			</div>
			<div className={classes.crmModalContent}>{children}</div>
		</div>
	</div>
}

export default Modal;
import {MdClose} from '@react-icons/all-files/md/MdClose';
import ButtonIcon from 'ui/button-icon/buttonIcon';
import classes from './messageInpage.module.scss';

function MessageInpage({messages, condition, setCondition}: any) {
	const onCloseClicked = () => setCondition({});

	return <div className={classes.messageInpageContainer}>
		{
			condition
				? <div className={classes.messageInpage}>
					<span>
						{
							messages.map((message: string) => <span className={classes.message}>{message}</span>)
						}
					</span>
					<ButtonIcon accent="error" onClick={onCloseClicked}><MdClose /></ButtonIcon>
				</div>
				: ''
		}
	</div>
}

export default MessageInpage;

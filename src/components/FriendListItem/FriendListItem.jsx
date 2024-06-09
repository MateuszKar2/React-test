import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const colorRed = <div style={{color:"red"}}/>
const colorGreen = <div style={{color:"green"}}/>

const FriendListItem = ({ avatar, name, isOnline}) => {

    return (
            <li className={css.item}>
                <span className={css.status}>
                    {{isOnline} === true ? colorGreen : colorRed}
                </span>
                <img 
                    className={css.avatar} 
                    src={avatar}
                    alt="User avatar" 
                    width="48" 
                />
                <p className={css.name}>{name}</p>
            </li>
    )
}

export default FriendListItem;

PropTypes.FriendListItem = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.string
}
import FriendListItem from "components/FriendListItem/FriendListItem";
import PropTypes from 'prop-types'

const FriendList = ({friends}) => {

    return(
        <ul>
            {friends.map(({avatar, name, isOnline, id}) => (
                <FriendListItem
                avatar = {avatar}
                name = {name}
                isOnline={isOnline}
                key={id}
                />
            ))}
        </ul>
    )
}

export default FriendList;

FriendList.prototype = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number,
    })),
};
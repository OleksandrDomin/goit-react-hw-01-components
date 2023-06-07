
import PropTypes from "prop-types";
import css from "./FriendList.module.css"

function FriendList({friends}) {
    return (
<ul className={css.friend_list}>
            {friends.map(friends => (
            <li key={friends.id} className={css.item}>
            <span className={friends.isOnline ? css.status_online : css.status_offline }></span>
            <img className={css.avatar} src={friends.avatar} alt={friends.name} width="80" />
<p className={css.name}>{friends.name}</p></li>))}       
</ul>
)
};

FriendList.protoType = {
    id:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired
};


export default FriendList;
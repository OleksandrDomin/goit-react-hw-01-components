import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

function FriendListItem({id, isOnline, avatar, name}) { 
    return (
 <li className={css.item} key={id}>
            <span className={isOnline ? css.status_online : css.status_offline }></span>
            <img className={css.avatar} src={avatar} alt={name} width="80" />
<p className={css.name}>{name}</p></li>
    )
};

FriendListItem.protoType = {
    id:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired
};


export default FriendListItem;
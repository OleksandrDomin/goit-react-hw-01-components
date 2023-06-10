
import PropTypes from "prop-types";
import css from "./FriendList.module.css"
import FriendListItem from "../friendListItem/FriendListItem";

function FriendList({friends}) {
    return (
        <>
        <ul className={css.friend_list}>
        {friends.map(friend =>
        <FriendListItem key={friend.id} {...friend} />
        )}
        </ul> 
        </>)
};

FriendList.protoType = {
friends: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired }))
};


export default FriendList;
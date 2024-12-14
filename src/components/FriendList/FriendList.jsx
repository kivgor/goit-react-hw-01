// import clsx from "clsx";
import css from "./FriendList.module.css";

import FriendListItem from '../FriendListItem/FriendListItem'

export default function FriendList(friends) {
    //  console.log(friends.friends);
    
    
  return (
    <ul className={css.list}>
      {friends.friends.map(friend => (
        <li key={friend.id}><FriendListItem {...friend}/></li>
      ))}
    </ul>
 
  );
};

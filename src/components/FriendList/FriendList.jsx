import css from "./FriendList.module.css";
import FriendListItem from '../FriendListItem/FriendListItem'

export default function FriendList(props) {
        
  return (
    <ul className={css.list}>
      {props.friends.map(friend => (
        <li key={friend.id}><FriendListItem {...friend}/></li>
      ))}
    </ul>
  );
};

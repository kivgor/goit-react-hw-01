import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline, id }) {
    return (
        <div className={css.card}>
            <img className={css.img} src={avatar} alt="Avatar" width="48" />
            <p className={css.textName}>{name}</p>
            <p>Friend status</p>
        </div>
    );
};
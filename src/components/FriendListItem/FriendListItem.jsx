import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name = 'Incognito', isOnline}) {
    return (
        <div className={css.card}>
            <img className={css.img} src={avatar} alt="Avatar" width="48" />
            <p className={css.textName}>{name}</p>
            <p className={clsx(css.status, isOnline ? css.green : css.red)}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>
    );
};
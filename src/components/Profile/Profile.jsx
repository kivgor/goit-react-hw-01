import clsx from "clsx";
import css from "./Profile.module.css";
export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={css.card}>
            <div className={css.imgThumb}>
                <img className={css.img}
                    src={image}
                    alt="User avatar"
                />
                <p className={clsx(css.textBold, css.textBig)}>{name}</p>
                <p className={css.textGrey}>@{tag}</p>
                <p className={css.textGrey}>{location}</p>
            </div>

            <ul className={css.list}>
                <li className={clsx(css.item, css.clearLeftBorderRadius)}>
                    <span>Followers </span>
                    <span className={css.textBold}>{stats.followers}</span>
                </li>
                <li className={css.item}>
                    <span>Views </span>
                    <span className={css.textBold}>{stats.views}</span>
                </li>
                <li className={clsx(css.item, css.clearBorderRight, css.clearRightBorderRadius)}>
                    <span>Likes </span>
                    <span className={css.textBold}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};


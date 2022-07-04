import styles from "./banner.module.css";

const Banner = ({mainTitle, subTitle, description}) => {
    return(
		<div className={styles["banner"]}>
      <div className="max-width">
        <div className={styles["banner-contents"]}>
            <p className={styles["sub-text"]}> {mainTitle} </p>
            <p className={styles["main-text"]}> {subTitle} </p>
            <p className={styles["description"]}>
                {description}
            </p>
        </div>
      </div>
    </div>
    );
}

export default Banner;
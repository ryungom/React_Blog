import styles from "./header.module.css";
import "./button.css"
import Write from "../../assets/icon-modify-white.svg";
import Logout from "../../assets/icon-logout.svg";

const Logined = ({profileImg, setLogin}) => {
    return (
        <ul>
            <li className={styles["profile-img"]} >
                <a href="#">
                    <img src={profileImg} alt="My Page" />
                </a>
            </li>
            <li>
                <a href="#" className={`${"button"} ${styles["button"]}`}>
                    <img src={Write} alt="" />
                    <span>Write</span>
                </a>
            </li>
            <li>
                <button className={`${"button white"} ${styles["button"]}`} onClick={() => {
                    setLogin(false);
                }}>
                    <img src={Logout} alt="" />
                    <span>Logout</span>
                </button>
            </li>
        </ul>
    );
}

export default Logined;
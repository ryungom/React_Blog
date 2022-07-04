import styles from "./header.module.css";
import "./button.css"
import Login from "../../assets/icon-login.svg";
import Register from "../../assets/icon-register.svg";

const Logouted = ({setLogin}) => {
    return (
        <ul>
            <li>
                <a href="#"
                className={`${"button gray"} ${styles["button"]}`}
                onClick={() => {
                    setLogin(true);
                }}>
                    <img src={Login} alt="" />
                    <span>Login</span>
                </a>
            </li>
            <li className="only-pc">
                <a href="#" className={`${"button gray"} ${styles["button"]}`}>
                    <img src={Register} alt="" />
                    <span>Register</span>
                </a>
            </li>
        </ul>
    );
}

export default Logouted;
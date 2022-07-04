import styles from "./header.module.css";
import Logined from "./Logined";
import Logouted from "./Logouted";

import Logo from "../../assets/Logo.svg";

import {useState} from "react";
import { Link } from "react-router-dom";

const Header = ({profileImg}) => {

    const [login, setLogin] = useState(false);

    return(
    <header>
        <div className={`${styles["max-width"]} ${"max-width"}`}>
            <h1>
                <Link to=".">
                    <img src={Logo} alt="My Blog" />
                </Link>
            </h1>
            {login
            ? <Logined profileImg={process.env.PUBLIC_URL+profileImg} setLogin={setLogin}/>
            : <Logouted setLogin={setLogin} />}
        </div>
    </header>
    );
}

export default Header;
import styles from "./about.module.css";

import Github from "../../assets/Github.svg";
import Twitter from "../../assets/Twitter.svg";
import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";

const snsSvgArr = [Github, Twitter, Facebook, Instagram];

const About = ({user}) => {
    return(
        <aside className={styles["about"]}>
                <h2>About Me</h2>
                <img src={process.env.PUBLIC_URL+user.profileImg} alt="" className={styles["user-profile"]} />
                <p className={styles["user-name"]}>{user.name}</p>
                <p className={styles["user-description"]}>{user.userInfo}</p>
                <h3>Categories</h3>
                <ul className={styles["categories"]}>
                    {
                        user.category.map( (x, i) => <li key={i}><a href="#">{x}</a></li>)
                    }
                </ul>
                <h3>Follow</h3>
                <ul className={styles["sns"]}>
                    {
                        Object.entries(user.sns).map((x, i) => {
                            return (
                                <li key={i}>
                                    <a href={x[1]}>
                                        <img
                                            src={snsSvgArr[i]}
                                            alt={x[0]}
                                        />
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
            </aside>
    );
}

export default About;
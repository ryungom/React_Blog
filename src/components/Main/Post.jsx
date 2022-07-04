import styles from "./post.module.css";
import "./category.css";
import "./author.css";

import { Link } from "react-router-dom";

const Post = ({thumbnail, title, mainBg, category, profileImg, contents, userName, created}) => {
    return(
        <Link to="./PostView" className={styles["post"]}>
            <article>
                <img src={process.env.PUBLIC_URL+thumbnail} alt="" />
                <div className={styles["contents-wrap"]}>
                    {/* <!-- category --> */}
                    <dl className="category">
                        <dt className="a11y-hidden">Category</dt>
                        {
                            category.map( (x, i) => <dd key={i}>{x}</dd>)
                        }
                    </dl>
                    {/* <!-- //category --> */}

                    <h3>{title}</h3>

                    {/* <!-- author --> */}
                    <dl className="author-wrap">
                        <dt className="a11y-hidden">Author</dt>
                        <dd className="author"><img src={process.env.PUBLIC_URL+profileImg} alt="" /> Chilli</dd>
                        <dt className="a11y-hidden">Created</dt>
                        <dd className="created">{created}</dd>
                    </dl>
                    {/* <!-- //author --> */}

                    <p className={styles["post-description"]}>
                        {contents[0].text}
                    </p>
                </div>
            </article>
        </Link>
    );
}

export default Post;
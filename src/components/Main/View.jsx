// import "../Header/button.css";
import "./author.css";
import "./category.css";
import "./wrapbox.css";
import styles from "./view.module.css";

import { Link } from "react-router-dom";

const View = () => {
    return(
        <div className={`${styles["view"]} ${"view"}`}>
			<div className="max-width">
				<section className={`${styles["wrap-box"]} ${"wrap-box"}`}>
					<div className="inner">
						{/* <!-- author --> */}
						<dl className={`${styles["author-wrap"]} ${"author-wrap"}`}>
							<dt className="a11y-hidden">Author</dt>
							<dd className="author"><img src={process.env.PUBLIC_URL+"/assets/profile.jpg"} alt="" /> Chilli</dd>
							<dt className="a11y-hidden">Created</dt>
							<dd className="created">2022.05.25</dd>
						</dl>
						{/* <!-- //author --> */}

						{/* <!-- category --> */}
						<dl className={`${styles["category"]} ${"category"}`}>
							<dt className="a11y-hidden">Category</dt>
							<dd>Life</dd>
							<dd>Style</dd>
						</dl>
						{/* <!-- //category --> */}
						<div className={styles["title-wrap"]}>
							<h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
							<button className="btn-like">Like</button>
						</div>
						<hr />
						<div className={styles["view-contents"]}>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
								facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
								dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
								nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
								amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
								cum incidunt repudiandae vel.
							</p>
							<img src={process.env.PUBLIC_URL+"/assets/post-background6.jpg"} alt="" />
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
								facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
								dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
								nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
								amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
								cum incidunt repudiandae vel.
							</p>
						</div>
						<div className="btn-group">
							<a href="/" className="btn-modify">
								<span className="a11y-hidden">modify</span>
							</a>
							<button type="button" className="btn-delete">
								<span className="a11y-hidden">delete</span>
							</button>
						</div>
						<Link to=".." className={`${styles["btn-back"]} ${"btn-back"}`}>
							<span className="a11y-hidden">Back</span>
						</Link>
					</div>
				</section>
			</div>
		</div>
    );
}

export default View;
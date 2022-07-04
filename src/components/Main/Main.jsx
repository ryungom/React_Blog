import styles from "./main.module.css";
import Posts from "./Posts";
import About from "./About";

const Main = ({data}) => {
    return(
		<main>
			{/* <!-- posts --> */}
			<div className={`${styles["max-width"]} ${"max-width"}`}>
				<h2 className="a11y-hidden">Post</h2>
				<Posts posts={data.posts} />
				{/* <!-- //posts --> */}
				{/* <!-- about --> */}
				<About user={data.users[0]} />
				{/* <!-- //about --> */}
			</div>
		</main>
    );
};

export default Main;
import styles from '../styles/Wordpress.module.css'

// posts will be populated at build time by getStaticProps()
function Blog({ posts }) {
	return (
		<div>
			<h1>Wordpress</h1>
			<div className={styles.posts}>
				{posts.map((post) => (
					<div className={styles.post}>
						<h2>
							<a href={post.link}>{post.title.rendered}</a>
						</h2>
						{/* <p className={styles.content}>{post.content.rendered}</p> */}
						{/* <p className={styles.content} dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p> */}
						<p className={styles.content}>{post.yoast_head_json.description}</p>
					</div>
				))}
			</div>
		</div>
	)
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	const res = await fetch('https://366.fabricegeib.com/wp-json/wp/v2/posts/')
	const posts = await res.json()

	console.log(posts)

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			posts,
		},
	}
}

export default Blog
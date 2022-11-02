// This function gets called at build time
export default function Post({ post }) {
	// Render post...
	return (
		<div className="post">
			<h1>
				{post.id} - {post.title}
			</h1>
		</div>
	);
}

export async function getStaticPaths() {
	// Call an external API endpoint to get posts
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const posts = await res.json();

	// console.log('pages/posts/[id] = ', posts);

	// Get the paths we want to pre-render based on posts
	const paths = posts.map((post) => ({
		// toString() to remove the error "Error: A required parameter (id) was not provided as a string in getStaticPaths for /posts/[id] - The id is not a string but a number. You need to convert it to string."
		params: { id: post.id.toString() },
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
	// params contains the post `id`.
	// If the route is like /posts/1, then params.id is 1
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.id}`
	);
	const post = await res.json();

	console.log('post = ', post)

	// Pass post data to the page via props
	return { props: { post } };
}

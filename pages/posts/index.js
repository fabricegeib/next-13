// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.
export default function Posts({ posts }) {
	return (
		<div>
			<h1>Posts</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						{post.id} - {post.title}
					</li>
				))}
			</ul>
		</div>
	);
}

// This function gets called at build time
export async function getStaticProps() {
	// Call an external API endpoint to get posts
	// const res = await fetch("https://.../posts");
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const resId1 = await fetch(
		"https://jsonplaceholder.typicode.com/posts?userId=1"
	);
	const posts = await res.json();

	// console.log(posts);
	console.log('pages/posts = ', posts);


	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			posts,
		},
	};

	console.log(posts);
}

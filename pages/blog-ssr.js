export default function BlogSSR({ data }) {
	return (
		<div>
			<h1>Blog - getServerSideProps (SSR)</h1>
			<ul>
				{data.map((post) => (
					<li key={post.id}>
						{post.id} - {post.title}
					</li>
				))}
			</ul>
		</div>
	);
}

// This gets called on every request
export async function getServerSideProps() {
	// Fetch data from external API
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
	const data = await res.json();

	// Pass data to the page via props
	return { props: { data } };
}

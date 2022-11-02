// The following function is shared
// with getStaticProps and API routes
// from a `lib/` directory
export async function loadPosts() {
	// Call an external API endpoint to get posts
	const res = await fetch('https://366.fabricegeib.com/wp-json/wp/v2/posts/')
	const posts = await res.json()

	return posts
}
// Generates `/paths/1` and `/paths/2`
export async function getStaticPaths() {
	return {
		paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
		fallback: false, // can also be true or 'blocking'
	}

	// When this is true (in preview environments) don't
	// prerender any static pages
	// (faster builds, but slower initial page load)
	// if (process.env.SKIP_BUILD_STATIC_GENERATION) {
	// 	return {
	// 		paths: [],
	// 		fallback: 'blocking',
	// 	}
	// }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
	return {
		// Passed to the page component as props
		// props: { paths: {} },
		props: { paths: {} },
	}

	console.log('paths = ', paths)
}

export default function Paths({ paths }) {
	return (
		<div>
			<h1>getStaticPaths</h1>
			<p>path : {paths.id}</p>
		</div>
	)
}
import styles from '../styles/Sitemap.module.css'

function Sitemap() {
	return (
		<div>
			<h1>Sitemap</h1>
			<ul>
				<li><a href="/about" className={styles.link}>about</a></li>
				{/* <li><a href="/blog" className={styles.link}>blog</a> (getStaticProps)</li>
				<li><a href="/blog-ssr" className={styles.link}>blog-ssr</a> (getServerSideProps / SSR)</li> */}
				<li><a href="/posts" className={styles.link}>posts</a> (getStaticProps) (SSG)</li>
				<li><a href="/posts/1" className={styles.link}>posts/[id]</a> (getStaticPaths, getStaticProps)</li>
				<li><a href="/getServerSideProps" className={styles.link}>getServerSideProps</a> (SSR)</li>
				<li><a href="/sitemap" className={styles.link}>sitemap</a></li>
			</ul>
		</div>
	);
}

export default Sitemap;

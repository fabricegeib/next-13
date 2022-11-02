import Link from 'next/link'
import styles from '../styles/Sitemap.module.css'

function Sitemap() {
	return (
		<div>
			<h1>Sitemap</h1>
			<ul>
				<li><Link href="/about" className={styles.link}>about</Link></li>
				{/* <li><Link href="/blog-ssg" className={styles.link}>blog</Link> (getStaticProps)</li>
				<li><Link href="/blog-ssr" className={styles.link}>blog-ssr</Link> (getServerSideProps / SSR)</li> */}
				<li><Link href="/posts" className={styles.link}>posts</Link> (getStaticProps) (SSG)</li>
				<li><Link href="/posts/1" className={styles.link}>posts/[id]</Link> (getStaticPaths, getStaticProps)</li>
				<li><Link href="/getServerSideProps" className={styles.link}>getServerSideProps</Link> (SSR)</li>
				<li><Link href="/wordpress" className={styles.link}>wordpress</Link></li>
				<li><Link href="/sitemap" className={styles.link}>sitemap</Link></li>
			</ul>
		</div>
	);
}

export default Sitemap;

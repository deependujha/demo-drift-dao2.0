import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>Demo: Drift-DAO</title>
				<meta charSet="UTF-8" />
				<meta
					name="description"
					content="Demo of Drift-DAO. A unified platform to get updated from all your DAOs."
				/>
				<meta
					name="description"
					content="A platform for the next generation to manage all your DAOs."
				/>
				<meta
					name="keywords"
					content="DAO, DAOs, Drift, Drift-DAO, DAO tooling, DAO platform, tooling, platform, Demo"
				/>
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content="Demo: Drift-DAO" />
				<meta
					name="twitter:description"
					content="A unified platform to get updated from all your DAOs."
				/>
				<meta name="twitter:image" content="/images/logo.jpg" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					property="og:description"
					content="A unified platform to get updated from all your DAOs."
				/>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex justify-center justify-items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-700 to-pink-500">
				<video
					className="my-auto"
					autoPlay
					loop
					controls
					style={{ width: '95vw', height: '95vh', backgroundColor: 'black' }}
				>
					<source src="/drift-dao-demo.mkv" />
				</video>
				{/* <video src="/drift-dao-demo.mkv"></video> */}
			</div>
		</>
	);
}

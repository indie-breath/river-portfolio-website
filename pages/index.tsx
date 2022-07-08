import { Navbar } from '../components/Navbar';
import Head from "next/head"
import Link from "next/link"


const Home = () => {
	return (
		<>
			<Head>
				<title>River's Portfolio Website</title>
			</Head>
			<div className='bg-pink-500'>
				<p className="text-center py-3 px-3 text-6xl">River's Portfolio</p>

				<Navbar />
				<div className="grid place-items-center h-screen border-8 border-slate-300 m-10 bg-red-200">
					<p className="text-slate-300 text-9xl relative text-center">Put Sample Images Here</p>
				</div>

			</div>
		</>
	)
}

export default Home

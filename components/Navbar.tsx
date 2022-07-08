import Link from "next/link";
import React from "react";

export function Navbar({}) {
	return (
		<ul className="sticky top-0 list-none m-0 p-0 overflow-hidden bg-white">
			<li className="float-left"><Link href={'/'}><a className="block text-black text-center py-3 px-5 text-xl hover:bg-purple-200">Home</a></Link></li>
			<li className="float-left"><Link href={'/about'}><a className="block text-black text-center py-3 px-5 text-xl hover:bg-purple-200">About</a></Link></li>
			<li className="float-left"><Link href={'/gallery'}><a className="block text-black text-center py-3 px-5 text-xl hover:bg-purple-200">Gallery</a></Link></li>
			<li className="float-right"><Link href={'/commission'}><a className="block text-black text-center py-3 px-5 text-xl hover:bg-purple-200">Request a Commission</a></Link></li>
		</ul>
	);
}
  
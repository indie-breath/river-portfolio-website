import Head from "next/head";
import { Navbar } from "../../components/Navbar";

const About = () => {
	return (
		<>
			<Head>
				<title>About Me</title>
			</Head>

			<div className="bg-pink-500">
				<p className="text-center py-3 px-3 text-6xl">About Me</p>
				
				<Navbar />

				<div className="flex flex-col h-screen items-center my-10 mx-10 bg-red-200">
					<p className="align-text-top text-center text-xl my-20 w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet nibh non libero aliquet, iaculis molestie erat dapibus. Maecenas dignissim arcu nibh, vel sodales enim placerat a. Ut at urna pharetra, tristique felis in, interdum metus. Aenean vulputate lobortis ligula, sed aliquam mauris posuere non. Duis rutrum velit id tristique varius. Vivamus ut gravida tellus. Fusce eget nisi varius, bibendum orci sit amet, vulputate ante. Proin ultrices ipsum et odio luctus, a aliquet neque semper. Integer non convallis sem. Praesent consequat, mauris ac porta faucibus, dolor risus mattis neque, eget volutpat nunc purus eu quam. Integer cursus nibh vel purus lacinia rhoncus. Curabitur velit libero, pellentesque bibendum aliquam id, ullamcorper non tellus.

Phasellus non fringilla lacus. Nunc nec justo eu orci egestas posuere quis eget mauris. Vivamus placerat tincidunt leo, ut scelerisque massa ultrices quis. Nulla a arcu sagittis, maximus purus vitae, tristique tellus. Nunc ultricies, lacus non maximus gravida, purus lacus porta nibh, vitae vulputate purus elit sed ipsum. Duis quis metus eu mi accumsan sollicitudin a sed ante. Nam et lacinia nulla. Phasellus in lacinia nulla, ut vehicula nibh. Cras vel aliquam mauris. Sed lacinia risus nisi, ut efficitur sapien laoreet a.

Donec pellentesque, enim ut hendrerit laoreet, justo diam sagittis nisl, sit amet ultrices diam ipsum quis ligula. Nullam ac leo sem. Fusce non bibendum dolor. Ut in justo justo. Suspendisse efficitur enim in justo gravida, vel tincidunt neque interdum. Donec hendrerit justo nisi, vitae scelerisque ligula maximus nec. Donec tempus in ligula vitae tempor. Cras feugiat et urna ut euismod. Fusce et pellentesque risus, id ultricies purus. Mauris sed accumsan lectus. Vivamus elit mi, iaculis quis pulvinar sed, sollicitudin tincidunt orci. Duis euismod, ligula nec facilisis pretium, neque nisl rhoncus lacus, non placerat neque felis non orci.

Nulla scelerisque at erat luctus fringilla. Duis maximus velit velit, malesuada condimentum ex scelerisque sed. In hac habitasse platea dictumst. Etiam at leo in metus facilisis elementum at ac nibh. Aenean euismod in orci nec semper. Proin condimentum velit nec pharetra vehicula. Nam ut turpis nunc. Donec eu est et magna tincidunt commodo eget ut justo. Nullam auctor justo vel leo congue, sit amet elementum justo consequat. Nulla dignissim eros turpis. Morbi sed luctus tortor. Aenean lobortis elit in ex rutrum, a pharetra leo feugiat.

Integer cursus convallis quam at porta. Sed rhoncus turpis nec enim fringilla hendrerit. Integer tempus, purus ac ultrices placerat, felis libero ultricies sapien, non aliquam nulla nulla eu lacus. Nullam vel urna accumsan, eleifend orci vitae, luctus est. Phasellus auctor felis non semper pellentesque. Suspendisse aliquet non lorem eu pharetra. Aenean blandit enim vitae magna blandit dapibus. Nunc quam ex, malesuada in mattis non, fringilla a neque. Donec congue ligula ultrices ipsum euismod congue.</p>
				</div>
			</div>
		</>
	)
}

export default About;
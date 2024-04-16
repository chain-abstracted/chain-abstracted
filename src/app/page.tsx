import { Button } from "@/components/ui/button";
import logo from "@/public/cap_pfp.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap lg:h-[100vh] w-100% gap-10 lg:gap-20">
      <div className="w-full lg:w-1/2 px-4 flex flex-col justify-center lg:pl-[20%] gap-3">
        <Image
          src={logo}
          alt="Picture of the author"
          className="w-[40%] mx-auto lg:mx-0"
        />
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Chain Abstracted Podcast
        </h1>
        <h3 className="text-2xl font-semibold tracking-tight">
          Exploring the world of chain abstraction and blockchain technologies.
        </h3>
        <p className="text-justify">
          Welcome to <span className="font-bold">Chain Abstracted</span>, where
          we delve into the intricacies of chain abstraction and other
          blockchain technologies, including how NEAR Protocol is pioneering a
          coherent, multi-chain experience for users and developers alike.
          Hosted by Jared (Ready Layer One) and Altan Tutar, each episode brings
          you insightful discussions with industry leaders and innovators. Join
          us as we welcome key guests such as Illia Polosukhin (Co-Founder of
          NEAR Protocol), Zaki Manian (Co-Founder of Sommelier Finance), and
          Kendall Cole (Co-Founder of Proximity Labs).
        </p>
        <p className="text-justify">
          Whether {"you're"} a blockchain enthusiast, a developer, or just
          curious about the future of decentralized technology, Chain Abstracted
          is your gateway to understanding the impact and potential of chain
          abstraction and other technologies in the evolving world of
          blockchain.
        </p>
      </div>
      <div className="w-full lg:w-1/2 px-4 flex flex-col justify-center lg:pr-[20%] gap-3 mb-10">
        <iframe
          src="https://open.spotify.com/embed/album/18NOKLkZETa4sWwLMIm0UZ?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <hr />
        <Button>Listen on Spotify</Button>
        <Button>Listen on Apple Podcast</Button>
        <Button>Listen on Google Podcast</Button>
      </div>
    </div>
  );
}

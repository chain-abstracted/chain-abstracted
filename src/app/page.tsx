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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat
          purus, lobortis a ex vitae, dignissim convallis lorem. Cras et metus
          sed eros ullamcorper gravida. Donec vel massa purus. Phasellus semper
          augue a eleifend volutpat. Interdum et malesuada fames ac ante ipsum
          primis in faucibus.
        </p>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat
          purus, lobortis a ex vitae, dignissim convallis lorem. Cras et metus
          sed eros ullamcorper gravida. Donec vel massa purus. Phasellus semper
          augue a eleifend volutpat. Interdum et malesuada fames ac ante ipsum
          primis in faucibus.
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

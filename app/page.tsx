import Card from "@/components/Card";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="flex items-center space-x-6">
        <div className="rounded-full bg-gradient-to-tl from-purple-700/60 to-rose-400/60 shadow-lg p-[3px] ring-[5px] ring-purple-500/10">
          <div className="rounded-full p-px h-[70px] w-[70px]">
            <Image
              src={"/images/profile-pic2.png"}
              width={70}
              height={70}
              alt='profile image'
            />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-rose-100/80 sm:text-4xl">Pawan</h1>
          <h2 className="align-middle text-lg leading-6 text-rose-100/50">Fullstack developer</h2>
        </div>
      </div>
      <p className="mt-7 mb-[4rem] text-base lg:text-xl text-rose-100/90 sm:mt-8">
        Hello everyone! I'm a self-taught full-stack developer. Here I document my journey by sharing what I learn along with useful tips and insights. Join me as we learn and grow together!

      </p>
      <div>
      <h1 className="mt-16 text-rose-100/80 font-semibold text-xl">Feature Projects</h1>
      <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-6 tech">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
      
     </div>
      <div>
        <h1 className="mt-16 text-rose-100/80 font-semibold text-xl">Feature blogs</h1>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>




    </div>
  );
}
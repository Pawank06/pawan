import ProjectCard from "@/components/ProjectCard"

const ProjectPage = () => {
  return (
    <div className="">
      <h1 className=" text-xl font-semibold text-rose-100/50">Projects that I built to explore new technologies.</h1>
      <div className="grid gap-5 mt-10">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </div>
  )
}

export default ProjectPage

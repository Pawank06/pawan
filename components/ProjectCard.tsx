import Link from "next/link"

const ProjectCard = () => {
    return (
        <div className="">
            <Link href='/' className="block overflow-hidden rounded-2xl bg-white/5 p-7 card-container">
                <h3 className="text-xl text-rose-100/90 transition duration-300 line-clamp-2 hover:text-rose-100/90">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi dolorum delectus animi atque?</h3>
                
                <p className="mt-10 text-md text-rose-100/70 line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis modi, laudantium, eum quas saepe obcaecati debitis temporibus asperiores qui, perferendis culpa earum molestias libero officiis dolor esse quae a. Sit!.</p>
            </Link>
        </div>
    )
}

export default ProjectCard

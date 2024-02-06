import Link from "next/link"


const Card = () => {
    return (
        <div className="mt-10">
            <Link href='/' className="block overflow-hidden rounded-2xl bg-white/5 p-7 card-container">
                <h3 className="text-xl  text-rose-100/90 transition duration-300 line-clamp-2 hover:text-rose-100/90">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi dolorum delectus animi atque?</h3>
                <div className="flex flex-wrap space-x-2 text-base text-rose-100/50">
                    <div>Feb 6, 2024</div>
                    <div className="text-rose-100/30">·</div>
                    
                </div>
                <p className="mt-4 text-lg text-rose-100/70 line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis modi, laudantium, eum quas saepe obcaecati debitis temporibus asperiores qui, perferendis culpa earum molestias libero officiis dolor esse quae a. Sit!.</p>
            </Link>
        </div>
    )
}

export default Card

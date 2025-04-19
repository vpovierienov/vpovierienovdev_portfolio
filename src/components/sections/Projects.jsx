export const Projects = () => {
  return ( 
    <section 
        id="projects"
        className="min-h-screen flex  items-center justify-center py-20" data-aos="fade-right"
    >
        <div className="max-w-5xl mx-auto px-4" data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-right">
                {/*Project webiste by Vittello - 1*/}
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                    <h3 className="text-xl font-bold mb-2" data-aos="fade-right">Website - 1 </h3>
                    <p className="text-gray-400 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, quaerat?</p>
                    <div>
                    {["HTML", "CSS", "JavaScript"].map((tech, key) =>(
                        <span 
                        key={key}
                        className="bg-blue-500/10  text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                            {tech}
                        </span>
                    ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a 
                        href="#"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                        >View Project - </a>
                    </div>
                </div>

                {/*Project website - 2 by Vittello*/}

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Website - 2 </h3>
                    <p className="text-gray-400 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, quaerat?</p>
                    <div>
                    {["HTML", "CSS", "JavaScript"].map((tech, key) =>(
                        <span 
                        key={key}
                        className="bg-blue-500/10  text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                            {tech}
                        </span>
                    ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a 
                        href="#"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                        >View Project - </a>
                    </div>
                </div>

                {/*Project website - 3 by Vittello*/}

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Website - 3 </h3>
                    <p className="text-gray-400 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, quaerat?</p>
                    <div>
                    {["HTML", "CSS", "JavaScript"].map((tech, key) =>(
                        <span 
                        key={key}
                        className="bg-blue-500/10  text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                            {tech}
                        </span>
                    ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a 
                        href="#"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                        >View Project - </a>
                    </div>
                </div>

                {/*Project website - 4 by Vittello*/}

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Website - 4 </h3>
                    <p className="text-gray-400 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, quaerat?</p>
                    <div>
                    {["HTML", "CSS", "JavaScript"].map((tech, key) =>(
                        <span 
                        key={key}
                        className="bg-blue-500/10  text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                            {tech}
                        </span>
                    ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a 
                        href="#"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                        >View Project - </a>
                    </div>
                </div>

                {/*Project website - 5 by Vittello*/}

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Website - 5 </h3>
                    <p className="text-gray-400 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, quaerat?</p>
                    <div>
                    {["HTML", "CSS", "JavaScript"].map((tech, key) =>(
                        <span 
                        key={key}
                        className="bg-blue-500/10  text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                            {tech}
                        </span>
                    ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a 
                        href="#"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                        >View Project - </a>
                    </div>
                </div>

                {/*Project website - 6 by Vittello*/}

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Website - 6 </h3>
                    <p className="text-gray-400 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, quaerat?</p>
                    <div>
                    {["HTML", "CSS", "JavaScript"].map((tech, key) =>(
                        <span 
                        key={key}
                        className="bg-blue-500/10  text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                            {tech}
                        </span>
                    ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a 
                        href="#"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                        >View Project - </a>
                    </div>
                </div>

                {/*Project website - 7 by Vittello*/}

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Website - 7 </h3>
                    <p className="text-gray-400 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, quaerat?</p>
                    <div>
                    {["HTML", "CSS", "JavaScript"].map((tech, key) =>(
                        <span 
                        key={key}
                        className="bg-blue-500/10  text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                            {tech}
                        </span>
                    ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a 
                        href="#"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                        >View Project - </a>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

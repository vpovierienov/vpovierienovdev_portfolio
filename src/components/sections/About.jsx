export const About = () => {
   
  const frontendSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "TailwindCSS"
  ]

  const backendSkills = [
    "Node.js",
  ]

  

  return (
    <section 
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
    >
        <div className="max-w-3xl mx-auto px-4" aos="fade-up">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right text-center">About Me</h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6 text-center">
                    Frontend developer with good critical thinking.
                    Experience in bulding UI website and applications.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                        {frontendSkills.map((tech,key)=> (
                            
                            <span 
                            key={key}
                            className="bg-blue-500/10  text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                {tech}
                            </span>
                        ) )}
                         </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                        {backendSkills.map((tech,key)=> (    
                            <span 
                            key={key}
                            className="bg-blue-500/10  text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                {tech}
                            </span>
                        ) )}
                         </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                       <li><strong>Bachelor </strong>- Academy of Law Ukaine 
                       (2012-2017)
                       </li>
                       <li><strong>Magister </strong>- National Academy Yaroslav Mudriy
                       (2017-2019)
                       </li>
                       <li><strong> Integrations Kurse B1 (Germany) </strong>
                       (2022-2025)
                       </li> 
                       <li><strong>Additional Courses:</strong> MateAcademy Frontend developer 
                        (2022-2025)
                       </li>
                    </ul>
                </div>

                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Work Experience</h3>

                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold"> IT specialist</h4>
                            <p>
                            Website Moderation: Made HTML content
                            updates, layout improvements for an
                            optimized corporate website.
                            Technical Support: Configured Zabbix
                            monitoring of servers and network devices
                            with MySQL data base.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold"> Middle IT specialist</h4>
                            <p>
                                update content and fix bugs in HTML layout to improve user experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

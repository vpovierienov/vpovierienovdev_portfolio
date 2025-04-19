export const Contact = () => {
  return  <section
    id="contact"
    className="min-h-screen flex items-center justify-center py-20"
  >
    <div className="px-4 w-2/3">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right text-center">GeT In Touch</h2>
        <form className="space-y-6"> 
            <div className="relative">
                <input 
                type="text" 
                id="name" 
                name="name" 
                required
                placeholder="Your Name" 
                className="w-full bg-white/5 border border-white/10 rouded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
            </div>

            <div className="relative">
                <input 
                type="email" 
                id="email" 
                name="email" 
                required
                placeholder="example@gmail.com" 
                className="w-full bg-white/5 border border-white/10 rouded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
            </div>

            <div className="relative">
                <textarea 
                id="message" 
                name="message"
                rows={5} 
                required
                placeholder="Your message" 
                className="w-full bg-white/5 border border-white/10 rouded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition realtive overflow-hidden  hover:text-blue-700"
            >
                Send Message
            </button>
        </form>
    </div>

  </section>
}
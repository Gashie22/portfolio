import { motion } from "framer-motion";

export default function Example() {
  return (
    <div id="why" className="bg-white">
      <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ y: 20, scale: 0, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Why Hire me? 🤔
          </motion.h2>
          <motion.p
            initial={{ y: 20, scale: 0, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1.2 }}
            className="mx-auto mt-6 max-w-xl lg:text-justify text-lg leading-8 text-gray-600"
          >
            You should hire me for my extensive knowledge and experience in web
            development. With a strong command of various programming languages,
            frameworks, and databases, I am equipped to tackle diverse projects.
            I am committed to delivering high-quality, scalable, and visually
            captivating websites that meet clients' unique needs. My attention
            to detail, problem-solving skills, and dedication to client
            satisfaction make me a valuable asset for any web development
            project.
          </motion.p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <motion.a
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 10px #8082ea" }}
              transition={{ duration: 0.3 }}
              whileTap={{ scale: 0.9 }}
              href="https://api.whatsapp.com/send?phone=+263784739341&text=Hello%20Gashirai%2C%20I%20would%20like%20to%20hire%20you%20for%20a%20project."
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact Me
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}

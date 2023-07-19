import { motion } from "framer-motion";
import { useState } from "react";
const frequencies = [
  { value: "monthly", label: "Monthly" },
  { value: "annually", label: "Annually" },
];
const tiers = [
  {
    name: "Project Management System",
    id: "tier-scale",

    featured: false,
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Project Tracking System",
    id: "tier-starter",
    featured: true,

    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    name: "Social Media Scrapper",
    id: "tier-growth",
    featured: false,
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

// @ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <div id="Projects" className="isolate overflow-hidden">
      <div className="flow-root bg-gray-900 pt-24 pb-16 sm:pt-32 lg:pb-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative z-10">
            <h2 className="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-white">
              My Projects
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-white/60">
              I have worked on a number of projects mainly in web development
            </p>
          </div>
          <div className="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
            <svg
              viewBox="0 0 1208 1024"
              aria-hidden="true"
              className="absolute left-1/2 -bottom-48 h-[64rem] translate-y-1/2 -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:bottom-auto lg:-top-48 lg:translate-y-0"
            >
              <ellipse
                cx={604}
                cy={512}
                fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)"
                rx={604}
                ry={512}
              />
              <defs>
                <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div
              className="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10"
              aria-hidden="true"
            />
            {tiers.map((tier) => (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: 0.5 }}
                key={tier.id}
                className={classNames(
                  tier.featured
                    ? "z-10 bg-white shadow-xl ring-1 ring-gray-900/10"
                    : "bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0",
                  "relative rounded-2xl"
                )}
              >
                <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.featured ? "text-gray-900" : "text-white",
                      "text-sm font-semibold leading-6"
                    )}
                  >
                    {tier.name}
                  </h3>

                  <div className="mt-8 flow-root sm:mt-10">
                    <p
                      className={`${
                        tier.featured === true ? "text-black" : "text-white"
                      }`}
                    >
                      {tier.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative bg-gray-50 lg:pt-14">
        <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
          {/* Feature comparison (up to lg) */}
        </div>
      </div>
    </div>
  );
}

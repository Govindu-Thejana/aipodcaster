import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Podcast, Mic, ImageIcon, Server } from "lucide-react";

const services = [
    {
        icon: <Podcast size={40} />,
        title: "Podcast Creation",
        description: "Easily create a podcast by entering the name, selecting an AI voice, and providing a description.",
    },
    {
        icon: <Mic size={40} />,
        title: "AI Voice Generation",
        description: "Convert your text into speech using one of six available AI voices.",
    },
    {
        icon: <ImageIcon size={40} />,
        title: "Thumbnail Generation",
        description: "Generate a thumbnail by providing a prompt or upload your own image.",
    },
    {
        icon: <Server size={40} />,
        title: "Free Podcast Hosting",
        description: "Host your podcast for free after creation, with unlimited storage.",
    },
];

const Services = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
            }
        );

        const section = document.getElementById("services");
        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    };

    return (
        <section className="py-10 bg-bgcolor" id="services">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl text-gradient font-bold text-center mb-12 text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Our Services
                </motion.h2>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 hover:bg-gradient"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="text-center aspect-ratio-1 p-6 pt-10 border border-acolor rounded-lg shadow-lg bg-white hover:shadow-2xl hover:scale-105 hover:bg-gradient-to-r hover:from-scolor transition-all duration-300"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="mb-4 items-center flex text-scolor justify-center"
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            >
                                {service.icon}
                            </motion.div>
                            <h3 className="text-2xl pt-5 font-semibold text-white-1 mb-2">
                                {service.title}
                            </h3>
                            <div className="pt-5">
                                <p className="text-base text-white-3">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
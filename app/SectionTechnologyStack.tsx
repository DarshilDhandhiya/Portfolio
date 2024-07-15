"use client";

import { assets } from '@/constant/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import styles from "./home.module.css";

const technologyStack = [
    {
        name: "JAVA",
        image: assets.home.technologyStack.java,
    },
    {
        name: "Python",
        image: assets.home.technologyStack.python,
    },
    {
        name: "HTML",
        image: assets.home.technologyStack.html,
    },
    {
        name: "CSS",
        image: assets.home.technologyStack.css,
    },
    {
        name: "Javascript",
        image: assets.home.technologyStack.js,
    },
    {
        name: 'Tailwind',
        image: assets.home.technologyStack.tailwind,
    },
    {
        name: "React JS",
        image: assets.home.technologyStack.react,
    },
    {
        name: "Node JS",
        image: assets.home.technologyStack.nodejs,
    },
    {
        name: "Mongo DB",
        image: assets.home.technologyStack.mongodb,
    },
    {
        name: "Node JS",
        image: assets.home.technologyStack.nodejs,
    },
    {
        name: "PHP",
        image: assets.home.technologyStack.php,
    },
    {
        name: "SQL",
        image: assets.home.technologyStack.sql,
    },
    {
        name: "GIT",
        image: assets.home.technologyStack.git,
    },
    {
        name: "GitHub",
        image: assets.home.technologyStack.github,
    },
    {
        name: "AWS",
        image: assets.home.technologyStack.aws,
    },
    {
        name: "figma",
        image: assets.home.technologyStack.figma,
    },
    {
        name: "Canva",
        image: assets.home.technologyStack.canva,
    },
    {
        name: "Photoshop",
        image: assets.home.technologyStack.photoshop,
    },
]

export default function SectionTechnologyStack() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section ref={ref} className={`safe-x-padding ${styles.sectionDistance}`}>
            <div className='text-center'>
                <motion.h2 initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5 }} className={styles.sectionTitle}>Technology Stack</motion.h2>
                <motion.p initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.7 }} className={`${styles.sectionDescription} max-w-[960px] mx-auto`}>I are concerned about security and performance for my client. That&apos;s why I always keep updating and use best technologies in a product</motion.p>
            </div>
            <div className='flex items-center justify-center mt-12'>
                <div className='flex flex-row gap-[50px] max-w-[864px] flex-wrap justify-center items-center'>
                    {technologyStack.map((item, index) => (
                        <div key={index.toString()} className='relative h-full'>
                            <motion.div
                                className="flex justify-center items-center w-[100px] h-[100px] transition-all duration-150 ease-in-out"
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Image
                                    className='w-auto h-[100px]'
                                    src={item.image}
                                    width={0}
                                    height={100}
                                    alt={item.name}
                                />
                                <Link
                                    href={{
                                        pathname: item.officialSite,
                                        query: {
                                            utm_source: 'deri.my.id',
                                            utm_medium: 'campaign',
                                            utm_campaign: 'portfolio'
                                        }
                                    }}
                                    target="_blank"
                                    title={`Figure out about ${item.name}`}
                                >
                                </Link>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div >
        </section >
    )
}

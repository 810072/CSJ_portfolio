"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';
import { getAssetPath } from '../utils/assets';

export default function Portfolio({ dict }) {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div ref={targetRef}>

            {/* --- Navbar (Simple Sticky) --- */}
            <nav className="navbar glass">
                <div className="nav-content">
                    <a href="#" className="logo">CSJ.</a>
                    <div className="nav-links">
                        <a href="#about" className="nav-link">{dict.nav.about}</a>
                        <a href="#skills" className="nav-link">{dict.nav.skills}</a>
                        <a href="#projects" className="nav-link">{dict.nav.projects}</a>
                        <LanguageSwitcher />
                    </div>
                </div>
            </nav>

            <div className="main-container">

                {/* --- Hero Section --- */}
                <section className="hero-section">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.p variants={fadeInUp} style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1.25rem', marginBottom: '16px' }}>
                            Hello, I am
                        </motion.p>
                        <motion.h1 variants={fadeInUp}>
                            Choi Sangjean<br />
                            <span style={{ opacity: 0.5 }}>Hardware-Aware</span><br />
                            <span style={{ color: 'var(--primary)' }}>Software Engineer</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} style={{ marginTop: '32px', maxWidth: '600px' }}>
                            {dict.about.description3}
                        </motion.p>
                        <motion.div variants={fadeInUp} style={{ marginTop: '48px' }}>
                            <a href="#projects" className="btn-primary">View Projects</a>
                        </motion.div>
                    </motion.div>
                </section>

                {/* --- About Section --- */}
                <section id="about" className="section">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="grid-2"
                    >
                        <div>
                            <h2>{dict.about.subtitle}</h2>
                            <p>{dict.about.description1}</p>
                            <p>{dict.about.description2}</p>
                        </div>

                        <div className="glass-panel">
                            <h3 style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '16px', marginBottom: '24px' }}>
                                {dict.about.educationTitle}
                            </h3>
                            <div style={{ marginBottom: '24px' }}>
                                <div style={{ color: 'var(--text-main)', fontWeight: 600, marginBottom: '4px' }}>Seoul Robot High School</div>
                                <div style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Robot Software | 2015.03 ~ 2017.02</div>
                            </div>
                            <div>
                                <div style={{ color: 'var(--text-main)', fontWeight: 600, marginBottom: '4px' }}>Hankyong National University</div>
                                <div style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Dept. of Software Service Computing | 2022.03 ~ 2026.02</div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* --- Skills Section (Visualized) --- */}
                <section id="skills" className="section">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <h2>{dict.nav.skills}</h2>
                        <div className="grid-3">
                            {[
                                { name: "Python", category: "Language" },
                                { name: "Deep Learning", category: "AI/ML" },
                                { name: "Generative AI", category: "AI/ML" },
                                { name: "Computer Vision", category: "AI/ML" },
                                { name: "TensorFlow", category: "Framework" },
                                { name: "Flutter", category: "Mobile" },
                                { name: "RAG", category: "Architecture" },
                                { name: "LangChain", category: "Library" },
                                { name: "YOLOv8", category: "Vision" },
                            ].map((skill, idx) => (
                                <motion.div key={idx} variants={fadeInUp} className="skill-card">
                                    <div style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--text-main)' }}>{skill.name}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '4px' }}>{skill.category}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* --- Projects Section --- */}
                <section id="projects" className="section">
                    <h2>{dict.projects.title}</h2>

                    <div className="grid-2">
                        {/* Project 1: Memordo */}
                        <ProjectCard
                            dict={dict.projects.memordo}
                            mediaType="video"
                            mediaSrc="project_memordo.mp4"
                            link="https://github.com/810072/Memordo"
                        />
                        {/* Project 2: Crawler */}
                        <ProjectCard
                            dict={dict.projects.crawler}
                            mediaType="image"
                            mediaSrc="project_report.png"
                            link="https://github.com/810072/HKNU_CS_Info-master"
                        />
                        {/* Project 3: Wildfire */}
                        <ProjectCard
                            dict={dict.projects.wildfire}
                            mediaType="image"
                            mediaSrc="project_ml.png"
                            link="https://github.com/810072/Project-1_sanbul"
                        />
                        {/* Project 4: Flowers */}
                        <ProjectCard
                            dict={dict.projects.flowers}
                            mediaType="image"
                            mediaSrc="project_yolo.png"
                        // No link provided in original, assumed none or add if available
                        />
                    </div>
                </section>

                {/* Footer */}
                <footer style={{ textAlign: 'center', padding: '80px 0', borderTop: '1px solid var(--border-light)', marginTop: '80px' }}>
                    <p style={{ color: 'var(--text-dim)' }}>© 2026 Choi Sangjean. All rights reserved.</p>
                </footer>

            </div>
        </div>
    );
}

// Sub-component for Project Cards
function ProjectCard({ dict, mediaType, mediaSrc, link }) {
    const assetSrc = getAssetPath(mediaSrc);

    return (
        <motion.article
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-media-container" style={{ display: 'block' }}>
                {mediaType === 'video' ? (
                    <video
                        src={assetSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                ) : (
                    <Image
                        src={assetSrc}
                        alt={dict.title}
                        width={800}
                        height={450}
                    />
                )}
            </a>
            <div className="project-info">
                <h3>{dict.title}</h3>
                <p style={{ fontSize: '0.95rem' }}>{dict.description}</p>
                <div className="project-tags">
                    {dict.tags && dict.tags.map(tag => (
                        <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                </div>
            </div>
        </motion.article>
    );
}

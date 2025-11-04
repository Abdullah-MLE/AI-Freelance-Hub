import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import benhaLogo from "../assets/benha-logo.jpeg";
import styles from "../styles/AboutUs.module.css";

const AboutUs = () => {
  const features = [
    {
      icon: "🎯",
      title: "Our Mission",
      description:
        "To connect talented freelancers with clients who need their expertise, fostering collaboration and driving success for both parties.",
    },
    {
      icon: "💡",
      title: "Our Vision",
      description:
        "To become the leading platform for freelance professionals, creating opportunities and building a thriving freelance community.",
    },
    {
      icon: "⭐",
      title: "Our Values",
      description:
        "We believe in transparency, quality, and mutual respect. Every project is an opportunity to build lasting professional relationships.",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Active Freelancers" },
    { number: "50,000+", label: "Completed Projects" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "150+", label: "Countries Served" },
  ];

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1>About Us</h1>
          <p className={styles.heroSubtitle}>
            Connecting talented freelancers with clients worldwide
          </p>
        </div>

        <section className={styles.section}>
          <div className={styles.contentWrapper}>
            <div className={styles.textContent}>
              <h2>Who We Are</h2>
              <p>
                We are a leading freelance platform dedicated to connecting
                skilled professionals with clients who need their expertise.
                Since our inception, we've been committed to creating a seamless
                experience for both freelancers and clients.
              </p>
              <p>
                Our platform brings together talented individuals from various
                fields including web development, design, marketing, writing,
                and many more. We provide the tools and support needed for
                successful collaborations.
              </p>
            </div>
            <div className={styles.imagePlaceholder}>
              <div className={styles.imageBox}>
                <img
                  src={benhaLogo}
                  alt="Benha University Logo"
                  className={styles.universityLogo}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.statsSection}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What Makes Us Different</h2>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.ctaCard}>
            <h2>Ready to Get Started?</h2>
            <p>
              Whether you're a freelancer looking for opportunities or a client
              seeking top talent, we're here to help you succeed.
            </p>
            <div className={styles.ctaButtons}>
              <Link to="/contact" className={styles.primaryBtn}>
                Contact Us
              </Link>
              <Link to="/dashboard" className={styles.secondaryBtn}>
                Browse Projects
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;

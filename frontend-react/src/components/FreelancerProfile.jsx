import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/FreelancerProfile.module.css";

function FreelancerProfile({ freelancer, onBack }) {
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate("/dashboard");
    }
  };

  const defaultFreelancer = {
    name: "Profile name",
    role: "freelancer",
    title: "Mobile App Developer",
    about:
      "Professional mobile app developer with 5+ years of experience in React Native and Flutter. I specialize in creating high-performance, user-friendly applications with clean code and modern design principles. Passionate about delivering solutions that exceed client expectations and drive business growth.",
    skills: [
      "React Native",
      "Flutter",
      "JavaScript",
      "UI/UX Design",
      "Figma",
      "Agile",
    ],
    reviews: [
      {
        name: "Mohamed Ahmed",
        rating: 5,
        text: "Excellent developer! Delivered the project ahead of schedule with high quality code. Highly recommended for any mobile app development.",
      },
      {
        name: "Fatima Abdullah",
        rating: 5,
        text: "Professional and creative. Understood requirements perfectly and provided excellent suggestions for improvement.",
      },
    ],
    stats: {
      rating: 5,
      projectCompletion: "100.00%",
      onTimeDelivery: "100.00%",
      rehireRate: "0.00%",
      avgResponseTime: "6 hours",
      completedProjects: "10 Projects",
      registrationDate: "03 July 2020",
      lastActive: "2 days ago",
    },
    portfolio: [
      {
        title: "E-commerce App",
        description: "Full-featured shopping app with payment integration",
      },
      {
        title: "Social Media Platform",
        description: "Real-time messaging and content sharing",
      },
      {
        title: "Fitness Tracker",
        description: "Health monitoring app with analytics dashboard",
      },
    ],
  };

  const profile = freelancer || defaultFreelancer;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={styles.star}>
        {i < rating ? "★" : "☆"}
      </span>
    ));
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.profileHeader}>
            <div className={styles.avatar}>
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="40" fill="#ddd" />
                <path
                  d="M40 25C33.3726 25 28 30.3726 28 37C28 43.6274 33.3726 49 40 49C46.6274 49 52 43.6274 52 37C52 30.3726 46.6274 25 40 25Z"
                  fill="#999"
                />
                <path
                  d="M20 60C20 50 28 45 40 45C52 45 60 50 60 60V65H20V60Z"
                  fill="#999"
                />
              </svg>
            </div>
            <div className={styles.profileInfo}>
              <h1>{profile.name}</h1>
              <div className={styles.meta}>
                <span>
                  <span className={styles.icon}>👤</span>
                  {profile.role}
                </span>
                <span>
                  <span className={styles.icon}>💼</span>
                  {profile.title}
                </span>
              </div>
            </div>
            <button className={styles.contactBtn}>
              Contact Me
              <span className={styles.arrow}>↓</span>
            </button>
          </div>

          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${
                activeTab === "profile" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("profile")}
            >
              <span className={styles.tabIcon}>👤</span>
              profile
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "rating" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("rating")}
            >
              <span className={styles.tabIcon}>⭐</span>
              Rating
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "portfolio" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("portfolio")}
            >
              <span className={styles.tabIcon}>💼</span>
              Portfolio
            </button>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.leftColumn}>
            {activeTab === "profile" && (
              <>
                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>| About me</h2>
                  <p className={styles.sectionContent}>{profile.about}</p>
                </section>

                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>| Skills & Expertise</h2>
                  <div className={styles.skillsContainer}>
                    {profile.skills.map((skill, index) => (
                      <span key={index} className={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>

                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>| Client Reviews</h2>
                  <div className={styles.reviewsList}>
                    {profile.reviews.map((review, index) => (
                      <div key={index} className={styles.review}>
                        <div className={styles.reviewHeader}>
                          <div className={styles.reviewAvatar}>
                            {review.name.charAt(0)}
                          </div>
                          <div className={styles.reviewInfo}>
                            <div className={styles.reviewName}>
                              {review.name}
                            </div>
                            <div className={styles.reviewStars}>
                              {renderStars(review.rating)}
                            </div>
                          </div>
                        </div>
                        <p className={styles.reviewText}>{review.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}

            {activeTab === "rating" && (
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>| Ratings & Reviews</h2>
                <div className={styles.ratingSummary}>
                  <div className={styles.overallRating}>
                    <div className={styles.ratingValue}>
                      {profile.stats.rating}
                    </div>
                    <div className={styles.ratingStars}>
                      {renderStars(profile.stats.rating)}
                    </div>
                    <div className={styles.ratingCount}>
                      ({profile.reviews.length} reviews)
                    </div>
                  </div>
                </div>
                <div className={styles.reviewsList}>
                  {profile.reviews.map((review, index) => (
                    <div key={index} className={styles.review}>
                      <div className={styles.reviewHeader}>
                        <div className={styles.reviewAvatar}>
                          {review.name.charAt(0)}
                        </div>
                        <div className={styles.reviewInfo}>
                          <div className={styles.reviewName}>{review.name}</div>
                          <div className={styles.reviewStars}>
                            {renderStars(review.rating)}
                          </div>
                        </div>
                      </div>
                      <p className={styles.reviewText}>{review.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {activeTab === "portfolio" && (
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>| Portfolio</h2>
                <div className={styles.portfolioGrid}>
                  {profile.portfolio.map((item, index) => (
                    <div key={index} className={styles.portfolioItem}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className={styles.rightColumn}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                | Statistics
                <span className={styles.statsIcon}>📊</span>
              </h2>
              <div className={styles.statsList}>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Reviews:</span>
                  <span className={styles.statValue}>
                    {renderStars(profile.stats.rating)}
                  </span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Project Completion:</span>
                  <span className={styles.statValue}>
                    {profile.stats.projectCompletion}
                  </span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>On-time Deliver:</span>
                  <span className={styles.statValue}>
                    {profile.stats.onTimeDelivery}
                  </span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Rehire Rate:</span>
                  <span className={styles.statValue}>
                    {profile.stats.rehireRate}
                  </span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>
                    Average Response Time:
                  </span>
                  <span className={styles.statValue}>
                    {profile.stats.avgResponseTime}
                  </span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Completed Projects:</span>
                  <span className={styles.statValue}>
                    {profile.stats.completedProjects}
                  </span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Registration Date:</span>
                  <span className={styles.statValue}>
                    {profile.stats.registrationDate}
                  </span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Last Active:</span>
                  <span className={styles.statValue}>
                    {profile.stats.lastActive}
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className={styles.backContainer}>
        <button className={styles.backBtn} onClick={handleBack}>
          ← Back to Dashboard
        </button>
      </div>
      <Footer />
    </>
  );
}

export default FreelancerProfile;

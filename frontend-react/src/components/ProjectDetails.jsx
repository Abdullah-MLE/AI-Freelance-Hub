import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/ProjectDetails.module.css";
import ProposalModal from "./ProposalModal";

const ProjectDetails = ({ project, onBack }) => {
  const [showProposal, setShowProposal] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate("/dashboard");
    }
  };

  if (!project) {
    return (
      <>
        <Navbar />
        <div className={styles.container}>
          <p>Project not found</p>
          <button onClick={handleBack}>Go Back</button>
        </div>
      </>
    );
  }

  const {
    title,
    description,
    fullDescription,
    skills = [],
    timeline,
    budget,
    matchingScore,
    status = "Open",
    postedDate,
  } = project;

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.overviewCard}>
          <h1>{title}</h1>
          <p className={styles.subtitle}>{description || "Complete project details and requirements"}</p>
          <div className={styles.postedInfo}>
            <span className={styles.dot}></span>
            <span>Posted {postedDate || "2 days ago"}</span>
          </div>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.accentBar}></span>
            Project Description
          </h2>
          <p className={styles.sectionContent}>
            {fullDescription || description || "No detailed description available."}
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.accentBar}></span>
            Required Skills
          </h2>
          <div className={styles.skillsContainer}>
            {skills.map((skill, index) => (
              <span key={index} className={styles.skillTag}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.accentBar}></span>
            Project Details
          </h2>
          <div className={styles.detailsGrid}>
            <div className={styles.detailCard}>
              <div className={styles.detailValue}>{timeline || "4-6 Weeks"}</div>
              <div className={styles.detailLabel}>Time line</div>
            </div>
            <div className={styles.detailCard}>
              <div className={styles.detailValue}>{budget || "$500"}</div>
              <div className={styles.detailLabel}>Budget</div>
            </div>
            <div className={`${styles.detailCard} ${styles.matchingCard}`}>
              <div className={styles.detailValue}>{matchingScore || "90"}%</div>
              <div className={styles.detailLabel}>Matching Score</div>
            </div>
            <div className={styles.detailCard}>
              <div className={styles.detailLabel}>Project State</div>
              <span className={`${styles.statusBadge} ${styles[status.toLowerCase()]}`}>
                {status}
              </span>
            </div>
          </div>
        </section>

        <button className={styles.proposalBtn} onClick={() => setShowProposal(true)}>
          Make proposal
        </button>

        <button className={styles.backBtn} onClick={handleBack}>
          ← Back to Projects
        </button>
      </div>
      <Footer />

      <ProposalModal
        isOpen={showProposal}
        onClose={() => setShowProposal(false)}
        projectName={title}
        skills={skills.join(", ")}
      />
    </>
  );
};

export default ProjectDetails;


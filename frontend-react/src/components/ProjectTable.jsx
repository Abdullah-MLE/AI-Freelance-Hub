import React, { useState } from "react";
import styles from "../styles/ProjectTable.module.css";
import ProposalModal from "./ProposalModal";

const projects = [
  {
    title: "E-commerce Mobile App",
    description: "Complete application for sales and inventory management",
    skills: ["React Native", "Node.js", "MongoDB"],
    budget: "$500",
    level: "Intermediate",
    matchingRate: 90,
  },
  {
    title: "Online Education Website",
    description: "Educational platform with video and assessment features",
    skills: ["Laravel", "Vue.js", "MySQL"],
    budget: "$350",
    level: "Advance",
    matchingRate: 95,
  },
  {
    title: "Logo and Brand Identity Design",
    description: "Professional design for company logo and branding",
    skills: ["Adobe Illustrator", "Photoshop"],
    budget: "$200",
    level: "Beginner",
    matchingRate: 89,
  },
  {
    title: "CRM System",
    description: "Web application for customer and sales management",
    skills: ["Django", "PostgreSQL", "REST API"],
    budget: "$500",
    level: "Intermediate",
    matchingRate: 91,
  },
];

const ProjectTable = ({ onViewProject, onMakeProposal }) => {
  const [showProposal, setShowProposal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleMakeProposal = (project) => {
    setSelectedProject(project);
    setShowProposal(true);
    if (onMakeProposal) onMakeProposal(project);
  };

  const handleViewProject = (project) => {
    if (onViewProject) onViewProject(project);
  };

  const getMatchingColor = (rate) => {
    if (rate >= 95) return styles.matchingHigh;
    if (rate >= 90) return styles.matchingMedium;
    return styles.matchingLow;
  };

  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.header}>
          <h2>Available Projects</h2>
          <button className={styles.goToBtn}>Go to Projects</button>
        </div>

        {/* Table view for desktop */}
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Project Title</th>
                <th>Description</th>
                <th>Required Skills</th>
                <th>Budget</th>
                <th>Matching Rate</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p, i) => (
                <tr key={i}>
                  <td>{p.title}</td>
                  <td>{p.description}</td>
                  <td>{p.skills.join(", ")}</td>
                  <td>{p.budget}</td>
                  <td>
                    <span
                      className={`${styles.matchingRate} ${getMatchingColor(
                        p.matchingRate
                      )}`}
                    >
                      {p.matchingRate}%
                    </span>
                  </td>
                  <td>
                    <div className={styles.actionButtons}>
                      <button
                        className={styles.goToProjectBtn}
                        onClick={() => handleViewProject(p)}
                      >
                        Go to project
                      </button>
                      <button
                        className={styles.makeProposalBtn}
                        onClick={() => handleMakeProposal(p)}
                      >
                        Make Proposal
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card view for mobile */}
        <div className={styles.cardList}>
          {projects.map((p, i) => (
            <div key={i} className={styles.card}>
              <p>
                <strong>Project Title:</strong> {p.title}
              </p>
              <hr className={styles.divider} />
              <p>
                <strong>Description:</strong> {p.description}
              </p>
              <hr className={styles.divider} />
              <p>
                <strong>Required Skills:</strong> {p.skills.join(", ")}
              </p>
              <hr className={styles.divider} />
              <p>
                <strong>Budget:</strong> {p.budget}
              </p>
              <hr className={styles.divider} />
              <p>
                <strong>Matching Rate:</strong>{" "}
                <span
                  className={`${styles.matchingRate} ${getMatchingColor(
                    p.matchingRate
                  )}`}
                >
                  {p.matchingRate}%
                </span>
              </p>
              <div className={styles.cardActions}>
                <button
                  className={styles.goToProjectBtn}
                  onClick={() => handleViewProject(p)}
                >
                  Go to project
                </button>
                <button
                  className={styles.makeProposalBtn}
                  onClick={() => handleMakeProposal(p)}
                >
                  Make Proposal
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <ProposalModal
          isOpen={showProposal}
          onClose={() => {
            setShowProposal(false);
            setSelectedProject(null);
          }}
          projectName={selectedProject.title}
          skills={selectedProject.skills.join(", ")}
        />
      )}
    </>
  );
};
export default ProjectTable;

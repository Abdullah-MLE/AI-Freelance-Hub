import React from "react";
import Navbar from "./Navbar";
import ProjectTable from "./ProjectTable";
import ProfileManagement from "./ProfileManagment";
import Footer from "./Footer";
import styles from "../styles/Dashboard.module.css";

const Dashboard = ({ onViewProject, onViewProfile }) => {
  return (
    <>
      <div className={styles.page}>
        <Navbar />
        <main className={styles.main}>
          <h1>Your Projects</h1>
          <ProjectTable onViewProject={onViewProject} />
          <ProfileManagement onViewProfile={onViewProfile} />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;

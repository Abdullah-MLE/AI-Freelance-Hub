import React from "react";
import styles from "../styles/ProfileManagment.module.css";

const ProfileManagement = ({ onViewProfile }) => {
  return (
    <section className={styles.wrapper}>
      <h2>Profile Management</h2>
      <p>Manage your personal profile and account settings</p>
      <div className={styles.actions}>
        <button className={styles.create}>Create Profile</button>
        <button className={styles.edit}>Edit Profile</button>
        <button className={styles.view} onClick={onViewProfile}>
          View Profile
        </button>
      </div>
    </section>
  );
};
export default ProfileManagement;

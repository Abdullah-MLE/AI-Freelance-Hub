import React, { useState } from "react";
import styles from "../styles/ProposalModal.module.css";

const ProposalModal = ({ isOpen, onClose, projectName = "[Project Name]", skills = "[Specific Skills]" }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const proposalText = `Dear Client,

I am excited to submit this proposal for your ${projectName} project. After reviewing your requirements, I believe my expertise in ${skills} aligns perfectly with your needs.

Key Features:
• Professional design and development
• Responsive across all devices
• SEO optimization

I am confident that I can deliver a solution that exceeds your expectations. I look forward to discussing this opportunity further.

Best regards,
[Your Name]`;

  const handleCopy = () => {
    navigator.clipboard.writeText(proposalText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Your Proposal</h2>
          <p>Review and send your professional proposal</p>
        </div>
        
        <div className={styles.content}>
          <h3 className={styles.proposalTitle}>Project Proposal</h3>
          <div className={styles.proposalText}>
            {proposalText.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.copyBtn} onClick={handleCopy}>
            {copied ? "Copied!" : "Copy"}
          </button>
          <button className={styles.closeBtn} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProposalModal;


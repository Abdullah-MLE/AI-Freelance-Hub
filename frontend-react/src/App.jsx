import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ProjectDetails from "./components/ProjectDetails";
import FreelancerProfile from "./components/FreelancerProfile";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";

// Wrapper component for ProjectDetails to handle navigation
const ProjectDetailsWrapper = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const project = location.state?.project;

  const handleBack = () => {
    navigate("/dashboard");
  };

  return <ProjectDetails project={project} onBack={handleBack} />;
};

// Wrapper component for Dashboard to handle navigation
const DashboardWrapper = () => {
  const navigate = useNavigate();

  const handleViewProject = (project) => {
    const fullProject = {
      ...project,
      fullDescription:
        project.fullDescription ||
        `We are looking for an experienced developer to create ${project.title.toLowerCase()}. ${project.description} The project requires expertise in ${project.skills.join(", ")} and should be completed within the specified timeline.`,
      timeline: "4-6 Weeks",
      status: "Open",
      postedDate: "2 days ago",
    };
    navigate("/project-details", { state: { project: fullProject } });
  };

  const handleViewProfile = () => {
    navigate("/profile");
  };

  return (
    <Dashboard
      onViewProject={handleViewProject}
      onViewProfile={handleViewProfile}
    />
  );
};

// Wrapper component for FreelancerProfile
const FreelancerProfileWrapper = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/dashboard");
  };

  return <FreelancerProfile onBack={handleBack} />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardWrapper />} />
        <Route path="/dashboard" element={<DashboardWrapper />} />
        <Route path="/project-details" element={<ProjectDetailsWrapper />} />
        <Route path="/profile" element={<FreelancerProfileWrapper />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

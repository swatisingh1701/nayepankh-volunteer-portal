import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import SubmissionCard from "../components/SubmissionCard";

import { getSubmissions } from "../utils/storage";
import { downloadCSV } from "../utils/report";

function Admin({ darkMode, setDarkMode }) {
  const [submissions, setSubmissions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSubmissions(getSubmissions());
  }, []);

  const refreshData = () => {
    setSubmissions(getSubmissions());
  };

  const filteredSubmissions = submissions.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase())
  );

  const weekendVolunteers = submissions.filter(
    (item) => item.availability === "Weekends"
  ).length;

  const fullTimeVolunteers = submissions.filter(
    (item) => item.availability === "Full Time"
  ).length;

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="admin-container">
        <div className="dashboard-header">
          <h1>Volunteer Dashboard</h1>

          <p>
            Manage volunteer registrations and applications.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stats-card">
            <h2>Total Volunteers</h2>
            <span>{submissions.length}</span>
          </div>

          <div className="stats-card">
            <h2>Weekend Volunteers</h2>
            <span>{weekendVolunteers}</span>
          </div>

          <div className="stats-card">
            <h2>Full-Time Volunteers</h2>
            <span>{fullTimeVolunteers}</span>
          </div>
        </div>

        <button
          className="report-btn"
          onClick={() =>
            downloadCSV(submissions)
          }
        >
          📥 Download Volunteer Report
        </button>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <div className="submission-grid">
          {filteredSubmissions.length > 0 ? (
            filteredSubmissions.map((submission) => (
              <SubmissionCard
                key={submission.id}
                submission={submission}
                refresh={refreshData}
              />
            ))
          ) : (
            <div className="empty-state">
              No volunteers found.
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Admin;

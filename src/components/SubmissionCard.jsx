import { deleteSubmission } from "../utils/storage";

function SubmissionCard({
  submission,
  refresh,
}) {
  const handleDelete = () => {
    deleteSubmission(submission.id);
    refresh();
  };

  return (
    <div className="submission-card">
      <div className="card-header">
        <h3>{submission.name}</h3>
      </div>

      <p className="email">
        {submission.email}
      </p>

      <div className="card-section">
        <strong>Phone Number:</strong>
        <p>{submission.phone}</p>
      </div>

      <div className="card-section">
        <strong>City:</strong>
        <p>{submission.city}</p>
      </div>

      <div className="card-section">
        <strong>Skills:</strong>
        <p>{submission.skills}</p>
      </div>

      <div className="card-section">
        <strong>Availability:</strong>
        <p>{submission.availability}</p>
      </div>

      <div className="card-section">
        <strong>Motivation:</strong>
        <p>{submission.motivation}</p>
      </div>

      <div className="card-footer">
        <small>
          Registered on:{" "}
          {submission.createdAt}
        </small>

        <button
          className="delete-btn"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default SubmissionCard;
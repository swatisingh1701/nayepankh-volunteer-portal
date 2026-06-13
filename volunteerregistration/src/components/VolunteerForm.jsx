import { useState } from "react";
import { validateForm } from "../utils/validation";
import { saveSubmission } from "../utils/storage";

function VolunteerForm() {
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    skills: "",
    availability: "",
    motivation: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    setTimeout(() => {
      saveSubmission(formData);

      alert("Volunteer Registration Submitted Successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        skills: "",
        availability: "",
        motivation: "",
      });

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Volunteer Registration</h2>
        <p>Join Us in Creating Positive Change</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />

          {errors.name && (
            <p className="error-text">{errors.name}</p>
          )}
        </div>

        <div className="form-group">
          <label>Email Address</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && (
            <p className="error-text">{errors.email}</p>
          )}
        </div>

        <div className="form-group">
          <label>Phone Number</label>

          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />

          {errors.phone && (
            <p className="error-text">{errors.phone}</p>
          )}
        </div>

        <div className="form-group">
          <label>City</label>

          <input
            type="text"
            name="city"
            placeholder="Enter your city"
            value={formData.city}
            onChange={handleChange}
          />

          {errors.city && (
            <p className="error-text">{errors.city}</p>
          )}
        </div>

        <div className="form-group">
          <label>Skills</label>

          <select
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          >
            <option value="">Select Your Skill</option>
            <option value="Teaching">Teaching</option>
            <option value="Web Development">Web Development</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Content Writing">Content Writing</option>
            <option value="Social Media Management">
              Social Media Management
            </option>
            <option value="Event Management">Event Management</option>
            <option value="Fundraising">Fundraising</option>
            <option value="Other">Other</option>
          </select>

          {errors.skills && (
            <p className="error-text">{errors.skills}</p>
          )}
        </div>

        <div className="form-group">
          <label>Availability</label>

          <select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
          >
            <option value="">Select Availability</option>
            <option value="Weekdays">Weekdays</option>
            <option value="Weekends">Weekends</option>
            <option value="Both">Both</option>
          </select>

          {errors.availability && (
            <p className="error-text">{errors.availability}</p>
          )}
        </div>

        <div className="form-group">
          <label>Why do you want to volunteer?</label>

          <textarea
            rows="5"
            name="motivation"
            placeholder="Tell us why you want to join NayePankh Foundation..."
            value={formData.motivation}
            onChange={handleChange}
          />

          {errors.motivation && (
            <p className="error-text">{errors.motivation}</p>
          )}

          <small className="char-count">
            {formData.motivation.length}/500 Characters
          </small>
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Register as Volunteer"}
        </button>
      </form>
    </div>
  );
}

export default VolunteerForm;
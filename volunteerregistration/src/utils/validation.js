export const validateForm = (formData) => {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "Full Name is required";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(formData.email)) {
    errors.email = "Please enter a valid email";
  }

  const phoneRegex = /^[0-9]{10}$/;

  if (!formData.phone.trim()) {
    errors.phone = "Phone Number is required";
  } else if (!phoneRegex.test(formData.phone)) {
    errors.phone = "Enter a valid 10-digit phone number";
  }

  if (!formData.city.trim()) {
    errors.city = "City is required";
  }

  if (!formData.skills.trim()) {
    errors.skills = "Please select a skill";
  }

  if (!formData.availability.trim()) {
    errors.availability = "Please select your availability";
  }

  if (!formData.motivation.trim()) {
    errors.motivation = "This field is required";
  } else if (formData.motivation.length < 20) {
    errors.motivation =
      "Please write at least 20 characters";
  }

  return errors;
};
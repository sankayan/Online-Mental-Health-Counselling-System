import { useState } from "react";

const AppointmentRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    counsellor: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);
    alert("Appointment booked successfully!");
    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      counsellor: "",
      message: "",
    });
  };

  return (
    <div style={styles.container}>
      <h2>Book an Appointment</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <select
          name="counsellor"
          value={formData.counsellor}
          onChange={handleChange}
          required
        >
          <option value="">Select Counsellor</option>
          <option value="Dr. A">Dr. A</option>
          <option value="Dr. B">Dr. B</option>
          <option value="Dr. C">Dr. C</option>
        </select>

        <textarea
          name="message"
          placeholder="Describe your concern (optional)"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "8px",
    background: "#f5f5f5",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
};

export default AppointmentRegister;

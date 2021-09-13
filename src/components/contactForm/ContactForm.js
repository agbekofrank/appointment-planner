import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Name"
        />
      </label>
      <label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          pattern="^0(5[012345678]|6[47]){1}(\-)?[^0\D]{1}\d{5}$"
          placeholder="Phone number (###-###-####)"
        />
      </label>
      <label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
          required
          placeholder='email'
        />
      </label>
      <input type='submit'/>
    </form>
  );
};

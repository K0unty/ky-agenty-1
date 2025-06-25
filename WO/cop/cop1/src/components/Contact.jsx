const Contact = () => (
  <section aria-labelledby="contact-heading" className="cv-section">
    <h2 id="contact-heading">Contact</h2>
    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" required />
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows="4" required />
      <button type="submit">Send</button>
    </form>
  </section>
)

export default Contact

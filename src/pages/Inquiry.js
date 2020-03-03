import React from 'react';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class Inquiry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();

    this.setState({ name: "", email: "", message: "" });
  };


  handleChange = e => this.setState({ [e.target.name]: e.target.value });


  render() {
    const { name, email, message } = this.state;
    return (
      <div>
        <form className="inquiry-form" onSubmit={this.handleSubmit}>
          <p>
            <input className="inquiry-input" type="text" name="name" value={name} onChange={this.handleChange} placeholder="Name" required />
          </p>
          <p>
            <input className="inquiry-input" type="email" name="email" value={email} onChange={this.handleChange} placeholder="Email" required />
          </p>
          <p>
            <textarea className="inquiry-input" type="text" name="message" value={message} onChange={this.handleChange} placeholder="Talk to us!" rows="5" cols="50" required />
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  };
};
import React from 'react';


const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k)=>{
      formData.append(k,data[k])
    });
    return formData
}

class Inquiry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      // headers: { "Content-Type": "application/x-www-form-urlencoded" },
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
      <form className="inquiry-form" onSubmit={this.handleSubmit} action="/thank-you/">
        <p>
          <input className="inquiry-input" type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange} required/>
        </p>
        <p>
          <input className="inquiry-input" type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange} required/>
        </p>
        <p>
          <textarea className="inquiry-input" name="message" placeholder="Talk to us!" value={message} onChange={this.handleChange} rows="5" cols="50" required/>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    );
  }
}

export default Inquiry;



        // <form className="inquiry-form" onSubmit={this.handleSubmit}>
        //   <p>
        //     <input className="inquiry-input" type="text" name="name" value={name} onChange={this.handleChange} placeholder="Name" required />
        //   </p>
        //   <p>
        //     <input className="inquiry-input" type="email" name="email" value={email} onChange={this.handleChange} placeholder="Email" required />
        //   </p>
        //   <p>
        //     <textarea className="inquiry-input" type="text" name="message" value={message} onChange={this.handleChange} placeholder="Talk to us!" rows="5" cols="50" required />
        //   </p>
        //   <p>
        //     <button type="submit">Send</button>
        //   </p>
        // </form>
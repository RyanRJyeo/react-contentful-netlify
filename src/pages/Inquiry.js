import React from 'react';

export default class Inquiry extends React.Component {
  render() {
    return (
      <div>
        <form className="inquiry-form" name="contact" action="POST" data-netlify="true">
          <p>
            <input className="inquiry-input" type="text" name="name" placeholder="Name" required />
          </p>
          <p>
            <input className="inquiry-input" type="email" name="email" placeholder="Email" required />
          </p>
          <p>
            <textarea className="inquiry-input" type="text" name="description" placeholder="Talk to us!" rows="5" cols="50" required />
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  };
};
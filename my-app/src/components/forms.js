import React from "react";
import "../css/style.css";


// https://w3collective.com/react-contact-form/

const Forms = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  
  export default function Forms() {
  return (
   
      <div>

          <h2 id="sec5">Contact Form</h2>
          <form class="text-center border border-light p-5" onSubmit={handleSubmit}>
            <p class="h4 mb-4">Connect with me!</p>


            <input
              type="text"
              id="defaultContactFormName"
              class="form-control mb-4"
              placeholder="Name"/>


            <input
              type="email"
              id="defaultContactFormEmail"
              class="form-control mb-4"
              placeholder="E-mail"/>

            <label>Subject</label>
            <select class="browser-default custom-select mb-4">
              <option value="1" selected>Job Opportunity</option>
              <option value="2" selected>Job Opportunity</option>
              <option value="3">Portfolio feedback</option>
              <option value="4">Feature request</option>
              <option value="5">Report a bug</option>
            </select>


            <div class="form-group">
              <textarea
                class="form-control rounded-0"
                id="exampleFormControlTextarea2"
                rows="3"
                placeholder="Message"
              ></textarea>
              <br />
            </div>


            <button class="btn" type="submit">Send</button>
          </form>

        </div>



    );
  }

  export default Forms;
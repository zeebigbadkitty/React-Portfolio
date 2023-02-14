import React from "react";
import "../css/style.css";

export default function Forms() {
    return (
      <div>

          <h2 id="sec5">Contact Form</h2>
          <form class="text-center border border-light p-5" action="#!">
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


            <button class="btn btn-info btn-block" type="submit">Send</button>
          </form>

        </div>



    );
  }
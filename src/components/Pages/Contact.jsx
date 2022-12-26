import React, { useState } from "react";
import axios from "axios";

import "./Contact.css";

export const Contact = () => {
  // variable to read the state - and a function to write the state, with an initial value in the shape of the data e.g.[], or "" etc
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userTelephone, setUserTelephone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userTextArea, setUserTextarea] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    alert(
      " Thank you for the info " +
        firstName +
        ", we will reply to you within the hour"
    );

    //call the helper function which connects to the new contact entry
    createNewContactEntry(
      firstName,
      lastName,
      userTelephone,
      userEmail,
      userTextArea
    );
  };

  return (
    <div id="Contact">
      <div className="main__body-contact">
        <header className="main__contact-header">
          <h2>Contact</h2>
        </header>

        <div className="Contact__Form-body" name="Contact">
          <fieldset>
            <form onSubmit={handleFormSubmit} id="Contact__form">
              <label id="Contact__form-firstName" for="First name"></label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                // controlled input onChange - circular store the input value in state when user types a letter each letter is saved , then you feed it back to input
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                className="form-control"
                placeholder="First name"
                required
              />

              <label id="Contact__form-LastName" for="Last Name"></label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                // controlled input onChange - circular store the input value in state when user types a letter each letter is saved , then you feed it back to input
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                //(event.target.value.charAt(0).toUpperCase())}
                // str.charAt(0).toUpperCase() + str.slice(1);
                className="form-control"
                placeholder="Last name"
                required
              />

              <div id="Contact__form-email">
                <label id="Contact__form-label" for="email"></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={userEmail}
                  onChange={(event) => setUserEmail(event.target.value)}
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>

              <div id="Contact__form-tel">
                <label id="Contact__form-tel" for="telephone"></label>
                <input
                  type="number"
                  name="telephone"
                  id="telephone"
                  value={userTelephone}
                  onChange={(event) => setUserTelephone(event.target.value)}
                  className="form-control"
                  placeholder="Telephone"
                />
              </div>

              <textarea
                type="textArea"
                id="comments"
                value={userTextArea}
                onChange={(event) => setUserTextarea(event.target.value)}
                className="input-textarea"
                name="comment"
                placeholder="Your comments here..."
                required
              ></textarea>

              <button
                type="submit"
                id="Contact__form-submit-Btn"
                className="submit-button"
              >
                Submit
              </button>
            </form>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

//Helper function to connect to the user contact input in its own function
const createNewContactEntry = (
  firstName,
  lastName,
  userTelephone,
  userEmail,
  userTextArea
) => {
  axios.post("/", {
    records: [
      {
        fields: {
          FirstName: firstName,
          LastName: lastName,
          Email: userEmail,
          Phone: userTelephone,
          Message: userTextArea,
        },
      },
    ],
  });
};

import React from "react";
import { Textfield, Button } from "react-mdl";
import { Grid, Cell } from "react-mdl";

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <Grid className="contact-page">
          <Cell col={12} />

          <div className="ContactCard">
            <h1>Contact Page</h1>
            <p>Phone : 9439784695 </p>
            <p>EMAIL : boity.soumyakanta@gmail.com</p>

            <Textfield
              onChange={() => {}}
              label="Hit Me Up..."
              rows={3}
              style={{
                width: "300px",
                color: "white",
                floatingLabel: "true",
                inputClassName: "textLabel"
              }}
            />
            <br />

            <Textfield
              onChange={() => {}}
              label="Your Email"
              floatingLabel
              style={{ width: "200px" }}
            />
            <br />

            <Button raised colored>
              Send
            </Button>
          </div>
        </Grid>
      </div>
    );
  }
}

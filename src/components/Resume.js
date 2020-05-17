import React from "react";
import { Button } from "react-mdl";

export default class Resume extends React.Component {
  render() {
    return (
      <div className="resume">
        <Button raised colored ripple>
          Download Resume
        </Button>
      </div>
    );
  }
}

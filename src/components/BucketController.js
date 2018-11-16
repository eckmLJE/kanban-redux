import React, { Component } from "react";
import { connect } from "react-redux";
import "./BucketController.css";

import { newBucket } from "../actions/buckets";

class BucketController extends Component {
  state = { bucketName: "" };

  handleNewStageButton = e => {
    e.preventDefault();
    const bucket = { title: this.state.bucketName };
    this.props.newBucket(bucket);
  };

  render() {
    return (
      <div className="bucket-controller">
        <input
          type="text"
          onChange={e => this.setState({ bucketName: e.target.value })}
          value={this.state.bucketName}
        />
        <button onClick={this.handleNewStageButton}>Create New Stage</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  newBucket: bucket => dispatch(newBucket(bucket))
});

export default connect(
  null,
  mapDispatchToProps
)(BucketController);

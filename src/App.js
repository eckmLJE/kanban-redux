import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import Bucket from "./components/Bucket";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="kanban">
          {this.props.buckets &&
            this.props.buckets.map(bucket => (
              <Bucket key={bucket.id} bucket={bucket} />
            ))}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  buckets: state.buckets.buckets
});

export default connect(
  mapStateToProps,
  null
)(App);

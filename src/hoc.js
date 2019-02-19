import React, { Component } from "react";
import NProgress from "./component";

export default (delayMs, options = {}) => Page =>
  class extends Component {
    static getInitialProps = Page.getInitialProps;
    render() {
      return (
        <>
          <Page {...this.props} />
          <NProgress
            options={options}
            showAfterMs={delayMs}
            color={options.color}
            spinner={options.showSpinner}
          />
        </>
      );
    }
  };

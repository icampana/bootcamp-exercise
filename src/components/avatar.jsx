import React from "react";

class Avatar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      url: props.src
    };
  }

  componentDidMount() {
    console.debug("Avatar mounted");
  }

  click() {
    this.setState({
      url: "my new value"
    });
  }

  render() {
    const finalURL = this.state.url;
    return (
      <div>
        <img src={finalURL} alt="" width="100" />
      </div>
    );
  }
}

export default Avatar;

import React from 'react';
import style from './HelloWorldHeader.css';

// Sample code =======================
const propTypes = {
  name: React.PropTypes.string,
};

const defaultProps = {
  name: "World"
};

class HelloWorldHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
    return (
      <div className={style.root}>
        Hello {this.props.name}!
      </div>
    );
  }
}

HelloWorldHeader.propTypes = propTypes;
HelloWorldHeader.defaultProps = defaultProps;

export default HelloWorldHeader;
// End Sample code =======================

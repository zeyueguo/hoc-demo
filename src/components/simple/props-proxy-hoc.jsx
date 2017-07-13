import React, { Component } from 'react';

const propsProxyHoc = WrappedComponent => class extends Component {
 
  handleClick() {
    console.log('click');
  }

  render() {
    return (<WrappedComponent
      {...this.props}
      handleClick={this.handleClick} // 添加props
    />);
  }
};
export default propsProxyHoc;

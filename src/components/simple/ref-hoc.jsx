import React, { Component } from 'react';

const refHoc = WrappedComponent => class extends Component {
  
  componentDidMount() {
    console.log(this.instanceComponent, 'instanceComponent'); // 获取ref实例 this.instanceComponent
  }

  render() {
    return (<WrappedComponent
      {...this.props}
      ref={instanceComponent => this.instanceComponent = instanceComponent} // 设置ref实例 this.instanceComponent
    />);
  }
};
export default refHoc;



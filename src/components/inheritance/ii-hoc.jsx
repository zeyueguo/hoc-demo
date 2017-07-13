import React from 'react';


const iiHoc = WrappedComponent => class extends WrappedComponent { // 通过 extend 继承 WrappedComponet 这时的state是外层组件
    render() {
      console.log(this.state, 'state');
      return super.render();
    }
};

export default iiHoc;
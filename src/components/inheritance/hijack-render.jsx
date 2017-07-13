import React from 'react';

const hijackRenderHoc = config => WrappedComponent => class extends WrappedComponent {
  render() {
    const { style = {} } = config;
    const elementsTree = super.render();  // super.render() 渲染挟持
    console.log(elementsTree, 'elementsTree');
    if (config.type === 'add-style') {
      return <div style={{...style}}>
        {elementsTree}
      </div>;
    } 
    return elementsTree;
  }
};

export default hijackRenderHoc;
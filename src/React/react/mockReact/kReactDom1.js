function render(vnode, container) {
  console.log("vnode>>>>>", vnode);
  // 初次渲染插入dom节点
  const node = createNode(vnode);
  container.appendChild(node);
  // 之后渲染采用diff算法
}

function createNode(vnode) {
  const { type, props } = vnode;
  console.log("type>>>>props", type, props);
  let node;
  if (typeof type === "function") {
    node = type.isReactComponent
      ? updateClassNode(vnode)
      : updateFunctionNode(vnode);
  } else if (type === "TEXT") {
    node = document.createTextNode("");
  } else if (type) {
    node = document.createElement(type);
  } else {
    node = document.createDocumentFragment();
  }
  console.log("node>>>>>", node);
  Object.keys(props)
    .filter((item) => item !== "children")
    .forEach((item) => {
      if (item.startsWith("on")) {
        node.addEventListener(item.slice(2).toLocaleLowerCase(), props[item]);
      } else {
        node[item] = props[item];
      }
    });
  reconilChildren(props.children, node);
  return node;
}

function reconilChildren(children, parentNode) {
  children.forEach((child) => {
    if (Array.isArray(child)) {
      child.forEach((item) => {
        render(item, parentNode);
      });
    } else {
      render(child, parentNode);
    }
  });
}

function updateFunctionNode(vnode) {
  const { type, props } = vnode;
  const node = type(props);
  const vvnode = createNode(node);
  return vvnode;
}

function updateClassNode(vnode) {
  const { type, props } = vnode;
  const node = new type(props);
  const vvnode = node.render();
  return createNode(vvnode);
}

export default {
  render,
};

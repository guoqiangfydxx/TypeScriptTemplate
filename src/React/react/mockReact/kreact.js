import { defaultCipherList } from "constants";

function createElement(type, props, ...children) {
  // 创建一个虚拟dom节点
  // console.log("react", type, props, children);
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextNode(child)
      ),
    },
  };
}

function cloneElement(element, props, ...children) {
  const newProps = Object.assign({}, element, props)
  let defaultProps
  if (element.type && element.type.defaultProps) {
    defaultProps = element.type.defaultProps
  }
  for(let propName in props) {
    if (props[propName] === undefined && defaultProps !== undefined) {
      newProps[propName] = defaultProps[propName]
    } else {
      newProps[propName] = props[propName]
    }
  }
  newProps.children = children.map((child) =>
    typeof child === "object" ? child : createTextNode(child)
  )
  return {
    type: element.type,
    props: newProps
  }
}

function createTextNode(text) {
  return {
    type: "TEXT",
    props: {
      children: [],
      nodeValue: text,
    },
  };
}

export default {
  createElement,
  cloneElement
};

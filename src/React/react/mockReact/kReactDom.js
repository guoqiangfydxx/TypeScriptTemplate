import { PLACEMENT } from "./constant";
// 下一个子任务
let nextUnitOfWork = null;
// work In Progress 工作中的fiber root
let winRoot = null;
// 现在的根节点
let currentRoot = null;
function render(vnode, container) {
  winRoot = {
    node: container,
    props: {
      children: [vnode],
    },
    base: currentRoot,
  };
  nextUnitOfWork = winRoot;
}

function createNode(vnode) {
  const { type, props } = vnode;
  //   console.log("type>>>>props", type, props);
  let node;
  if (type === "TEXT") {
    node = document.createTextNode("");
  } else if (type) {
    node = document.createElement(type);
  }
  Object.keys(props)
    .filter((item) => item !== "children")
    .forEach((item) => {
      if (item.startsWith("on")) {
        node.addEventListener(item.slice(2).toLocaleLowerCase(), props[item]);
      } else {
        node[item] = props[item];
      }
    });
  return node;
}

// 协调子节点
function reconcilerChildren(workInProgressFiber, children) {
  // 1. 针对每一个子节点都要构建一个新的fiber
  let prevFiber = null;
  let oldFiber = workInProgressFiber.base && workInProgressFiber.base.child;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    let newFiber = null;
    newFiber = {
      type: child.type,
      props: child.props,
      node: null,
      base: null,
      parent: workInProgressFiber,
      effectTag: PLACEMENT,
    };
    if (oldFiber) {
      oldFiber = oldFiber.sibling;
    }
    if (i === 0) {
      workInProgressFiber.child = newFiber;
    } else {
      prevFiber.sibling = newFiber;
    }
    prevFiber = newFiber;
  }
}

// 更新当前节点
function updateHostComponent(fiber) {
  // 先挂载一个node实例
  if (!fiber.node) {
    fiber.node = createNode(fiber);
  }
  // 对children进行协调
  const { children } = fiber.props;
  reconcilerChildren(fiber, children);
}

function updateFunctionComponent(fiber) {
  const { type, props } = fiber;
  const children = type(props);
  reconcilerChildren(fiber, [children]);
}

function updateClassComponent(fiber) {
  const { type, props } = fiber;
  const obj = new type(props);
  const children = obj.render();
  reconcilerChildren(fiber, [children]);
}

function performUnitOfWork(fiber) {
  const { type } = fiber;
  // 执行当前子任务
  if (typeof type === "function") {
    type.isReactComponent
      ? updateClassComponent(fiber)
      : updateFunctionComponent(fiber);
  } else {
    updateHostComponent(fiber);
  }

  // 返回下一个子任务
  if (fiber.child) {
    return fiber.child;
  }
  // 如果没有子元素，那么就找兄弟元素
  let nextFiber = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling;
    }
    nextFiber = nextFiber.parent;
  }
}

function workLoop(deadline) {
  // 1. 执行子任务
  while (nextUnitOfWork && deadline.timeRemaining() > 1) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
  }
  // 2. 返回下一个子任务
  // 3. 当没有任何子任务的时候，就可以提交
  if (!nextUnitOfWork && winRoot) {
    // 提交
    commitRoot(winRoot.child);
  }
}

function commitRoot(fiber) {
  commitWorker(fiber);
  currentRoot = winRoot;
  winRoot = null;
}

function commitWorker(fiber) {
  if (!fiber) {
    return;
  }
  let parentFiber = fiber.parent;
  while (!parentFiber.node) {
    parentFiber = parentFiber.parent;
  }
  const parentNode = parentFiber.node;
  // 只是新增
  if (fiber.effectTag === PLACEMENT && fiber.node !== null) {
    parentNode.appendChild(fiber.node);
  }
  commitWorker(fiber.child);
  commitWorker(fiber.sibling);
}

window.requestIdleCallback(workLoop);

export default {
  render,
};

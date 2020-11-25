import { PLACEMENT, UPDATE, DELETION } from "./constant";
// 下一个子任务
let nextUnitOfWork = null;
// work In Progress 工作中的fiber root
let winRoot = null;
// 现在的根节点
let currentRoot = null;

let wipFiber = null;
let hookIndex = null;
let deletions = null;

function render(vnode, container) {
  winRoot = {
    node: container,
    props: {
      children: [vnode],
    },
    base: currentRoot,
  };
  deletions = [];
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
  updateNode(node, {}, props);
  return node;
}

function updateNode(node, prevProps, props) {
  Object.keys(prevProps)
    .filter((item) => item !== "children")
    .forEach((item) => {
      if (item.startsWith("on")) {
        node.removeEventListener(
          item.slice(2).toLocaleLowerCase(),
          props[item]
        );
      } else if (!props.hasOwnProperty(item)) {
        node[item] = "";
      }
    });
  Object.keys(props)
    .filter((item) => item !== "children")
    .forEach((item) => {
      if (item.startsWith("on")) {
        node.addEventListener(item.slice(2).toLocaleLowerCase(), props[item]);
      } else {
        node[item] = props[item];
      }
    });
}

// 协调子节点
function reconcilerChildren(workInProgressFiber, children) {
  // 1. 针对每一个子节点都要构建一个新的fiber
  // 这里只是针对相同位置上的新老节点进行了对比，没有考虑移动的情况
  let prevFiber = null;
  let oldFiber = workInProgressFiber.base && workInProgressFiber.base.child;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    let newFiber = null;
    const sameType = child && oldFiber && child.type === oldFiber.type;
    if (sameType) {
      // 更新节点
      newFiber = {
        type: oldFiber.type,
        props: child.props,
        node: oldFiber.node,
        base: oldFiber,
        parent: workInProgressFiber,
        effectTag: UPDATE,
      };
    }
    if (!sameType && child) {
      // 新增节点
      newFiber = {
        type: child.type,
        props: child.props,
        node: null,
        base: null,
        parent: workInProgressFiber,
        effectTag: PLACEMENT,
      };
    }
    if (!sameType && oldFiber) {
      // 删除节点,最后提交的时候最后统一处理，每一次重新遍历的时候都需要初始化
      oldFiber.effectTag = DELETION;
      deletions.push(oldFiber);
    }
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
  wipFiber = fiber;
  wipFiber.hooks = [];
  hookIndex = 0;
  const children = type(props);
  reconcilerChildren(fiber, [children]);
}

function updateClassComponent(fiber) {
  const { type, props } = fiber;
  const obj = new type(props);
  const children = obj.render();
  reconcilerChildren(fiber, [children]);
}

function updateFragmentComponent(fiber) {
  const { children } = fiber.props;
  reconcilerChildren(fiber, children);
}

function performUnitOfWork(fiber) {
  const { type } = fiber;
  // 执行当前子任务
  if (typeof type === "function") {
    type.isReactComponent
      ? updateClassComponent(fiber)
      : updateFunctionComponent(fiber);
  } else if (type) {
    updateHostComponent(fiber);
  } else {
    updateFragmentComponent(fiber);
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

  window.requestIdleCallback(workLoop);
}

function commitRoot(fiber) {
  deletions.forEach(commitWorker);
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
  } else if (fiber.effectTag === UPDATE && fiber.node) {
    updateNode(fiber.node, fiber.base.props, fiber.props);
  } else if (fiber.effectTag === DELETION) {
    commitDeletions(fiber, parentNode);
  }
  commitWorker(fiber.child);
  commitWorker(fiber.sibling);
}

function commitDeletions(fiber, parentNode) {
  if (fiber.node) {
    parentNode.removeChild(fiber.node);
  } else {
    commitDeletions(fiber.child, parentNode);
  }
}

window.requestIdleCallback(workLoop);

export function useState(init) {
  const oldHook = wipFiber.base ? wipFiber.base.hooks[hookIndex] : null;
  const hook = {
    data: oldHook?.data ?? init,
    queue: [],
  };
  const actions = oldHook?.queue ?? [];
  actions.forEach((action) => {
    hook.data = action;
  });
  const setData = (action) => {
    hook.queue.push(action);
    winRoot = {
      node: currentRoot.node,
      props: currentRoot.props,
      base: currentRoot,
    };
    nextUnitOfWork = winRoot;
    deletions = [];
  };
  wipFiber.hooks.push(hook);
  hookIndex++;
  return [hook.data, setData];
}

export default {
  render,
};

import React from 'react';
// function FCCounter(props: Props){
//     const { label, count } = props
//     return (
//         <div>
//             <span>
//                 {label}: {count}
//             </span>
//             <p>函数组件</p>
//         </div>
//     )
// }
var FCCounter = function (props) {
    var label = props.label, count = props.count;
    return (React.createElement("div", null,
        React.createElement("span", null,
            label,
            ": ",
            count),
        React.createElement("p", null, "\u51FD\u6570\u7EC4\u4EF6")));
};
export default FCCounter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25hbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZ1bmN0aW9uYWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQTtBQUt6QixvQ0FBb0M7QUFDcEMscUNBQXFDO0FBQ3JDLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEIscUJBQXFCO0FBQ3JCLG1DQUFtQztBQUNuQyxzQkFBc0I7QUFDdEIsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQixRQUFRO0FBQ1IsSUFBSTtBQUVKLElBQU0sU0FBUyxHQUFvQixVQUFBLEtBQUs7SUFDNUIsSUFBQSxtQkFBSyxFQUFFLG1CQUFLLENBQVU7SUFDOUIsT0FBTyxDQUNIO1FBQ0k7WUFDSyxLQUFLOztZQUFJLEtBQUssQ0FDWjtRQUNQLDBEQUFXLENBQ1QsQ0FDVCxDQUFBO0FBQ0wsQ0FBQyxDQUFBO0FBQ0QsZUFBZSxTQUFTLENBQUEifQ==
import React from 'react'
interface Props {
    label: string,
    count: number
}
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

const FCCounter: React.FC<Props> = props => {
    const { label, count } = props
    return (
        <div>
            <span>
                {label}: {count}
            </span>
            <p>函数组件</p>
        </div>
    )
}
export default FCCounter
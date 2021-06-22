import React, { useState } from "react";
import Dictionary from "./dictionary";
export default React.memo(function DictionaryBox(props: any) {
  const [list, setList] = useState(
    new Dictionary(
      [
        {
          name: "履行中",
          value: 1,
        },
        {
          name: "正常到期",
          value: 2,
        },
        {
          name: "原车续租",
          value: 3,
        },
        {
          name: "换车续租",
          value: 4,
        },
        {
          name: "提前结束",
          value: 5,
        },
      ],
      []
    )
  );

  return (
    <div>
      <h2>字典类</h2>
      <p>----------------------列表----------------</p>
      <ul>
        {list.getDicList().map((item) => {
          const { name, value } = item;
          return (
            <li value={value} key={value}>
              {name}
            </li>
          );
        })}
      </ul>
      <p>----------------------映射------------</p>
      <div>
        <p>1对应的当前状态为：{list.getEnums()["1"]}</p>
        <p>5对应的当前状态为：{list.getEnums()["5"]}</p>
      </div>
    </div>
  );
});

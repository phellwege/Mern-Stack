import React, { useState } from "react";
import Display from "./Display";

const Tabs = (props) => {
  const [tabs, setTabs] = useState([
    {
      label: "tab 1",
      content: "tab 1's content",
      click: true,
    },
    {
      label: "tab 2",
      content: "tab 2's content",
      click: false,
    },
    {
      label: "tab 3",
      content: "tab 3's content",
      click: false,
    },
  ])

  const [selected_i, setSelected_i] = useState(0);

  const tabClickHandler = (e, idx, tab) => {
        console.log('clicked -> ', idx);
        setSelected_i(idx);
        console.log(tab)
}

return <div>
        {
            tabs.map((tab, i) => {
                return <button className="" key={i} onClick={ (e) => {
                    tabClickHandler(e, i, tab)
                }}>{tab.label}</button>
            })
        }
        <hr/>
        <Display theTab={tabs[selected_i].content}/>
    </div>
}

export default Tabs;
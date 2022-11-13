const Tabs = ({ switchTabs, tabIndex }) => {
  const tabs = [{ index: 1, title: 'Todo' }, { index: 2, title: 'In-Progress'}, { index: 3, title: 'Done'}];
  return (
    <div className="tab-bar">
      <ul className="tabs">
        {tabs.map((tab) => (
          <li key={tab.index} className={`tab-item ${tabIndex === tab.index && 'active'}`}>
            <button className="tab-button" onClick={() => switchTabs(tab.index)}>{tab.title}{tab.index}</button>
          </li>
        ))}
        {/* <li className={`tab-item ${tabIndex === 1 && 'active'}`}>
          <button className="tab-button" onClick={() => switchTabs(1)}>In-Progress</button>
        </li>
        <li className={`tab-item ${tabIndex === 2 && 'active'}`}>
          <button className="tab-button" onClick={() => switchTabs(2)}>Done</button>
        </li> */}
      </ul>
    </div>
  )
};

export default Tabs;

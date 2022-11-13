const Tabs = ({ switchTabs, tabIndex }) => {
  const tabs = [{ index: 1, title: 'Todo' }, { index: 2, title: 'In-Progress'}, { index: 3, title: 'Done'}];
  return (
    <div className="tab-bar">
      <ul className="tabs">
        {tabs.map((tab) => (
          <li key={tab.index} className={`tab-item ${tabIndex === tab.index && 'active'}`}>
            <button className="tab-button" onClick={() => switchTabs(tab.index)}>{tab.title}</button>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Tabs;

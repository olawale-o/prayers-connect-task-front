const Tabs = ({ switchTabs, tabIndex }) => {
  const tabs = [{ index: 1, title: 'Todo' }, { index: 2, title: 'In-Progress'}, { index: 3, title: 'Done'}];
  return (
    <div className="tab-bar" role="tablist" aria-label="Status">
      <ul className="tabs">
        {tabs.map((tab) => (
          <li role={tab.title} key={tab.index} className={`tab-item ${tabIndex === tab.index && 'active'}`}>
            <button
              className="tab-button"
              onClick={() => switchTabs(tab.index)}
              role="tab"
              aria-selected={tabIndex === tab.index && true}
              aria-controls={`tab-${tab.index}`}
            >
              {tab.title}
              </button>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Tabs;

const { useState } = React;
const { createRoot } = ReactDOM;

// Changelog data
const changelogData = [
  {
    version: "1.2.0",
    date: "Jan 20, 2026",
    changes: [
      { type: "added", text: "Added dark mode" },
      { type: "fixed", text: "Fixed login crash" },
      { type: "changed", text: "Improved dashboard UI" }
    ]
  },
  {
    version: "1.1.0",
    date: "Jan 5, 2026",
    changes: [
      { type: "added", text: "User profile page" },
      { type: "fixed", text: "Password reset bug" }
    ]
  }
];

// React Changelog Component
function Changelog() {
  const [collapsedVersions, setCollapsedVersions] = useState({});

  const toggleCollapse = (version) => {
    setCollapsedVersions(prev => ({
      ...prev,
      [version]: !prev[version]
    }));
  };

  return React.createElement(
    "div",
    { className: "changelog" },
    React.createElement("h2", null, "📋 Changelog"),

    changelogData.map(log => {
      const isCollapsed = collapsedVersions[log.version] || false;

      return React.createElement(
        "div",
        { key: log.version, className: "version" },

        // HEADER (clickable)
        React.createElement(
          "div",
          {
            className: "header",
            onClick: () => toggleCollapse(log.version)
          },
          React.createElement(
            "h3",
            null,
            `v${log.version} `,
            React.createElement("span", null, `– ${log.date}`)
          ),
          React.createElement(
            "span",
            { className: "arrow" },
            isCollapsed ? "▶" : "▼"
          )
        ),

        // CONTENT (collapsible)
        !isCollapsed &&
          React.createElement(
            "ul",
            { className: "content" },
            log.changes.map((change, index) =>
              React.createElement(
                "li",
                { key: index, className: change.type },
                change.text
              )
            )
          )
      );
    })
  );
}


// Render to DOM
const root = createRoot(document.getElementById("root"));
root.render(React.createElement(Changelog));
// THEME TOGGLE
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  themeToggle.textContent =
    document.body.classList.contains("dark")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
});
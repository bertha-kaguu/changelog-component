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
  return (
    React.createElement("div", { className: "changelog" },
      React.createElement("h2", null, "📋 Changelog"),
      changelogData.map(log =>
        React.createElement("div", { key: log.version, className: "version" },
          React.createElement("h3", null,
            `v${log.version} `,
            React.createElement("span", null, `– ${log.date}`)
          ),
          React.createElement("ul", null,
            log.changes.map((change, index) =>
              React.createElement("li", { key: index, className: change.type }, change.text)
            )
          )
        )
      )
    )
  );
}

// Render to DOM
const root = createRoot(document.getElementById("root"));
root.render(React.createElement(Changelog));

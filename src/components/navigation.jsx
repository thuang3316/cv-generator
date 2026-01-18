import '../styles/navigation.css'

export function Navigation({ currentContent, handleCurrentContent }) {
  const items = [
    "General",
    "Education",
    "Projects",
    "Work Experience",
    "Skills",
  ];

  return (
    <nav>
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => handleCurrentContent(item)}
          className={currentContent === item ? "selected" : ""}
        >
          {item}
        </button>
      ))}
    </nav>
  );
}

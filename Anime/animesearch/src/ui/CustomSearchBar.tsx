import type { CustomSearchBarProps } from "../interfaces/types/prop.types";

export const CustomSearchBar: React.FC<CustomSearchBarProps> = ({
  value,
  onChange,
  onSubmit,
  placeholder = "Search...",
}) => (
  <form onSubmit={onSubmit} className="w-full max-w-md mx-auto flex my-6">
    <input
      type="text"
      className="search-input"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-label="Search"
    />
    <button
      type="submit"
      className="btn-secondary rounded-l-none rounded-r-xl px-4 flex items-center gap-2 disabled:opacity-40"
      disabled={!value.trim()}
      title="Click to search"
    >
      {/* Search Icon (SVG) */}
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <circle cx={11} cy={11} r={8} />
        <line x1={21} y1={21} x2={16.65} y2={16.65} />
      </svg>
    </button>
  </form>
);

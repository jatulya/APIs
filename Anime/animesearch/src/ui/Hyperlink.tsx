import type { HyperlinkProps } from "../interfaces/types/prop.types";

function Hyperlink({ title, href }: HyperlinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="card-link"
    >
      {title}
    </a>
  );
}

export default Hyperlink;

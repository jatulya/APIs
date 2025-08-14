import type { TopAnimeLink } from "../interfaces/types/objectTypes";
import { Header } from "../ui/Header";
import Hyperlink from "../ui/Hyperlink";

function Sidebar() {
  const links: TopAnimeLink[] = [{
    id: "1",
    title: "Naruto Shippuden"
  }, {
    id: "2",
    title: "One Piece"
  },
  {
    id: "3",
    title: "Bleach"
  },
];
  return (
    <aside className="w-84 ">
      <Header variant="secondary" title="Top Anime" claassName="items-left-justify"/>
      <nav className="col-flex items-left-justify ml-8 mr-3">
        {links.map((link) => (
          <Hyperlink
            key={link.id}
            href='#'
            title={link.title}
          />
        ))}     
      </nav>
    </aside>
  );
}

export default Sidebar;

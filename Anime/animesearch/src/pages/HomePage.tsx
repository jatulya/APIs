import Sidebar from "../components/Sidebar";
import { Header } from "../ui/Header";

export const HomePage = () => {
  return (
    <div>
      <Header title="Anime Search" />
      <div className="flex min-h-screen ">
        <Sidebar />
        <div className="flex-1">
          {/* Place your main content here */}
        </div>
      </div>
    </div>
  );
};

import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen max-w-7xl mx-auto">
        {/* sidebar */}
        <Sidebar />
        <Feed />
        <Widgets />
        {/* Widget */}

        {/* Modal */}
      </main>
    </div>
  );
}

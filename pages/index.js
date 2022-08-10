import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

export default function Home({ newResults }) {
  return (
    <div>
      <main className="flex min-h-screen  mx-auto">
        {/* sidebar */}
        <Sidebar />
        <Feed />
        <Widgets newResults={newResults.articles} />
        {/* Widget */}

        {/* Modal */}
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const newResults = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/in.json"
  ).then((res) => res.json());
  return {
    props: {
      newResults,
    },
  };
}

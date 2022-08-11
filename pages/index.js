import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

export default function Home({ newResults, randomUsersResults }) {
  return (
    <div>
      <main className="flex min-h-screen  mx-auto">
        {/* sidebar */}
        <Sidebar />
        <Feed />
        <Widgets
          newResults={newResults.articles}
          randomUsersResults={randomUsersResults.results}
        />
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

  const randomUsersResults = await fetch(
    "https://randomuser.me/api/?results=30&inc=name,login,picture"
  ).then((res) => res.json());

  return {
    props: {
      newResults,
      randomUsersResults,
    },
  };
}

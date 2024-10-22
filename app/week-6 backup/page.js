import ItemList from "./item-list";

export default function Page(props) {
  return (
    <div className="bg-violet-950 min-h-screen">
      <main className="p-4 bg-violet-950 min-h-screen">
        <h1 className="text-cyan-300 text-3xl font-extrabold pl-4">
          Shopping List
        </h1>

        <header>
          <ItemList />
        </header>
      </main>
    </div>
  );
}

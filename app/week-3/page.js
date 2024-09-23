import ItemList from "./item-list";

export default function Page({ props }) {
  return (
    <main className="m-6">
      <h1 className="text-cyan-400 text-3xl font-extrabold">Shopping List</h1>

      <header>
        <ItemList />
      </header>
    </main>
  );
}

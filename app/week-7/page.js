import ItemList from "./item-list";

export default function Page() {
  return (
    <div className="bg-blue-900 min-h-screen flex justify-center items-center">
      <main className="p-6 bg-white shadow-lg  max-w-4xl w-full">
        {/* Header Section with increased box height */}
        <h1 className="text-5xl font-extrabold text-blue-700 text-center mb-8 shadow-md p-4">
          Shopping List
        </h1>

        {/* Content Section */}
        <header className=" bg-white p-4 shadow-md">
          <ItemList />
        </header>
      </main>
    </div>
  );
}

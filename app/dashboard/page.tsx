import Image from "next/image"

export default function Dashboard() {
  const cats = [
    {
      id: 1,
      name: "Luna",
      breed: "Persian",
      age: "2 years",
      image: "/cats/cat1.jpg"
    },
    {
      id: 2,
      name: "Milo",
      breed: "British Shorthair",
      age: "1 year",
      image: "/cats/cat2.jpg"
    },
    {
      id: 3,
      name: "Oliver",
      breed: "Ragdoll",
      age: "3 years",
      image: "/cats/cat3.jpg"
    },
    {
      id: 4,
      name: "Nala",
      breed: "Siamese",
      age: "2 years",
      image: "/cats/cat4.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-orange-50 p-10">

      {/* TITLE */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-orange-600">
          Cat Adoption Dashboard
        </h1>
        <p className="text-gray-500">
          Find your new furry friend and give them a loving home.
        </p>
      </div>

      {/* SEARCH */}
      <div className="flex gap-4 mb-8">
        <input
          type="text"
          placeholder="Search cats..."
          className="border rounded-lg px-4 py-2 w-60"
        />

        <select className="border rounded-lg px-4 py-2">
          <option>All Breeds</option>
          <option>Persian</option>
          <option>Siamese</option>
          <option>Ragdoll</option>
        </select>
      </div>

      {/* CAT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {cats.map((cat) => (
          <div
            key={cat.id}
            className="bg-white rounded-xl shadow-md p-4 text-center"
          >

            <Image
              src={cat.image}
              alt={cat.name}
              width={300}
              height={200}
              className="rounded-lg mx-auto"
            />

            <h2 className="text-xl font-semibold mt-3">{cat.name}</h2>

            <p className="text-gray-500">{cat.breed}</p>
            <p className="text-gray-400 text-sm">{cat.age}</p>

            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              Adopt
            </button>

          </div>
        ))}

      </div>

    </div>
  )
}
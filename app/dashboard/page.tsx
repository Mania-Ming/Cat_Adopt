import Image from "next/image"

export default function Dashboard() {
  const cats = [
    {
      id: 1,
      name: "Jhemer Whiskers",
      breed: "Persian",
      age: "2 years",
      image: "/cats/cat1.jpg"
    },
    {
      id: 2,
      name: "Luna",
      breed: "British Shorthair",
      age: "1 year",
      image: "/cats/cat2.jpg"
    },
    {
      id: 3,
      name: "Bella",
      breed: "Ragdoll",
      age: "3 years",
      image: "/cats/cat3.jpg"
    },
    {
      id: 4,
      name: "Milo",
      breed: "Siamese",
      age: "2 years",
      image: "/cats/cat4.jpg"
    }
  ]

  return (
    <div className="dashboard">

      {/* TOP BAR */}
      <div className="topbar">

        <button className="hamburger">☰</button>

        <div className="search-area">
          <input
            type="text"
            placeholder="Search by name..."
          />

          <select>
            <option>All Breeds</option>
            <option>Persian</option>
            <option>Siamese</option>
            <option>Ragdoll</option>
          </select>
        </div>

      </div>

      {/* TITLE */}
      <div className="title">
        <h2>Available Cats</h2>
        <p>Browse our lovely cats waiting for a new home</p>
      </div>

      {/* CAT GRID */}
      <div className="cats-grid">

        {cats.map((cat) => (
          <div key={cat.id} className="cat-card">

            <Image
              src={cat.image}
              alt={cat.name}
              width={300}
              height={200}
              className="cat-img"
            />

            <div className="cat-info">

              <h3>{cat.name}</h3>

              <p>Age: {cat.age}</p>
              <p>Breed: {cat.breed}</p>

              <button className="adopt-btn">
                ♡ Adopt me
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}
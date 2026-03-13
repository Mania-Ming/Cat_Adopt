"use client"

import { useState } from "react"
import Image from "next/image"

export default function Dashboard() {

  const [openMenu, setOpenMenu] = useState(false)

  const [showModal, setShowModal] = useState(false)
  const [selectedCat, setSelectedCat] = useState<any>(null)

  const [page, setPage] = useState("cats")

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
      breed: "Siamese",
      age: "1 year",
      image: "/cats/cat2.jpg"
    },
    {
      id: 3,
      name: "Bella",
      breed: "Ragdoll",
      age: "2 years",
      image: "/cats/cat3.jpg"
    },
    {
      id: 4,
      name: "Milo",
      breed: "British Shorthair",
      age: "1 year",
      image: "/cats/cat4.jpg"
    }
  ]

  const history = [
    {
      id:1,
      name:"Jhemer Whiskers",
      status:"Pending",
      date:"May 10, 2026"
    },
    {
      id:2,
      name:"Luna",
      status:"Approved",
      date:"May 5, 2026"
    }
  ]

  /* LOGOUT FUNCTION */
  const logoutUser = () => {
    localStorage.clear()
    sessionStorage.clear()
    window.location.href = "/"
  }

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <div className={`sidebar ${openMenu ? "show" : ""}`}>

        <h3>Cat Adoption</h3>
        <p>User Panel</p>

        <button 
          className="side-btn"
          onClick={()=>setPage("cats")}
        >
          Available Cats
        </button>

        <button 
          className="side-btn"
          onClick={()=>setPage("history")}
        >
          View Adoption History
        </button>

        <p className="logout" onClick={logoutUser}>Logout</p>

      </div>


      {/* TOPBAR */}
      <div className="topbar">

        <button
          className="hamburger"
          onClick={() => setOpenMenu(!openMenu)}
        >
          ☰
        </button>

        <div className="search-area">
          <input placeholder="Search by name..." />

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

        {page === "cats" && (
          <>
            <h2>Available Cats</h2>
            <p>Browse our lovely cats waiting for a new home</p>
          </>
        )}

        {page === "history" && (
          <>
            <h2>Adoption History</h2>
            <p>Your previous adoption requests</p>
          </>
        )}

      </div>


      {/* CAT GRID */}
      {page === "cats" && (
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

              <button
                className="adopt-btn"
                onClick={()=>{
                  setSelectedCat(cat)
                  setShowModal(true)
                }}
              >
                ♡ Adopt me
              </button>

            </div>

          </div>
        ))}

      </div>
      )}


      {/* ADOPTION HISTORY */}
      {page === "history" && (
        <div className="history-box">

          <table className="history-table">

            <thead>
              <tr>
                <th>Cat Name</th>
                <th>Date Requested</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {history.map((item)=>(
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>
                    <span className={`status ${item.status.toLowerCase()}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>
      )}


      {/* ADOPTION MODAL */}
      {showModal && (
        <div className="modal-overlay">

          <div className="adoption-modal">

            <div className="modal-header">

              <h3>Adoption Request</h3>

              <button
                className="close-btn"
                onClick={()=>setShowModal(false)}
              >
                ✕
              </button>

            </div>


            <div className="selected-cat">

              <p>Selected Cat:</p>

              <h4>{selectedCat?.name}</h4>

              <span>
                {selectedCat?.breed} • {selectedCat?.age}
              </span>

            </div>


            <form className="adoption-form">

              <label>Your Name</label>
              <input placeholder="Enter your fullname" />

              <label>Contact Number</label>
              <input placeholder="Enter your phone number" />

              <label>Address</label>
              <input placeholder="Enter your complete address" />

              <div className="modal-buttons">

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={()=>setShowModal(false)}
                >
                  Cancel
                </button>

                <button className="submit-btn">
                  Submit Request
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

    </div>
  )
}
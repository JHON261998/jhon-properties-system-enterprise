import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

function AppLayout({ children }) {
  return (
    <>
      <Header />

      <div className="layout">
        <Sidebar />

        <main className="workspace">
          {children}
        </main>
      </div>
    </>
  )
}

export default AppLayout
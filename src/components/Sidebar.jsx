import { NavLink } from "react-router-dom";
import navigation from "../data/navigation";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>JPS</h2>

      <nav>
        <ul>
          {navigation.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
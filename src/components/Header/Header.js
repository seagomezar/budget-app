import iconUser from "../../images/icon-user.png"
import "./Header.css"

export default function Header(params) {
  return <header className="Header">
    <h1>Hello, Jenny</h1>
    <img src={iconUser} alt="Jenny" />
  </header>
}
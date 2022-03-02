import logo from "../icons/logo.svg"

export function Header() {
    return (
        <div>
        <nav className="nav-container">
            <div className="nav-left">
            <img className="logo" src={logo} alt="react logo" />
            <h1 className="react">ReactFacts</h1>
            </div>

        <div className="nav-right">
            <h4 className="right-nav" >React Course-Project 1</h4>
            </div>

        </nav>
        </div>
    )
}
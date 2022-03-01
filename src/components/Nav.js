import logo from "../icons/logo.svg"

export function Nav() {
    return (
        <nav>
            <img className="logo" src={logo} alt="react logo" />
            <h1>Reasons i'm excited to learn React</h1>
        </nav>
    )
}
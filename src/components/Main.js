import logo from "../icons/logo.svg"


export function Main() {
    return (
        <div>
            <img className="logo" src={logo} alt="react logo" />
            
            <h1>Fun facts about React</h1>

            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan walke</li>
                <li>Has well over 100k starts on Github</li>
                <li>Is maintained by facebok</li>
                <li>Powers thousands of en enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}
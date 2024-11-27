import Logo from "./Logo";

export default function Navbar() {
    return (
        <div className="navbar">
            <Logo/>
            <div className="nav-icons">
                <img src="search.svg" alt="search"/>
                <img src="app.svg" alt="app"/>
                <img src="expand.svg" alt="expand"/>
                <div className="notifications">
                    <img src="notifications.svg" alt="notification"/>
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="default.jpg" alt="profile-photo"/>
                    <span>Marya</span>
                </div>
                <img src="settings.svg" alt="settings"/>
            </div>
        </div>
    )
}


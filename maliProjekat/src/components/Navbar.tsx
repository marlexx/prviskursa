
export default function Navbar(props : any) {
    return (
        <nav className={props.mode === 'dark' ? "nav dark" : "nav light"}>
        <img src="/react-logo.png" className="nav--icon"></img>
        <h1 className={props.mode === 'dark' ? "nav--logo_text-dark" : "nav--logo_text-light"}>Staša{'<3'}</h1>
        <h2 className={props.mode === 'dark' ? "nav--title_text-dark" : "nav--logo_title-light"}>Staša Course - Project 1</h2>
        <div 
                className="toggler" 
            >
                <p className="toggler--dark">Dark</p>
                
                <div 
                    className="toggler--slider"
                    onClick={props.changeMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--light">Light</p>
            </div>
        </nav>
    )
}

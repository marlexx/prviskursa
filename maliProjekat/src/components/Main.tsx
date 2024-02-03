
function Main(props : any) {
    console.log('main ' + props.mode)
    return (
        <div className={props.mode === 'dark' ? "main" : "main light"}>
            <h1 className={props.mode === 'dark' ? "main--title" : "main--title light"}>Fun facts about Staša</h1>
            <div className="main--content">
                <ul className={props.mode === 'dark' ? "main--li" : "main--li light"}>
                    <li>blabla</li>
                    <li>staša</li>
                    <li>{'<'}3</li>
                    <li>kurac</li>
                    <li>kukica</li>
                </ul>
            </div>
        </div>
    )
}

export default Main
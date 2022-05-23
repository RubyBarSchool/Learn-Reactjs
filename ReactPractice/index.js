function HeaderComponent(){
    return (
        <header>
            <nav>
                Header
            </nav>
        </header>
    )
}

function FooterComponent(){
    return (
        <footer>
            <nav>
                Footer
            </nav>
        </footer>
    )
}

function MainContent(props){
    return (
        <div>
        <HeaderComponent />
        <h1>I'm learning React!!</h1>
        <h1>{props.text}</h1>
        <FooterComponent />
        </div>
    )
}

ReactDOM.render(
    <div>
        <MainContent text="hihi props" />
    </div>
     ,
     document.getElementById("root")
     )


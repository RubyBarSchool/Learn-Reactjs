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

function MainContent(){
    return (
        <div>
        <HeaderComponent />
        <h1>I'm learning React!!</h1>
        <FooterComponent />
        </div>
    )
}

ReactDOM.render(
    <div>
        <MainContent />
    </div>
     ,
     document.getElementById("root")
     )


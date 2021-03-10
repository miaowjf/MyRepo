function Header(props){
    return(
        <header>
            <h1>{props.title}
        </header>
    )
}
Header.defaultProps={
    title:'Task Tracker',
}
export default Header

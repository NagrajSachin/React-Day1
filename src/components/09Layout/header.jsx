import Title from './title';

const Header = (props) => {
    return (
        <header>
            <Title title={props.headerTitle}></Title>
            <input type="text" value={props.headerTitle} onChange={(evt) => {
                let title = evt.target.value;
                // Call parent's function her in child - callback method\
                props.changeTitle(title);
            }}/>
        </header>
    )
}

export default Header;
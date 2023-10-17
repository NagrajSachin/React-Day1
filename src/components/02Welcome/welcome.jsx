import './welcome.css';
import newStyle from './welcome.module.css'

const x = 55;
export default x;

// Css Module lets us write code in css files and consume them in javascript objects
const myStyle = {
    fontSize: '20px',
    fontFamily: 'Roboto, sans-serif',
    color: 'red'
}

export const welcome = (
    <div>
        <h2 style={{color: 'blue'}}>Just to say hi!</h2>
        <h3 style={myStyle}>Loading Css module from same file</h3>
        <h4 className="myClass">Loading Css class from css file</h4>
        <h5 className={newStyle.redHeader}>Loading Css module from .css file</h5>
    </div>
)

// CSS Module
// Pros
// By using css modules, namespace conflicts for css classes are avoided
// In Css Module, you send class to multiple components

// Cons
// Styles must be include as objects with a dot or bracket notation
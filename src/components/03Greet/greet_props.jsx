import React from "react";

// class Greet extends React.Component {
//     static defaultProps = {
//         name: 'Nagraj'
//     }

//     render() {
//         return (
//             <h2 className='text-danger display-6'>
//                 Welcome {this.props.name}
//             </h2>
//         )
//     }
// }

// export default Greet;

export default function Greet(props) {
    return (
        (props.name) ? <h2 className='text-info display-3'>Welcome {props.name}</h2> : 
        <h2 className='text-success display-3'>Welcome Nagraj</h2>
    )
}

export function Hello(props) {
    return (
        <React.Fragment>
            <h2 className='text-success dislpay-4'>Welcome {props.title}!</h2>
            <h2 className='text-success display-3'>Welcome Nagraj!</h2>
        </React.Fragment>
    )
}

export function Car(props) {
    return (
        <h2 className='text-warning display-5'>{props.brand.name} - {props.brand.model}</h2>
    )
}

export function SimpleTitle(props) {
    const { showTitle, title } = { ...props };
    if (showTitle) {
        return <h2 className='text-success'>{title}</h2>
    } else {
        return null;
    }
}
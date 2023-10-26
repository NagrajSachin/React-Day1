import { Component } from 'react';

export default class GameComponent extends Component {
    // 1. Constructor for initialization
    constructor() {
        super();
        this.state = { favouriteGame: 'Cricket' };
        console.log('Constructor! ' + this.state.favouriteGame);
    }

    // 2. static getDerivedStateFromProps() - method is called right before rendering the element in the DOM
    // This is the place where you can set the state object based on initial props.
    static getDerivedStateFromProps(props, state) {
        console.log('Static getDerivedStateFromProps:-', props.favGame + ' State:-' + JSON.stringify(state.favouriteGame));

        if (props.favGame) {
            return { favouriteGame: props.favGame };
        } else {
            return { state };
        }
    }

    // 3. componentDidMount() method is called after component is rendered
    // you can do some side-effect kind of things here, anything happening in your application that is not related to UI rendering
    // HTTP Call - Call to the RESTFUL Service
    // Handling Timer Events
    // Calling third party libraries, frameworks.
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favouriteGame: 'Hockey' });
        }, 1000);

        console.log('ComponentDidMount!');
    }

    // 4. shouldComponentUpdate() return boolean value that specifies where react should continue with rendering or not.
    shouldComponentUpdate() {
        console.log('ShouldComponentUpdate!');
        return true;
    }

    // 5. getSnapshotBeforeUpdate() method has access to props and state before the update.
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById('div1').innerHTML = "Before the update, the Favourite Game was: " + `<b>${prevState.favouriteGame}</b>!`;
        console.log('getSnapshotBeforeUpdate!');
        return null;
    }

    // 6. componentDidUpdate() - called after the component is updated in the DOM
    componentDidUpdate() {
        document.getElementById('div2').innerHTML = 'The Update Favourite Game is : ' + `<b>${this.state.favouriteGame}</b>`;
        console.log('ComponentDidUpdate!');
    }

    changeGame() {
        this.setState({ favouriteGame: 'FootBall' });
    }

    render() {
        return (
            <div>
                <h1>My Favourite Game is: <b>{this.state.favouriteGame.toUpperCase()}</b></h1>
                <button type='button' className='btn btn-danger' onClick={this.changeGame.bind(this)}>Change Game!</button>
                <div id='div1' className='text-success'></div><br/>
                <div id='div2' className='text-info'></div><br/>
            </div>
        )
    }
}
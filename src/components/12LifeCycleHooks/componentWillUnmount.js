import React from 'react';

export default class GamePack extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: true };
    }

    removeComp = () => {
        this.setState({ show: false });
    }

    render() {
        let gameComp = null;
        if (this.state.show) {
            gameComp = <Game />
        }

        return (
            <div>
                {gameComp}
                <button type='button' className='btn btn-danger' onClick={this.removeComp}>Unmount!</button>
            </div>
        )
    }
}

class Game extends React.Component {
    constructor() {
        super();
        console.log('Game Constructor - Initialization of resources!');
    }

    componentWillUnmount() {
        alert('Releasing the resources & component Game is about to be unmounted!');
        console.log('ComponentWillUnmount');
    }

    render() {
        return (
            <h1 className='display-1 text-info'>Game World!</h1>
        )
    }
}
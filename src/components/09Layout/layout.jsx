import { useState } from 'react';
import Header from './header';
import Footer from './footer';

export default function Layout() {
    const [title, setTitle] = useState('State and Props!');

    return (
        <div>
            <Header headerTitle={title} changeTitle={(title) => { setTitle(title) }}/>
            <br/>
            <div className='display-3 text-success'>
                This is simple div just to have some space in between!
                <h1>{title}</h1>
            </div>
            <Footer />
        </div>
    )
}
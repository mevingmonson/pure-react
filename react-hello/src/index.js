import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld(props) {

    // return [<Hello />, <World />]

    // return [
    //     React.createElement(Hello, null),
    //     React.createElement(World, null)
    // ]

    // <div>Hello World {props.name}</div>
    // return (
    //     <div>
    //         <Hello /> <World /> {props.name}
    //     </div>
    // );
    // return (
    //     React.createElement('div', {}, 'hello world ', props.name)
    // );
    // return <MyThing />
}

function Hello() {
    return <span>Hello</span>
}

function World() {
    return <span>World</span>
}

function MyThing() {
    return (
        <div className="book">
            <div className="title">
                The Title
            </div>
            <div className="author">
                The Author
            </div>
            <ul className='stats'>
                <li className="rating">5 stars</li>
                <li className='isbn'>12-345678-910</li>
            </ul>
            <div>
                Line1
               {'     '}
                Line2
           </div>
        </div>
    )
}

function Greeting() {
    var username = "root";
    // var username = undefined;
    // var username = null;
    // var username = false;
    // var username = true;

    var isValid = true;
    return (
        <div>
            <span>{username ? 'Mevin ' : 'Mevin not valid '}</span>
            <br></br>
            <span>
                {isValid && 'This will display'}
                {!isValid && 'not valid'}
            </span>
            {alert('hello')}
        </div>
    )
}

ReactDOM.render(
    // <HelloWorld name={"Mevin"} />, document.querySelector('#root')
    <Greeting />, document.querySelector('#root')
);
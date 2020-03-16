import React from 'react'

const Nav = ({ activeTab, onTabChange }) => (
    <nav className="app-nav">
        <ul>
            <li className={`app-nav-item ${activeTab === 0 && 'selected'}`}>
                <NavLink index={0} onClick={onTabChange}>Items</NavLink>
                {/* <a onClick={() => onTabChange(0)}>Items</a> */}
            </li>
            <li className={`app-nav-item ${activeTab === 1 && 'selected'}`}>
                {/* <a onClick={() => onTabChange(1)}>Cart</a> */}
                <NavLink index={1} onClick={onTabChange}>Cart</NavLink>
            </li>

        </ul>
    </nav>
);


export default Nav;

class NavLink extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.index = this.props.index;
    // }

    handleClick = () => {
        this.props.onClick(this.props.index);
    }

    render() {
        return (
            <a onClick={this.handleClick}>
                {this.props.children}
            </a>
        )
    }
}



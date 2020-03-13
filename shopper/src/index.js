import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Layout extends React.Component {
    state = {
        showSidebar: false
    }

    toggleSidebar = () => {
        this.setState({
            showSidebar: !this.state.showSidebar
        });
    }

    render() {
        const { showSidebar } = this.state;
        return (
            <div className="layout">
                {showSidebar &&
                    <Sidebar
                        onHide={this.toggleSidebar}>
                        some sidebar content
                    </Sidebar>
                }
                <Content
                    isSidebarVisible={showSidebar}
                    onShowSidebar={this.toggleSidebar}>
                    some content here
                </Content>
            </div>
        );
    }
}

const Content = ({ children, isSidebarVisible, onShowSidebar }) => (
    <div className="content">
        {children}
        {!isSidebarVisible && (
            <button onClick={onShowSidebar}>
                Show
            </button>
        )}
    </div>
);

const Sidebar = ({ onHide, children }) => (
    <div className="sidebar">
        {children}
        <button onClick={onHide}>
            Hide
      </button>
    </div>
);

class ControlledInput extends React.Component {
    state = { text: 'qw' };

    handleChange = (event) => {
        this.setState({
            text: 'lop'
        });
    };

    render() {
        return (
            <input type="text"
                value={this.state.text}
                onChange={this.handleChange} />
        );
    }
}
ReactDOM.render(<Layout />, document.getElementById('root'));
// ReactDOM.render(<ControlledInput />, document.getElementById('root'));


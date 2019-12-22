import React from 'react';

class Header extends React.Component {
    render(){
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">PDF File processing</a>
                </nav>
            </div>
        )
    }
}

export default Header;
import React from 'react';
import './header.scss'
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            formOpen: true
        }
    }
    onAvatarClick = () => {
        this.setState((prevState) => {
            return { formOpen: !prevState.formOpen }
        })
    }
    componentDidMount() {

    }
    render() {
        return (
            <nav>
                <header>
                    <div className="search_recipes_box">

                        <input className="search_recipes_input" type="text" placeholder="Search recipes" />
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="nav_bar_info">
                        <a onClick={this.onAvatarClick}><i className="far fa-user-circle"></i></a>
                        {this.state.formOpen === true ?
                            <>
                                <form autoComplete="off" >
                                    <input type="email" placeholder="Email" />
                                    <input type="password" placeholder="Password" />
                                    <button>Login</button>
                                </form>
                            </>
                            :
                            <>
                            </>
                        }
                        <div className="form_decoration"></div>
                        <Link>About Us</Link>
                        <Link>Contact</Link>
                    </div>
                </header>
            </nav>
        )
    }
}
export default Header;
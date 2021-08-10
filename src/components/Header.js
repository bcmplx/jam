import React, {Component} from 'react';

class Header extends Component {

    noCopy = () => {

      alert('merci de ne pas copier ce texte')
    }

    addStyle = (e) => {
      if(e.target.classList.contains('styled')) {
        e.target.classList.remove('styled')
      } else {
        e.target.classList.add('styled')
      }
    }

    showCat = () => {

    }


    render() {
      // console.log(this)
        return (
                <div className="content">
        
                <a href="/" className="h1" onMouseOver={this.addStyle}><h1>{this.props.title}</h1></a>
                {/* <a onClick={this.noCopy} href="/">loremipsum </a> */}
                </div>
        )
    }
}

export default Header
import React, {Component} from 'react';
import Category from './Category';

class Categories extends Component {

    state = {
        title: 'Get a track',
        active: 0,
        songs: [
            {artist: '', song: '', url:'', img: ''}
        ]
      }
    
    changeTitle = (e) => {
        console.log(e.target )
        e.preventDefault()
    
        this.setState({
            title: 'Mon nouveau titre'
        })
    }

    changeViaParam = (title) => {
        title.preventDefault()
        this.setState({title})
    }

    changeViaBind = (param) => {
        // param.stopPropagation();
        // param.preventDefault()
        // console.log(param)
        this.setState({
            title: param
        })
        
    }

    changeViaInput = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    showCard = (a) => {
        a.preventDefault()
        console.log(a.target)
        let test = a.target.getAttribute("title")
        console.log(test)
        let element = document.getElementsByClassName('artist_info')
        //      console.log(element[0])
        for (let item of element) {
            // console.log(item)
            item.classList.add("nodisplay")
        }
        element[test].classList.remove("nodisplay")

        
    }

    render() {
        return (
                <div> 
                    <h2 title="test">{this.state.title}</h2>
                    <input type="text" onChange={this.changeViaInput} value={this.state.title}></input>
                    <ul>
                        <li><a href="/royalty+free+music" onClick={this.showCard} title="0">Trap</a></li>      
                        <li><a href="/maury111" onClick={this.showCard} title="1">Electro</a></li>
                        <li><a href="/alfonso+lugo" onClick={this.showCard} title="2">Latino</a></li>
                        <li><a href="/infraction" onClick={this.showCard} title="3">Filmscore</a></li>
                        
                        {/* <li><button onClick={this.showCard}></button></li> */}
                        {/* <li><a href="/infraction">Filmscore</a></li> */}
                        <li><a href="/aufklarung" onClick={this.showCard} title="4">Classical</a></li>
                    </ul>
                    <Category artist="Royalty Free">Trap</Category>
                    <Category artist="Maury111">Electro</Category>
                    <Category artist="Alfonso Lugo">Latino</Category>
                    <Category artist="Infraction">Filmscore</Category>
                    <Category artist="Aufklarung">Classical</Category>
                </div>
                
        )
    }
}

export default Categories
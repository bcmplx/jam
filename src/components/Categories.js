import React, {Component} from 'react';
import Category from './Category';

class Categories extends Component {

    state = {
        title: 'Get a track'
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

    render() {
        return (
                <div> 
                    <h2 title="test">{this.state.title}</h2>
                    <ul>
                        <li><a href="/royalty+free+music" onClick={this.changeTitle}>Trap</a></li>
                        <li><a href="/maury111" onClick={() => this.changeViaParam('changement titre')}>Electro</a></li>
                        <li><a href="/alfonso+lugo" onClick={this.changeViaBind.bind(this, 'Titre via bind')}>Latino</a></li>
                        <li><button onClick={this.changeViaBind.bind(this, 'Titre via bind')}></button></li>
                        <li><input type="text" onChange={this.changeViaInput} value={this.state.title}></input></li>
                        <li><a href="/infraction">Filmscore</a></li>
                        <li><a href="/aufklarung">Classical</a></li>
                    </ul>
                    <Category artist="Royalty Free">Trap</Category>
                    <Category artist="Maury111">Electro</Category>
                    <Category artist="Alfonso Lugo">Latino</Category>
                </div>
                
        )
    }
}

export default Categories
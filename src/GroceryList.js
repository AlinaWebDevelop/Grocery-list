import { Component } from "react";
import check from './basket.jpg';

export class GroceryList extends Component {
    state = {
        userInput: "",
        groceryList: []
    }

onChangeEvent (e) {
    this.setState ({userInput: e});
}

addItem (i) {
    if (i === "") {
        alert ("Please add an item!")
    } else {
    let listArray = this.state.groceryList;
    listArray.push(i);
    this.setState({groceryList:listArray, userInput: ''});
   }
}

deleteItem() {
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState ({groceryList: listArray})
}

crossedWord(event) {
    const list = event.target;
    list.classList.toggle('crossed');
}

 onFormSubmit (e) {
    e.preventDefault();
 }

    render () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
                   <input type="text"
                   placeholder = "What do you want to buy?"
                   onChange = {(e) => {this.onChangeEvent(e.target.value)}}
                   value ={this.state.userInput}/>
                </div>
                <div className="container">
                    <button onClick= { () => this.addItem(this.state.userInput)} className="btn add">Add</button>
                </div>
                <div>
                    <ul>
                        {this.state.groceryList.map((item, index) => (
                         <li onClick = {this.crossedWord} key={index}>
                            <img src = {check} width ="40px" alt = "icon"/>
                            {item}</li>
                        ))}
                    </ul>
                    <div className="container">
                    <button onClick ={()=> this.deleteItem()} className="btn delete">Delete</button>
                    </div>
                </div>
                </form>
            </div>
        );
    }
}
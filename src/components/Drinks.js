import React, {Component} from "react";
import Drink from "./Drink";
import Loading from "./Loading";
import Error from "./Error";

class Drinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: null,
            isLoading: true,
            error: null,
        }
    }

    renderDrinks() {
        if (this.state.isLoading && !this.state.error) {
            return (<Loading />)
        } else if (this.state.error) {
            return (<Error message={this.state.error} />)
        } else
            return (this.state.drinks.map((drink) => (<Drink key={drink.idDrink} drink={drink}/>)))
    }

    componentDidMount() {
        setTimeout( () => {
            fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
                .then(response => response.json())
                .then(data => this.setState({isLoading: false, drinks: data.drinks}))
                .catch(error => {
                    this.setState({...this.state, error: error.message});
                })
        }, 1000 )
    }


    render() {
        return (
            <section className="container">
                <div className="row">
                    {this.renderDrinks()}
                </div>
            </section>
        )
    }
}

export default Drinks
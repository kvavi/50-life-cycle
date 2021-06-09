import React from "react";

const Drink = ({drink}) => {
    return (
        <div className="col-md-3 col-sm-4 col-6 mb-2">
            <div className="card">
                <img src={drink.strDrinkThumb} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
                        {drink.strDrink}
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Drink
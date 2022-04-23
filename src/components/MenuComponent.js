import React, { Component } from 'react';
import DishDetail from './DishdetailComponent';


class Menu extends Component {
constructor(props) {
        super(props);
        this.state = {
            selectedMonth: null
        }
    }

    onMonthSelect(month) {
        this.setState({ selectedMonth: month});
    }

 
renderDish(foodsmonth) {
        const dishstyle = {backgroundColor: "azure"}
        const imgstyle = {width:"14vw", height:"14vh"}
        if (foodsmonth != null)
        {
        console.log("success")
            return(
              <div className='container-xxl row' style={dishstyle}>
              <DishDetail
              weekname = "1st Week"
              week = {foodsmonth.weekone.map((fooditems) => {
                return (
                  <div className="card bg-dark text-white m-1" key={fooditems.id}>
                  <h5 className="card-title text-center">{fooditems.day}</h5>
                      <img
                        src={fooditems.img}
                        style={imgstyle}
                        className="m-1"
                      />
                    </div>                    
                )})}
                  
              />
               <DishDetail
              weekname = "2nd Week"
              week = {foodsmonth.weektwo.map((fooditems) => {
                return(
                  <div className="card bg-dark text-white m-1" key={fooditems.id}>
                  <h5 className="card-title text-center">{fooditems.day}</h5>
                      <img
                        src={fooditems.img}
                        style={imgstyle}
                        className="m-1"
                      />
                    </div> )})}
              />
               <DishDetail
              weekname = "3rd Week"
              week = {foodsmonth.weekthree.map((fooditems) => {
                return(
                  <div className="card bg-dark text-white m-1" key={fooditems.id}>
                  <h5 className="card-title text-center">{fooditems.day}</h5>
                      <img
                        src={fooditems.img}
                        style={imgstyle}
                        className="m-1"
                      />
                    </div> )})}
              />
               <DishDetail
              weekname = "4th Week"
              week = {foodsmonth.weekfour.map((fooditems) => {
                return(
                  <div className="card bg-dark text-white m-1" key={fooditems.id}>
                  <h5 className="card-title text-center">{fooditems.day}</h5>
                      <img
                        src={fooditems.img}
                        style={imgstyle}
                        className="m-1"
                      />
                    </div> )})}
              />
              <DishDetail
              weekname = "5th Week"
              week = {foodsmonth.weekfive.map((fooditems) => {
                return(
                  <div className="card bg-dark text-white m-1" key={fooditems.id}>
                  <h5 className="card-title text-center">{fooditems.day}</h5>
                      <img
                        src={fooditems.img}
                        style={imgstyle}
                        className="m-1"
                      />
                    </div> )})}
              />
              </div>  
            );
                }
        else 
        {
        console.log("failure")
        return(
          <div></div>
      );
        }
}

    render() {
      const menu = this.props.foodmenu.map((foodmonth) => {
          return (
            <div className="col-4 col-md-3 m-1" key={foodmonth.id}><br></br>
            &ensp; 
            <button type="button" class="btn btn-info"  onClick={() => this.onMonthSelect(foodmonth)}>{foodmonth.month} food menu</button>
            </div>
          );
      });

      
        return (
          <div className="container">
              <div className="row">
                  {menu}
              </div>
              <div className="row">
              {this.renderDish(this.state.selectedMonth)}
              </div>    
          </div>
      );
  }
}

export default Menu;
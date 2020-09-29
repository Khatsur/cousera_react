import React from 'react';
import { Form } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }; 
    };

    onDishSelect(dish) {
        this.setState({selectedDish: dish}) 
    };

    renderDish(dish) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                       <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else {
            return(
                <div></div>
            );
        }
    };

    renderComments(dish) {
        if (dish != null) {
            return(
                <div>
                    <h4>Comments</h4>
                    {
                    dish.comments.map((comm) => 
                          <div key={comm.id}> 
                              <div>{comm.comment}</div><br></br>
                              <div>--{comm.author}, {comm.date}</div><br></br>
                         </div>
                      )
                    }
                    </div>
             );
        }
        else {
            return(
                <div></div>
            );
        }
    };
    

    render() {

        const menu = this.props.dishes.map ((dish) => {
            return (
                
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                    <DishDetail dish={dish} />
                    </Card>
                </div>
                
            )
        });
        console.log('Menu Components render is invoke');
        return ( 
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.state.selectedDish)}
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Menu;
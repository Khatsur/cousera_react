import React from 'react';
import { Form } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends React.Component {

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
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
                      )}
                    </div>
             );}
        else {
            return(
                <div></div>
            );}
    };

    render() {
        
        return (
            <div className="container">
            <div className="row">
                  <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish)}
                  </div>
                </div>
                </div> 
        )
   }
};

export default DishDetail;
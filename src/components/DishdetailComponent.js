import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends React.Component {
   
    renderDish(dish) {
        
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                    
                </Card>
            )
        }

   render() {
       return (
           <div>
        {this.renderDish(this.props.dish)}
           </div>
       );
   }

};

export default DishDetail;
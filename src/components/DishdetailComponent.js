import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Button, Label, Col, Row } from 'reactstrap';
import CommentForm  from './CommentForm';
import FeedbackForm from './CommentForm';
import { Loading } from './LoadingComponent';

function handleClick(e) {
    e.preventDefault();
    alert(<CommentForm/>);
  };

   function RenderDish({dish}) {
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

    function RenderComments({comments, addComment, dishId}) {
        if (comments != null) {
            return(
                <div>
                    <h4>Comments</h4>
                    {comments.map((comment) => 
                          <div key={comment.id}> 
                              <div>{comment.comment}</div><br></br>
                              <div>-- {comment.author}</div><br></br>
                         </div>
                      )}
                      <CommentForm dishId={dishId} addComment={addComment}/>
                      
                    </div>
             );}
        else {
            return(
                <div></div>
            );}
    };

    const DishDetail = (props) => {
        if(props.isLoadin) {
           return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
           );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">
                       <h4>{props.errMess}</h4>
                    </div>
                </div>
           );
        }
        
        else if (props.dish !=null) {

        return (
          <div className="container">
            <div className="row">
                <Breadcrumb>
                   
                    <BreadcrumbItem><Link to='/manu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                  <div className="col-12 col-md-5 m-1">
                       <RenderDish dish={props.dish} />
                  </div>
                  <div className="col-12 col-md-5 m-1">
                  <RenderComments comments={props.comments}
                    addComment={props.addComment}
                    dishId={props.dish.id} />
                     
                  </div>
            </div>
          </div> 
        )
        }
        else {
            return(
                <div></div>
            );}
   }


export default DishDetail;
import React, { Component } from "react";
import {Container, Form,  Button} from "react-bootstrap";
import Title from "./Title";

export default class CommunicationForm extends Component {
    render() {
        return (
                <Form id='title'> 
                <Title title="Связаться с нами"/>
                <div class='row margin-left'> 
                    <div class='column'>
                    <Form.Label><h4>ФИО:</h4></Form.Label>
                    <Form.Control type="text" placeholder="ФИО" style={{ border: "0" , height: "30px"}}/>     
                    <Form.Label><h4>Название конкурса:</h4></Form.Label>
                    <Form.Control type="text" placeholder="Название конкурса" style={{ border: "0" , height: "30px"}}/>     
                    <Form.Label><h4>Ссылка на материалы:</h4></Form.Label>
                    <Form.Control type="text" placeholder="Здесь вы можете оставить ссылку на материалы к конкурсу" style={{ border: "0", height: "30px"}}/>  
                    </div>
                    <div class='column'>
                    <Form.Label><h4>Текст сообщения:</h4></Form.Label>
                    <Form.Control as="textarea" rows="10" cols="70" />      
                    <Button variant="primary" type="submit" className="btn-primary btn-right">Отправить</Button>
                    </div>
                </div>
                </Form>
        
        )
    }
}
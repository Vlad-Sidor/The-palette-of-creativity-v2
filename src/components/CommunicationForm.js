import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Title from "./Title";
import { sendFeedBack } from "../api/actions";

export default class CommunicationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Competion: "",
      URL: window.location.origin,
      Text: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    let data = {
      Name: this.state.Name,
      Competion: this.state.Competion,
      URL: this.state.URL,
      Text: this.state.Text,
    };
    let response = await sendFeedBack(data);

    if (response.status === 200) {
      window.location.reload();
    }
  };

  render() {
    return (
      <Form id="title" onSubmit={this.handleSubmit}>
        <Title title="Связаться с нами" />
        <div className="row margin-left">
          <div className="column">
            <Form.Label>
              <h4>ФИО:</h4>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="ФИО"
              style={{ border: "0", height: "30px" }}
              onChange={(event) => {
                this.setState({ Name: event.target.value });
              }}
            />
            <Form.Label>
              <h4>Название конкурса:</h4>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Название конкурса"
              style={{ border: "0", height: "30px" }}
              onChange={(event) => {
                this.setState({ Competion: event.target.value });
              }}
            />
            <Form.Label>
              <h4>Ссылка на материалы:</h4>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Здесь вы можете оставить ссылку на материалы к конкурсу"
              style={{ border: "0", height: "30px" }}
              onChange={(event) => {
                this.setState({ URL: event.target.value });
              }}
            />
          </div>
          <div className="column">
            <Form.Label>
              <h4>Текст сообщения:</h4>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="10"
              cols="70"
              onChange={(event) => {
                this.setState({ Text: event.target.value });
              }}
            />
            <Button
              variant="primary"
              className="btn-primary btn-right"
              type="submit"
            >
              Отправить
            </Button>
          </div>
        </div>
      </Form>
    );
  }
}

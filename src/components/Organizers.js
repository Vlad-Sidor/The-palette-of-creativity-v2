import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Title from "./Title";
import org1 from "../images/org1.jpg";
import org2 from "../images/org2.jpg";
import org3 from "../images/org3.jpg";
import org4 from "../images/org4.jpg";


export default function Organizers() {
  return (

    <div class="services-part-org">
      <Title title="Оргкомитет" />

      <Container>
        <Row>
          <Col sm>
            <div class="our-team">
              <div class="picture">
                <img class="img-fluid" src={org1} />
              </div>
              <div class="team-content">
                <h3 class="name">Лидия Демидова</h3>
                <h4 class="title"></h4>
              </div>
              <ul class="social">
                <p>Заведующий сектором педагогического сопровождения и развития творческих инициатив</p>
              </ul>
            </div> </Col>
          <Col sm><div class="our-team">
            <div class="picture">
              <img class="img-fluid" src={org3} />
            </div>
            <div class="team-content">
              <h3 class="name">Шевцов Михайлович</h3>
              <h4 class="title"></h4>
            </div>
            <ul class="social">
              <p >звукорежиссер</p>
            </ul>
          </div></Col>
          <Col sm><div class="our-team">
            <div class="picture">
              <img class="img-fluid" src={org4} />
            </div>
            <div class="team-content">
              <h3 class="name">Алексеева Анна</h3>
              <h4 class="title"></h4>
            </div>
            <ul class="social">
              <p>педагог-организатор, руководитель вокальной студии "Сузор'е"</p>
            </ul>
          </div></Col>
          <Col sm>
            <div class="our-team">
              <div class="picture">
                <img class="img-fluid" src={org2} />
              </div>
              <div class="team-content">
                <h3 class="name">Беляева Анна</h3>
                <h4 class="title"></h4>
              </div>
              <ul class="social">
                <p>педагог-организатор</p>
              </ul>
            </div></Col>
        </Row>
      </Container>
    </div>

  )
}
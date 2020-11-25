import React, { Component } from "react";
import { Container, Nav, Tab, Row, Col } from "react-bootstrap";
import Image1 from '../assets/clubs/Бісерний калейдоскоп.jpg';
import Image2 from '../assets/clubs/Джерельце.jpg';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="design" >
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="design">Бісерний калейдоскоп</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="team">Джерельце</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="programming">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="frameworks">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="libraries">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="design">
                  <img
                    src={Image1}
                    alt="img"
                    width="100%"
                    height="80%"                    
                  />
                  <h2 className="text-center mt-3">Бісерний калейдоскоп</h2>
                  <p className="mt-3">
                  Бісероплетіння , як вид декоративно-прикладного мистецтва, 
                  існує з давніх-давен. У сучасних прийомах нанизування закладено 
                  кращі традиції старовинного художнього промислу: разом з тим 
                  з'явились нові зразки, форми і візерунки. Мета програми 
                  гуртка - вивчати, популяризувати та використовувати стародавнє 
                  мистецтво, розповідати про художню та практичну цінність, найкращі 
                  традиції  та особливості низання бісером.
                  </p>
                  <p><h4>
                  Основні завдання полягають у формуванні таких компетентностей:</h4>
                  <ul>
                    <li>Пізнавальної, що забезпечує ознайомлення з 
                      поняттями та знаннями,які стосуються бісероплетіння.</li>
                    <li>Практичної, що сприяє оволодінню навичками виготовлення 
                      різноманітних виробів з бісеру.</li>
                    <li>Творчої, що забезпечує формування творчих 
                      здібностей.</li>
                    <li>Соціальної, що сприяє вихованню дбайливого, 
                      шанобливого ставлення до народних традицій.</li>
                  </ul>
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="team">
                  <img
                    alt="img"
                    width="100%"
                    height="80%"
                    src={Image2}
                  />
                  <h2 className="text-center mt-3">"Джерельце"</h2>
                  <p>
                  Головним завданням роботи є підготовка дітей дошкільного віку 
                  до занять у школі, розвиток необхідних для цього вмінь і навичок, 
                  активізація творчих сил дітей та створення сприятливих умов для їх 
                  розумового і загального розвитку.
                 </p>
                 <p>
                 <h4>Програма включає:</h4>
                  <ul>
                    <li>заняття з розвитку мовлення</li>
                    <li>ознайомлення з навколишнім світом</li>
                    <li>підготовка руки до письма</li>
                    <li>навчання грамоти</li>
                    <li>ознайомлення з елементарними математичними поняттями</li>
                    <li>заняття з художньої праці (малювання, ліплення).</li>
                  </ul>
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="programming">
                  <img
                    alt="img"
                    width="80%"
                    height="500px"
                    src="https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg"
                  />
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio dolorum quis mollitia! Repellat facere iure
                    debitis quae tenetur velit, aliquid nihil voluptatem facilis
                    aut exercitationem.
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="frameworks">
                  <img
                    alt="img"
                    width="80%"
                    height="500px"
                    src="https://envisionitagency.com/uploads/2018/04/frameworks.png"
                  />
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio dolorum quis mollitia! Repellat facere iure
                    debitis quae tenetur velit, aliquid nihil voluptatem facilis
                    aut exercitationem.
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="libraries">
                  <img
                    alt="img"
                    width="80%"
                    height="500px"
                    src="https://miro.medium.com/max/1200/1*sLyHuld_ml5f4cF9e1A_Ow.png"
                  />
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio dolorum quis mollitia! Repellat facere iure
                    debitis quae tenetur velit, aliquid nihil voluptatem facilis
                    aut exercitationem.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

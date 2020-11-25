import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import { Container, CardColumns, Card, Button } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div>

        <CarouselBox />
        <Container>
          <h4 className="text-center m-4">
            Вітаємо вас на сайті Будинку дитячої творчості міста Коростишева.</h4>
          <p> Маємо надію, що інформацію, яку ви знайдете на сторінках сайту буде
             для вас цікавою та корисною. Двері нашого закладу завжди гостинно відчинені 
             для гостей та жителів міста, а особливо для дітей та підлітків.</p>
        </Container>
        <Container>
          <h2 className="text-center m-4">Наші гуртки</h2>

          <CardColumns className="m-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                  <Card.Title>Хореографічний колектив «Асорті»</Card.Title>
                  <Card.Text>Хореографічний колектив «Асорті»</Card.Text>
                  <Button variant="primary">Детальніше</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1036641/pexels-photo-1036641.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                  <Card.Title>"Вокальний ансамбль"</Card.Title>
                  <Card.Text>"Вокальний ансамбль"</Card.Text>
                  <Button variant="primary">Детальніше</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                  <Card.Title>«Бісерний калейдоскоп»</Card.Title>
                  <Card.Text>«Бісерний калейдоскоп»</Card.Text>
                  <Button variant="primary">Детальніше</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                  <Card.Title>«Моделювання одягу»</Card.Title>
                  <Card.Text>«Моделювання одягу»</Card.Text>
                  <Button variant="primary">Детальніше</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                  <Card.Title>«М'яка іграшка»</Card.Title>
                  <Card.Text>«М'яка іграшка»</Card.Text>
                  <Button variant="primary">Детальніше</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                  <Card.Title>«Оригамі»</Card.Title>
                  <Card.Text>«Оригамі»</Card.Text>
                  <Button variant="primary">Детальніше</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                  <Card.Title>«Дебатний клуб»</Card.Title>
                  <Card.Text>«Дебатний клуб»</Card.Text>
                  <Button variant="primary">Детальніше</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                  <Card.Title>«Писанкарство»</Card.Title>
                  <Card.Text>«Писанкарство»</Card.Text>
                  <Button variant="primary">Детальніше</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                  <Card.Title>«OpenArt»</Card.Title>
                  <Card.Text>Студія образотворчого мистецтва «OpenArt»</Card.Text>
                  <Button variant="primary">Детальніше</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                  <Card.Title>«Кольоровий світ»</Card.Title>
                  <Card.Text>«Кольоровий світ»</Card.Text>
                  <Button variant="primary">Детальніше</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                  <Card.Title>«Спортивне орієнтування»</Card.Title>
                  <Card.Text>«Спортивне орієнтування»</Card.Text>
                  <Button variant="primary">Детальніше</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                  <Card.Title>«Говоримо англійською»</Card.Title>
                  <Card.Text>«Говоримо англійською»</Card.Text>
                  <Button variant="primary">Детальніше</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                  <Card.Title>«Англійська для малечі»</Card.Title>
                  <Card.Text>«Англійська для малечі»</Card.Text>
                  <Button variant="primary">Детальніше</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                  <Card.Title>«Лідер»</Card.Title>
                  <Card.Text>«Лідер»</Card.Text>
                  <Button variant="primary">Детальніше</Button>
              </Card.Body>
            </Card>

            <Card> 
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                  <Card.Title>«Перукарське мистецтво»</Card.Title>
                  <Card.Text>«Перукарське мистецтво»</Card.Text>
                  <Button variant="primary">Детальніше</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                  <Card.Title>«Дитячий фітнес»</Card.Title>
                  <Card.Text>«Дитячий фітнес»</Card.Text>
                  <Button variant="primary">Детальніше</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                  <Card.Title>«Основи програмування»</Card.Title>
                  <Card.Text>«Основи програмування»</Card.Text>
                  <Button variant="primary">Детальніше</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                  <Card.Title>«Комп'ютерна анімація»</Card.Title>
                  <Card.Text>«Комп'ютерна анімація»</Card.Text>
                  <Button variant="primary">Детальніше</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                  <Card.Title>«Театральне мистецтво»</Card.Title>
                  <Card.Text>«Театральне мистецтво»</Card.Text>
                  <Button variant="primary">Детальніше</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                  <Card.Title>«Естрадно-бальний танець»</Card.Title>
                  <Card.Text>«Естрадно-бальний танець»</Card.Text>
                  <Button variant="primary">Детальніше</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                  <Card.Title>«Народний танець»</Card.Title>
                  <Card.Text>«Народний танець»</Card.Text>
                  <Button variant="primary">Детальніше</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                  <Card.Title> «Природа і фантазія»</Card.Title>
                  <Card.Text> «Природа і фантазія»</Card.Text>
                  <Button variant="primary">Детальніше</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                  <Card.Title>«Сучасний мандрівник»</Card.Title>
                  <Card.Text>«Сучасний мандрівник»</Card.Text>
                  <Button variant="primary">Детальніше</Button>
              </Card.Body>
            </Card>
            

            
          </CardColumns>
        </Container>
      </div>
    );
  }
}

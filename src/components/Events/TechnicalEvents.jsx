import React from 'react'
import '../../styles/Events.css'
import Slider from './Slider'
import { EventsData } from '../EventCategory/EventsData'
import './styles/TechnicalEvents.css'
import { styles } from './styles/TechnicalElements'
import { Row, Col, Container, Card, Button } from "react-bootstrap"

const TechnicalEvents = () => {
    return (
        <>
            <div className='technicalevents'>
                {EventsData.map(data => {
                    return (
                        <div className="event-wrapper" key={data.id}>
                            <div className="title">
                                <h4>{data.name}</h4>
                            </div>
                            <Row md={2}>
                            {data.events.map(event => {
                                return (
                                        <Col style={styles.col_card}>
                                            <Card style={styles.card} className="card">
                                                <Card.Img
                                                    style={styles.card_image}
                                                    className="card-img"
                                                    variant="top"
                                                    // height="350rem"
                                                    src={event.image}
                                                />
                                                <Card.Body style={styles.card_body}>
                                                    <Card.Title style={styles.card_title}>{event.name}</Card.Title>
                                                    <Card.Title style={styles.card_subtitle} className='card_subtitle'>
                                                        {event.price}
                                                    </Card.Title>
                                                    <Card.Text style={styles.card_description}>{event.description}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                )
                            })}
                            </Row>
                        </div>
                    )
                })[0]}
            </div>
        </>
    )
}

export default TechnicalEvents
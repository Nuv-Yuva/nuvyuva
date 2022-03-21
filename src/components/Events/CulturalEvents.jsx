import React from 'react'
import { EventsData } from '../EventCategory/EventsData'
import './styles/Events.css'
import { styles } from './styles/Events'
import { Row, Col, Container, Card, Button } from "react-bootstrap"

const CulturalEvents = () => {
    return (
        <>
            <div className='events'>
                {EventsData.map(data => {
                    return (
                        <>
                            <div className='heading'>
                                <h1>{data.name}</h1>
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
                                                    <Card.Text style={styles.card_description}>{event.description}</Card.Text>
                                                    <Card.Subtitle style={styles.card_subtitle} className='card_subtitle'>
                                                        {event.price}
                                                    </Card.Subtitle>
                                                    <Card.Text style={styles.card_description}>{event.group}</Card.Text>
                                                    <Card.Text style={styles.card_description}>{event.size}</Card.Text>
                                                </Card.Body>
                                                <Button style={styles.card_button} onClick={() => window.open("https://www.nuv.ac.in/cpe-regn/", "_self")}>Register Now</Button>
                                            </Card>
                                        </Col>
                                )
                            })}
                            </Row>
                        </>
                    )
                })[3]}
            </div>
        </>
    )
}

export default CulturalEvents
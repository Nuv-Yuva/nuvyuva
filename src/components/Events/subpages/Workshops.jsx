import React from 'react'
import { useNavigate } from 'react-router-dom';
import { EventsData } from '../../EventCategory/EventsData'
import { styles } from '../styles/EventsStyles'
import { Row, Col, Container, Card, Button } from "react-bootstrap"
import { 
    Wrapper,
    Header,
    Heading, 
    BackButton,
} from '../styles/EventsElements'
import {BiArrowBack} from 'react-icons/bi';


const Workshops = () => {

    const navigate = useNavigate()

    return (
        <>
            <Wrapper>
                {EventsData.map(data => {
                    return (
                        <>
                            <Header>
                                    <BackButton onClick={() => navigate(-1)}><BiArrowBack /></BackButton>
                                    <Heading>{data.name}</Heading>
                            </Header>
                            <Row md={2}>
                            {data.events.map(event => {
                                return (
                                        <Col style={styles.col_card}>
                                            <Card style={styles.card} className="card">
                                                <Card.Img
                                                    style={styles.card_image}
                                                    className="card-img"
                                                    variant="top"
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
                })[1]}
            </Wrapper>
        </>
    )
}

export default Workshops
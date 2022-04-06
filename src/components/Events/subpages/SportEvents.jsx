import React from 'react'
import { useNavigate } from 'react-router-dom';
import { EventsData } from '../EventsData'
import { styles } from '../styles/EventsStyles'
import { Row, Col, Container, Card, Button } from "react-bootstrap"
import { 
    Wrapper,
    ButtonRow,
    BackButton,
    Head,
    TitleWrapper,
    Title,    
} from '../styles/EventsElements'
import {BiArrowBack} from 'react-icons/bi';
import '../styles/SvgStyles.css'


const SportEvents = () => {

    const navigate = useNavigate()
    const zigzag = require("../../images/circles/Zigzag.png");

    return (
        <>
            <Wrapper>
                {EventsData.map(data => {
                    return (
                        <>
                            <ButtonRow>
                                <BackButton onClick={() => navigate(-1)}><BiArrowBack /></BackButton>
                            </ButtonRow>
                            <Head> 
                                <TitleWrapper>
                                    <Title>Sports</Title>
                                </TitleWrapper>
                                <img src={zigzag} className="sportszigzag" alt="sports-zigzag-png"/>
                            </Head>
                            <Row md={3}>
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
                                                    <Card.Subtitle style={styles.card_subtitle} className='card_title'>
                                                        {event.price}
                                                    </Card.Subtitle>
                                                    <Card.Text style={styles.card_criteria_1}>{event.group}</Card.Text>
                                                    <Card.Text style={styles.card_criteria_2}>{event.size}</Card.Text>
                                                </Card.Body>
                                                <Button style={styles.card_button} onClick={() => window.open("https://www.nuv.ac.in/cpe-regn/", "_self")}>Register Now</Button>
                                            </Card>
                                        </Col>
                                )
                            })}
                            </Row>
                        </>
                    )
                })[4]}
            </Wrapper>
        </>
    )
}

export default SportEvents
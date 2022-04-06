import React from 'react'
import { styles } from './Members';
import { Row, Col, Container, Card, Button } from "react-bootstrap";

const MemCard = ({ data }) => {

    const { id, name, imgSrc, postion } = data;


    return (
        <Col style={styles.col_card} md={4} lg={true} sm={12} xs={12} key={id}>
            <Card style={styles.card} className="card">
                <Card.Img
                    className="card-img"
                    variant="top"
                    // height="400rem"
                    src={imgSrc}
                />
                <Card.Body style={styles.card_body}>
                    <Card.Title style={styles.card_title}>{name}</Card.Title>
                    <Card.Title style={styles.card_subtitle} className='card_subtitle'>
                        {postion}
                    </Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default MemCard
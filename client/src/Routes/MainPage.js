import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/MainPage.css';


const MainPage = () => {
    return (
        <div id="main">
            <h1 class="heading">This ... Is ... Teacher Jeopardy!</h1>
            <Container id="main-columns">
                <Row>
                    <Col id="column">
                        <h2 class="heading">My Mission</h2>
                        <div>
                            <p class="paragraph">
                                After a 20-year teaching career, I have turned my attention to
                                beginning a career as a web developer. As a teacher, I enjoyed creating Jeopardy
                                games for my studensts. But I could never find a tool that made it quick and easy.
                                So, as a passion project, I am creating one.
                            </p>
                            <p class="paragraph">
                                With this app, you can create clues, categories, and games. If
                                you want to share them with other teachers you can, or keep them private.
                                It's up to you!
                            </p>

                        </div>

                    </Col>
                    <Col xs={1}></Col>
                    <Col id="column"><h2 class="heading">How can you help?</h2></Col>
                </Row>
                <Outlet />
            </Container>
        </div>

    );
}

export default MainPage;
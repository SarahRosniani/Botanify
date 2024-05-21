import '../dist/css/d.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import img from '../assets/blog/1.png';
import img2 from '../assets/blog/2.png';
import img3 from '../assets/blog/3.png';
import img4 from '../assets/blog/4.png';
import img5 from '../assets/blog/5.png';
import img6 from '../assets/blog/6.png';
import img7 from '../assets/blog/7.png';
import img8 from '../assets/blog/8.jpg';
import img9 from '../assets/blog/9.png';
import imgp from '../assets/blog/p1.png';
import imgp2 from '../assets/blog/p2.png';
import imgp3 from '../assets/blog/p3.png';
import imgp4 from '../assets/blog/p4.png';
import imgp5 from '../assets/blog/p5.png';
import imgp6 from '../assets/blog/p6.png';
import imgp7 from '../assets/blog/p7.png';
import imgp8 from '../assets/blog/p8.png';
import imgp9 from '../assets/blog/p9.png';


const Blog_information = () => {
    return (
    <div>
        <section className="blog section">
            <div className="container">
                <div className="row gy-8">
                    <div className="flex-column">
                        <h1 className="">Tambah wawasan anda tentang tanaman hias</h1>
                        <p className="">Pelajari lebih dalam tentang tanaman anda dan cara merawat tanaman dengan benar</p>
                        
                    </div>
                    <div className="container">
                    <div className="headerb">
                        <i className="bi bi-search icon"></i><div className="text">Cari informasi</div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='blog1 section'>
        <Tabs 
        defaultActiveKey="lihat" 
        transition={false}
        id="noanim-tab-example" 
        className="mb-3 custom-tabs">
        <Tab eventKey="lihat" title="Lihat Semua">
            <div>
            <Container style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                <Row >
                    <Col className="mb-3" style={{ marginRight: '10px' }}>
                    <div className="testimonials1">
                        <Col className='mb-3'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                <div className="tips-trick">
                                    Tips & Trick
                                </div>
                                    <Card.Title>Cara mudah untuk merawat tanaman anda </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                    </Card.Text>
                                    <div className="containerblog">
                                        <img className="profile-img" src={imgp} />
                                        <div className='metadata'><div className="author-nameblog">Danica A.</div>
                                        <div className="metadata-container">
                                            <div className="date">11 Jan 2022</div>
                                            <div className="divider"></div>
                                            <div className="read-time">5 min read</div>
                                        </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='mb-3'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={img2} />
                                <Card.Body>
                                <div className="tips-trick">
                                    Tips & Trick
                                </div>
                                    <Card.Title>Cara mudah untuk merawat tanaman anda </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                    </Card.Text>
                                    <div className="containerblog">
                                        <img className="profile-img" src={imgp2} />
                                        <div className='metadata'><div className="author-nameblog">Danica A.</div>
                                        <div className="metadata-container">
                                            <div className="date">11 Jan 2022</div>
                                            <div className="divider"></div>
                                            <div className="read-time">5 min read</div>
                                        </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className='mb-3'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={img3} />
                                <Card.Body>
                                <div className="tips-trick">
                                    Tips & Trick
                                </div>
                                    <Card.Title>Cara mudah untuk merawat tanaman anda </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                    </Card.Text>
                                    <div className="containerblog">
                                        <img className="profile-img" src={imgp3} />
                                        <div className='metadata'><div className="author-nameblog">Danica A.</div>
                                        <div className="metadata-container">
                                            <div className="date">11 Jan 2022</div>
                                            <div className="divider"></div>
                                            <div className="read-time">5 min read</div>
                                        </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                    </Col>
                </Row>
                <Row >
                    <Col className="mb-3" style={{ marginRight: '10px' }}>
                    <div className="testimonials1">
                        <Col className='mb-3'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={img4} />
                                <Card.Body>
                                <div className="tips-trick">
                                    Tips & Trick
                                </div>
                                    <Card.Title>Cara mudah untuk merawat tanaman anda </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                    </Card.Text>
                                    <div className="containerblog">
                                        <img className="profile-img" src={imgp4} />
                                        <div className='metadata'><div className="author-nameblog">Danica A.</div>
                                        <div className="metadata-container">
                                            <div className="date">11 Jan 2022</div>
                                            <div className="divider"></div>
                                            <div className="read-time">5 min read</div>
                                        </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='mb-3'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={img5} />
                                <Card.Body>
                                <div className="tips-trick">
                                    Tips & Trick
                                </div>
                                    <Card.Title>Cara mudah untuk merawat tanaman anda </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                    </Card.Text>
                                    <div className="containerblog">
                                        <img className="profile-img" src={imgp5} />
                                        <div className='metadata'><div className="author-nameblog">Danica A.</div>
                                        <div className="metadata-container">
                                            <div className="date">11 Jan 2022</div>
                                            <div className="divider"></div>
                                            <div className="read-time">5 min read</div>
                                        </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className='mb-3'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={img6} />
                                <Card.Body>
                                <div className="tips-trick">
                                    Tips & Trick
                                </div>
                                    <Card.Title>Cara mudah untuk merawat tanaman anda </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                    </Card.Text>
                                    <div className="containerblog">
                                        <img className="profile-img" src={imgp6} />
                                        <div className='metadata'><div className="author-nameblog">Danica A.</div>
                                        <div className="metadata-container">
                                            <div className="date">11 Jan 2022</div>
                                            <div className="divider"></div>
                                            <div className="read-time">5 min read</div>
                                        </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                    </Col>
                </Row>
                <Row >
                    <Col className="mb-3" style={{ marginRight: '10px' }}>
                    <div className="testimonials1">
                        <Col className='mb-3'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={img7} />
                                <Card.Body>
                                <div className="tips-trick">
                                    Tips & Trick
                                </div>
                                    <Card.Title>Cara mudah untuk merawat tanaman anda </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                    </Card.Text>
                                    <div className="containerblog">
                                        <img className="profile-img" src={imgp7} />
                                        <div className='metadata'><div className="author-nameblog">Danica A.</div>
                                        <div className="metadata-container">
                                            <div className="date">11 Jan 2022</div>
                                            <div className="divider"></div>
                                            <div className="read-time">5 min read</div>
                                        </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='mb-3'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={img8} />
                                <Card.Body>
                                <div className="tips-trick">
                                    Tips & Trick
                                </div>
                                    <Card.Title>Cara mudah untuk merawat tanaman anda </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                    </Card.Text>
                                    <div className="containerblog">
                                        <img className="profile-img" src={imgp8} />
                                        <div className='metadata'><div className="author-nameblog">Danica A.</div>
                                        <div className="metadata-container">
                                            <div className="date">11 Jan 2022</div>
                                            <div className="divider"></div>
                                            <div className="read-time">5 min read</div>
                                        </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className='mb-3'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={img9} />
                                <Card.Body>
                                <div className="tips-trick">
                                    Tips & Trick
                                </div>
                                    <Card.Title>Cara mudah untuk merawat tanaman anda </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                    </Card.Text>
                                    <div className="containerblog">
                                        <img className="profile-img" src={imgp9} />
                                        <div className='metadata'><div className="author-nameblog">Danica A.</div>
                                        <div className="metadata-container">
                                            <div className="date">11 Jan 2022</div>
                                            <div className="divider"></div>
                                            <div className="read-time">5 min read</div>
                                        </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                    </Col>
                </Row>
            </Container>
            </div>
                    </Tab>
                    <Tab eventKey="tips" title="Tips & Trick">
                        <div>Tab content for Tips & Trick</div>
                    </Tab>
                    <Tab eventKey="diagnosa" title="Diagnosa">
                        <div>Tab content for Diagnosa</div>
                    </Tab>
                    <Tab eventKey="penyakit" title="Penyakit">
                        <div>Tab content for Penyakit</div>
                    </Tab>
                    <Tab eventKey="acara" title="Acara">
                        <div>Tab content for Acara</div>
                    </Tab>
                </Tabs>
        </section>
    </div>
    )
}

export default Blog_information
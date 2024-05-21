import '../dist/css/dt.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import img from '../assets/blog/1.png';
import img2 from '../assets/blog/2.png';
import img3 from '../assets/blog/3.png';
import imgp2 from '../assets/blog/p2.png';
import imgp3 from '../assets/blog/p3.png';
import imgp from '../assets/blog/p1.png';


const BlogDetail = () => {
    return (
        <div className="blog-detail">
            <div className="title-section">
                <div className="title">
                    <a href="/blog" className="blog-category">Blog</a>
                    <i className="bi bi-chevron-right small-icon"></i>
                    <div className="post-title">Tips & Trick</div>
                    <i className="bi bi-chevron-right small-icon"></i>
                    <div className="post-title1">Cara mudah untuk merawat tanaman anda</div>
                </div>
            </div>
            <h1>Cara mudah untuk merawat tanaman anda</h1>
            <div className="containerd">
                <img className="profile-img" src={imgp} alt="Author" />
                <div className="content-flex">
                    <div className="metadata">
                        <div className="author-name">Danica A.</div>
                        <div className="metadata-container">
                            <div className="date">11 Jan 2022</div>
                            <div className="divider"></div>
                            <div className="read-time">5 min read</div>
                        </div>
                    </div>
                    <div className="social-links1 d-flex">
                        <a href="#"><i className="bi bi-link-45deg"></i></a>
                        <a href="#"><i className="bi bi-linkedin"></i></a>
                        <a href="#"><i className="bi bi-twitter-x"></i></a>
                        <a href="#"><i className="bi bi-facebook"></i></a>
                    </div>
                </div>
            </div>

            <img className="custom-image" src={img2} alt="Custom" />

            <div className='blog-container'>
                <div className="introduction">Introduction</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</p>
                <p>Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>

                <div className="image-container">
                    <img className="image-detail" src={img3} alt="Placeholder Image" />
                    <div className="text-container">
                        <div className="vertical-line"></div>
                        <div className="text">tanaman-hias</div>
                    </div>
                </div>

                <div className='styled-text'>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>
                <p>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <p>Borem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                <div className='text2'>Terakhir!</div>
                <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                <p>Morem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className='container-info'>
                <div className='text3'>Informasi Lainnya</div>
                <p>Informasi lainnya tentang tanaman yang mungkin anda butuhkan</p>

                <Container>
                <Row>
                                    <Col md={4} className="mb-3">
                                        <Card>
                                            <Card.Img variant="top" src={img} />
                                            <Card.Body className="card-body-custom1">
                                                <div className="tips-trick">Tips & Trick</div>
                                                <Card.Title>Cara mudah untuk merawat tanaman anda</Card.Title>
                                                <Card.Text className='card-text-left1'>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</Card.Text>
                                                <div className="containerblog1">
                                                    <img className="profile-img" src={imgp} alt="profile" />
                                                    <div className='metadata1'>
                                                        <div className="author-nameblog">Danica A.</div>
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
                                    <Col md={4} className="mb-3">
                                        <Card>
                                            <Card.Img variant="top" src={img2} />
                                            <Card.Body className="card-body-custom1">
                                                <div className="tips-trick">Tips & Trick</div>
                                                <Card.Title>Cara mudah untuk merawat tanaman anda</Card.Title>
                                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</Card.Text>
                                                <div className="containerblog1">
                                                    <img className="profile-img" src={imgp2} alt="profile" />
                                                    <div className='metadata1'>
                                                        <div className="author-nameblog">Danica A.</div>
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
                                    <Col md={4} className="mb-3">
                                        <Card>
                                            <Card.Img variant="top" src={img3} />
                                            <Card.Body className="card-body-custom1">
                                                <div className="tips-trick">Tips & Trick</div>
                                                <Card.Title>Cara mudah untuk merawat tanaman anda</Card.Title>
                                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</Card.Text>
                                                <div className="containerblog1">
                                                    <img className="profile-img" src={imgp3} alt="profile" />
                                                    <div className='metadata1'>
                                                        <div className="author-nameblog">Danica A.</div>
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
                                </Row>
                </Container>
            </div>
        </div>
    );
};

export default BlogDetail;

import '../dist/css/dt.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import img from '../assets/blog/1.png';
import img2 from '../assets/blog/bunga3.png';
import img3 from '../assets/blog/bunga2.png';
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
                <div className="introduction">Cara merawat tanaman</div>
                <p>Sangat dipastika, kita ingin melihat taman yang ada dirumah kita bersih dan indah. Factor keindahan dari sebuah taman adalah dari tanaman atau tumbuhanya. Maka dari itu kita harus memperhatikan kondisi tanaman tersebut agar tidak mati dan bisa tetap tumbuh.</p>
                <p>Dengan matinya tanaman pada taman rumah, membuat rumah menjadi tidak indah lagi. Biasanya tanaman yang mati itu karena perawatanya tidak tepat. Sehingga membuat tanaman menjadi mati dan layu.</p>
                <p>Sinar matahari sangat berguna dan wajib bagi tanaman pada taman, karena dengan adanya matahari membuat tanaman bisa melakukan fotosintetis. Dengan adanya proses fotosintetis, maka tanaman dapat menghasilkan oksigen yang banyak dan baik.</p>
                <p>Maka dari itu kita harus mencukupi kebutuhan sinar matahari pada taman. Pemberian sinar matahari pun akan berbeda tiap jenis tanamanya, untuk tanaman hias memerlukan 4-6 jam setiap harinya dan untuk sayur dan buah-buahan minimal 6 jam perharinya.</p>

                <div className="image-container">
                    <img className="image-detail" src={img3} alt="Placeholder Image" />
                    <div className="text-container">
                        <div className="vertical-line"></div>
                        <div className="text">tanaman-hias</div>
                    </div>
                </div>

                <div className='styled-text'>Menjaga Kelembapan Tanaman</div>
                <p>Pemilihan tanaman pada taman juga harus memperhatikan kondisi cuaca dan kelembaban area tersebut, maka dari itu dengan menjaga cuaca dan kelembaban yang pas, maka membuat tanaman menjadi lebih susah layu.</p>
                <p>Kita harus menanam tanaman dengan memperhatikan daerah kita, jika daerah kita berada di dataran rendah maka jangan menanam tanaman yang beriklim subtropics atau tanaman dataran tinggi.</p>

                <div className='text2'>Terakhir!</div>
                <p>Pada umumnya, setiap jenis tanaman membutuhkan air untuk kelangsungan hidupnya. Dengan adanya air juga membuat tanaman menjadi lebih sehat dan tidak kering. Tetapi kebutuhan air pada setiap jenis tanaman itu berbeda-beda.</p>
                <p>rawatlah tanaman kalian mulai sekarang, agar selalu sehat </p>
            </div>

            <div className='container-info'>
                <div className='text3'>Informasi Lainnya</div>
                <p>Informasi lainnya tentang tanaman yang mungkin anda butuhkan</p>

                <Container>
                <Row>
                                    <Col md={4} className="mb-3">
                                        <Card>
                                            <Card.Img variant="top" src={img}  className="custom-card-img2" />
                                            <Card.Body className="card-body-custom1">
                                                <div className="tips-trick">Tips & Trick</div>
                                                <Card.Title className="card-title2">Cara mudah untuk merawat tanaman anda</Card.Title>
                                                <Card.Text className='card-text-left1'>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
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
                                            <Card.Img variant="top" src={img2} className="custom-card-img2"  />
                                            <Card.Body className="card-body-custom1">
                                                <div className="tips-trick">Tips & Trick</div>
                                                <Card.Title className="card-title2">Cara mudah untuk merawat tanaman anda</Card.Title>
                                                <Card.Text className='card-text-left1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
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
                                            <Card.Img variant="top" src={img3}  className="custom-card-img2" />
                                            <Card.Body className="card-body-custom1">
                                                <div className="tips-trick">Tips & Trick</div>
                                                <Card.Title className="card-title2">Cara mudah untuk merawat tanaman anda</Card.Title>
                                                <Card.Text className='card-text-left1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
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

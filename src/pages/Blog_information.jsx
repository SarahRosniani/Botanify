import React, { useState, useEffect } from 'react';
import '../dist/css/d.css';
import axios from 'axios';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Underline1 from '../assets/Vector 1.png';
import Underline2 from '../assets/Vector 2.png';
import imgp from '../assets/blog/p1.png';

const Blog_information = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [tipsContent, setTipsContent] = useState([]);

    useEffect(() => {
        fetchTipsContent();
    }, []);

    const fetchTipsContent = async () => {
        try {
            const response = await axios.get('http://localhost:3000/informasi');
            if (response.status !== 200) {
                throw new Error('Failed to fetch tips content');
            }
            setTipsContent(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleCardClick = (id_informasi) => {
        navigate(`/detail/${id_informasi}`);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const truncateText = (text, maxWords) => {
        const words = text.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return text;
    };

    return (
        <div>
            <section className="blog section">
                <div className="container">
                    <div className="row gy-8">
                        <div className="flex-column">
                            <h1 className="">Tambah wawasan anda
                                <div className="underline-containerblog1">
                                    <img src={Underline1} alt="underline" className="underline-img22" />
                                </div>
                                <div className="underline-containerblog2">
                                    <img src={Underline2} alt="underline" className="underline-img00" />
                                </div>
                                tentang tanaman hias</h1>
                            <p className="">Pelajari lebih dalam tentang tanaman anda dan cara merawat tanaman dengan benar</p>
                        </div>
                        <div className="container">
                            <div className="headerb">
                                <form className="search-form">
                                    <i className="bi bi-search icon"></i>
                                    <input
                                        type="text"
                                        placeholder="Cari informasi"
                                        className="text"
                                        value={searchTerm}
                                        onChange={handleSearch}
                                    />
                                </form>
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
                            <Container>
                                <Row>
                                    {tipsContent
                                        .map((content) => (
                                            <Col md={6} lg={4} className="mb-3" key={content.id}>
                                                <div className="card-container">
                                                    <Card onClick={() => handleCardClick(content.id_informasi)} className="custom-card">
                                                        <Card.Img variant="top" src={content.foto_informasi} className="custom-card-img" />
                                                        <Card.Body className="card-body-custom1">
                                                            <div className="tips-trick">{content.kategori}</div>
                                                            <Card.Title className="card-titlez">{content.judul}</Card.Title>
                                                            <Card.Text className="card-textz">{truncateText(content.isi_artikel, 10)}</Card.Text>
                                                            <div className="containerblog1">
                                                                <img className="profile-img" src={imgp} alt="profile" />
                                                                <div className='metadata1'>
                                                                    <div className="author-nameblog">{content.penerbit}</div>
                                                                    <div className="metadata-container">
                                                                        <div className="date">{content.tanggal}</div>
                                                                        <div className="divider1"></div>
                                                                        <div className="read-time">{content.readTime}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            </Col>
                                        ))}
                                </Row>
                            </Container>
                        </div>
                    </Tab>

                    <Tab eventKey="tips" title="Tips & Trick">
                        <div>
                            <Container>
                                <Row>
                                    {tipsContent
                                        .filter(content => content.kategori === 'Tips & Trick')
                                        .map((content) => (
                                            <Col md={6} lg={4} className="mb-3" key={content.id}>
                                                <div className="card-container">
                                                    <Card onClick={() => handleCardClick(content.id_informasi)} className="custom-card">
                                                        <Card.Img variant="top" src={content.foto_informasi} className="custom-card-img" />
                                                        <Card.Body className="card-body-custom1">
                                                            <div className="tips-trick">{content.kategori}</div>
                                                            <Card.Title className="card-titlez">{content.judul}</Card.Title>
                                                            <Card.Text className="card-textz">{truncateText(content.isi_artikel, 10)}</Card.Text>
                                                            <div className="containerblog1">
                                                                <img className="profile-img" src={imgp} alt="profile" />
                                                                <div className='metadata1'>
                                                                    <div className="author-nameblog">{content.penerbit}</div>
                                                                    <div className="metadata-container">
                                                                        <div className="date">{content.tanggal}</div>
                                                                        <div className="divider1"></div>
                                                                        <div className="read-time">{content.readTime}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            </Col>
                                        ))}
                                </Row>
                            </Container>
                        </div>
                    </Tab>

                    <Tab eventKey="diagnosa" title="Diagnosa">
                        <div>
                            <Container>
                                <Row>
                                    {tipsContent
                                        .filter(content => content.kategori === 'Diagnosa')
                                        .map((content) => (
                                            <Col md={6} lg={4} className="mb-3" key={content.id}>
                                                <div className="card-container">
                                                    <Card onClick={() => handleCardClick(content.id_informasi)} className="custom-card">
                                                        <Card.Img variant="top" src={content.foto_informasi} className="custom-card-img" />
                                                        <Card.Body className="card-body-custom1">
                                                            <div className="tips-trick">{content.kategori}</div>
                                                            <Card.Title className="card-titlez">{content.judul}</Card.Title>
                                                            <Card.Text className="card-textz">{truncateText(content.isi_artikel, 10)}</Card.Text>
                                                            <div className="containerblog1">
                                                                <img className="profile-img" src={imgp} alt="profile" />
                                                                <div className='metadata1'>
                                                                    <div className="author-nameblog">{content.penerbit}</div>
                                                                    <div className="metadata-container">
                                                                        <div className="date">{content.tanggal}</div>
                                                                        <div className="divider1"></div>
                                                                        <div className="read-time">{content.readTime}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            </Col>
                                        ))}
                                </Row>
                            </Container>
                        </div>
                    </Tab>

                    <Tab eventKey="penyakit" title="Penyakit">
                        <div>
                            <Container>
                                <Row>
                                    {tipsContent
                                        .filter(content => content.kategori === 'Penyakit')
                                        .map((content) => (
                                            <Col md={6} lg={4} className="mb-3" key={content.id}>
                                                <div className="card-container">
                                                    <Card onClick={() => handleCardClick(content.id_informasi)} className="custom-card">
                                                        <Card.Img variant="top" src={content.foto_informasi} className="custom-card-img" />
                                                        <Card.Body className="card-body-custom1">
                                                            <div className="tips-trick">{content.kategori}</div>
                                                            <Card.Title className="card-titlez">{content.judul}</Card.Title>
                                                            <Card.Text className="card-textz">{truncateText(content.isi_artikel, 10)}</Card.Text>
                                                            <div className="containerblog1">
                                                                <img className="profile-img" src={imgp} alt="profile" />
                                                                <div className='metadata1'>
                                                                    <div className="author-nameblog">{content.penerbit}</div>
                                                                    <div className="metadata-container">
                                                                        <div className="date">{content.tanggal}</div>
                                                                        <div className="divider1"></div>
                                                                        <div className="read-time">{content.readTime}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            </Col>
                                        ))}
                                </Row>
                            </Container>
                        </div>
                    </Tab>
                    <Tab eventKey="acara" title="Acara">
                        <div>
                            <Container>
                                <Row>
                                    {tipsContent
                                        .filter(content => content.kategori === 'Acara')
                                        .map((content) => (
                                            <Col md={6} lg={4} className="mb-3" key={content.id}>
                                                <div className="card-container">
                                                    <Card onClick={() => handleCardClick(content.id_informasi)} className="custom-card">
                                                        <Card.Img variant="top" src={content.foto_informasi} className="custom-card-img" />
                                                        <Card.Body className="card-body-custom1">
                                                            <div className="tips-trick">{content.kategori}</div>
                                                            <Card.Title className="card-titlez">{content.judul}</Card.Title>
                                                            <Card.Text className="card-textz">{truncateText(content.isi_artikel, 10)}</Card.Text>
                                                            <div className="containerblog1">
                                                                <img className="profile-img" src={imgp} alt="profile" />
                                                                <div className='metadata1'>
                                                                    <div className="author-nameblog">{content.penerbit}</div>
                                                                    <div className="metadata-container">
                                                                        <div className="date">{content.tanggal}</div>
                                                                        <div className="divider1"></div>
                                                                        <div className="read-time">{content.readTime}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            </Col>
                                        ))}
                                </Row>
                            </Container>
                        </div>
                    </Tab>
                </Tabs>
            </section>
        </div>
    );
}

export default Blog_information;

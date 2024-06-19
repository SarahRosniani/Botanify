import React, { useState, useEffect } from 'react';
import '../dist/css/d.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Underline1 from '../assets/Vector 1.png';
import Underline2 from '../assets/Vector 2.png';
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

    const handleCardClick = () => {
        navigate('/detail');
    };

    const blogs = [
        { id: 1, img: img, title: 'Cara mudah untuk merawat tanaman anda', text: 'Sangat dipastikan, kita ingin melihat taman yang ada dirumah kita bersih dan indah. Susnue.', profileImg: imgp, author: 'Danica A.', date: '11 Jan 2022', readTime: '5 min read' },
        { id: 2, img: img2, title: '5 Cara Mudah Rawat Tanaman Indoor, Biar Nggak Layu', text: 'Berikut trik dan tips merawat tanaman Indoor agar tidak layu dan mati. Sus.', profileImg: imgp2, author: 'Danica A.', date: '11 Jan 2022', readTime: '5 min read' },
        { id: 3, img: img3, title: '13 Cara mengatasi tanaman dari hama', text: 'Usahakan untuk menggunakan media tanam yang sesuai,Suspendisse varius enim in eros.', profileImg: imgp3, author: 'Danica A.', date: '11 Jan 2022', readTime: '5 min read' },
        { id: 4, img: img4, title: 'Tanaman Hias Indor Hits', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.', profileImg: imgp4, author: 'Danica A.', date: '11 Jan 2022', readTime: '5 min read' },
        { id: 5, img: img5, title: 'Cara mudah untuk merawat tanaman anda', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.', profileImg: imgp5, author: 'Danica A.', date: '11 Jan 2022', readTime: '5 min read' },
        { id: 6, img: img6, title: 'Cara mudah untuk merawat tanaman anda', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.', profileImg: imgp6, author: 'Danica A.', date: '11 Jan 2022', readTime: '5 min read' },
        { id: 7, img: img7, title: 'Cara mudah untuk merawat tanaman anda', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.', profileImg: imgp7, author: 'Danica A.', date: '11 Jan 2022', readTime: '5 min read' },
        { id: 8, img: img8, title: 'Menanam bunga dengan baik seperti ini', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.', profileImg: imgp8, author: 'Danica A.', date: '11 Jan 2022', readTime: '5 min read' },
        { id: 9, img: img9, title: 'Menanam bunga dengan baik seperti ini', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.', profileImg: imgp9, author: 'Danica A.', date: '11 Jan 2022', readTime: '5 min read' },
    ];

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                                    {filteredBlogs.map(blog => (
                                        <Col md={6} lg={4} className="mb-3" key={blog.id}>
                                            <div className="card-container">
                                            <Card onClick={handleCardClick} className="custom-card">
                                                <Card.Img variant="top" src={blog.img} className="custom-card-img" />
                                                <Card.Body className="card-body-custom1">
                                                    <div className="tips-trick">Tips & Trick</div>
                                                    <Card.Title className="card-titlez">{blog.title}</Card.Title>
                                                    <Card.Text className="card-textz">{truncateText(blog.text, 20)}</Card.Text>
                                                    <div className="containerblog1">
                                                        <img className="profile-img" src={blog.profileImg} alt="profile" />
                                                        <div className='metadata1'>
                                                            <div className="author-nameblog">{blog.author}</div>
                                                            <div className="metadata-container">
                                                                <div className="date">{blog.date}</div>
                                                                <div className="divider1"></div>
                                                                <div className="read-time">{blog.readTime}</div>
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
                                        <Card onClick={handleCardClick} className="custom-card">
                                            <Card.Img variant="top" src={content.foto_informasi} className="custom-card-img" />
                                            <Card.Body className="card-body-custom1">
                                                <div className="tips-trick">{content.kategori}</div>
                                                <Card.Title className="card-titlez">{content.judul}</Card.Title>
                                                <Card.Text className="card-textz">{truncateText(content.isi_artikel, 20)}</Card.Text>
                                                <div className="containerblog1">
                                                    <img className="profile-img" src={content.profileImg} alt="profile" />
                                                    <div className='metadata1'>
                                                        <div className="author-nameblog">{content.penerbit}</div>
                                                        <div className="metadata-container">
                                                            <div className="date">{content.date}</div>
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
);
}

export default Blog_information;


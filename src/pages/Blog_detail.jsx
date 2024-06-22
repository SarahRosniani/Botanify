import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import imgp from '../assets/blog/p1.png';

const BlogDetail = () => {
    const { id_informasi } = useParams();
    const navigate = useNavigate();
    const [blogContent, setBlogContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tipsContent, setTipsContent] = useState([]);

    useEffect(() => {
        fetchBlogContent();
        fetchTipsContent();
    }, [id_informasi]);

    const fetchBlogContent = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/informasi/${id_informasi}`);
            if (response.status !== 200) {
                throw new Error('Failed to fetch blog detail');
            }
            console.log('Blog Content:', response.data.data);
            setBlogContent(response.data.data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    const fetchTipsContent = async () => {
        try {
            const response = await axios.get('http://localhost:3000/informasi');
            if (response.status !== 200) {
                throw new Error('Failed to fetch tips content');
            }
            console.log('Tips Content:', response.data);
            const firstThreeItems = response.data.slice(0, 3);
            setTipsContent(firstThreeItems);
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleCardClick = (id) => {
        navigate(`/detail/${id}`);
    };

    return (
        <div className="blog-detail">
            {blogContent && (
                <React.Fragment key={blogContent.id_informasi}>
                    <div className="title-section">
                        <div className="title">
                            <a href="/blogb" className="blog-category">Blog</a>
                            <i className="bi bi-chevron-right small-icon"></i>
                            <div className="post-title">{blogContent.kategori}</div>
                            <i className="bi bi-chevron-right small-icon"></i>
                            <div className="post-title1">{blogContent.judul}</div>
                        </div>
                    </div>
                    <h1>{blogContent.judul}</h1>
                    <div className="containerd">
                        <img className="profile-img" src={imgp} alt="Author" />
                        <div className="content-flex">
                            <div className="metadata">
                                <div className="author-name">{blogContent.penerbit}</div>
                                <div className="metadata-container">
                                    <div className="date">{blogContent.tanggal}</div>
                                    <div className="divider"></div>
                                    <div className="read-time">{blogContent.waktu_baca} 5 min read</div>
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

                    <img className="custom-image" src={blogContent.foto_informasi} alt="Custom" />

                    <div className='blog-container'>
                    <div className="introduction">{blogContent.judul}</div>
                    <p>{blogContent.isi_artikel}</p>
                    {blogContent.isi_artikel.substring(0, 195).split('. ').map((paragraph, index) => (
                        <p key={index}>{paragraph}.</p>
                    ))}

                    <div className="image-container">
                        <img className="image-detail" src={blogContent.foto_informasi} alt="Placeholder Image" />
                        <div className="text-container">
                        <div className="vertical-line"></div>
                        <div className="text">{blogContent.kategori}</div>
                        </div>
                    </div>

                    <div className="styled-text">{blogContent.isi_artikel.substring(195, 210).split(' ').slice(0, 10).join(' ')}</div>
                    {blogContent.isi_artikel.substring(210,909).split('. ').map((paragraph, index) => (
                    <p key={index}>{paragraph}.</p>
                    ))}

                    <div className='text2'>Terakhir!</div>
                   <p>{blogContent.isi_artikel.substring(909) + '.'}</p>

                    </div>
                </React.Fragment>
            )}

            <div className='container-info'>
                <div className='text3'>Informasi Lainnya</div>
                <p>Informasi lainnya tentang tanaman yang mungkin Anda butuhkan</p>

                <Container>
                    <Row>
                        {tipsContent
                            .filter(content => content.id_informasi !== id_informasi)
                            .map((content) => (
                                <Col md={4} key={content.id_informasi}>
                                    <Card onClick={() => handleCardClick(content.id_informasi)} className="custom-card">
                                        <Card.Img variant="top" src={content.foto_informasi} className="custom-card-img" />
                                        <Card.Body className="card-body-custom1">
                                            <div className="tips-trick">Tips & Trick</div>
                                            <Card.Title className="card-title2">{content.judul}</Card.Title>
                                            <Card.Text className='card-text-left1'>
                                                {content.isi_artikel.substring(0, 100)}...
                                            </Card.Text>
                                            <div className="containerblog1">
                                                <img className="profile-img" src={imgp} alt="profile" />
                                                <div className='metadata1'>
                                                    <div className="author-nameblog">{content.penerbit}</div>
                                                    <div className="metadata-container">
                                                        <div className="date">{content.tanggal}</div>
                                                        <div className="divider"></div>
                                                        <div className="read-time">{content.waktu_baca}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default BlogDetail;

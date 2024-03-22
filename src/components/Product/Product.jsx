import React, { useEffect, useState } from 'react'
import './Product.scss'
import plus from '../../assets/images/plus.svg'
import edit from '../../assets/images/edit.svg'
import deletee from '../../assets/images/delete.svg'
import searchh from '../../assets/images/search.svg'
import axios from 'axios'
import { Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../Loader'
import Pagination from './Pagination'
const Product = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5)
    const [filteredFur, setFilteredFur] = useState(product);
    const [search, setSearch] = useState([]);
    const navigate = useNavigate();
    const fetchProducts = async () => {



        try {
            setLoading(true);
            const res = await axios.get(`http://localhost:3000/products`);

            const data = await res.data;
            console.log(data)
            setProduct(data)
            setSearch(data)
        } catch (error) {
            console.log(error.message)
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchProducts();

    }, [])

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currenPosts = search.slice(firstPostIndex, lastPostIndex);





    const handleProductSearch = (e) => {
        const text = e.target.value.toLowerCase().trim();
        // const number = e.target.value.toString();
        setSearch(product.filter(f => f.brand.toLowerCase().includes(text) 
 
      

        ))
    };



    const Add = () => {
        navigate('/Add')
    }

    const deleteStudent = (id) => {
        const confirm = window.confirm('Would you like to delete this product?');
        if (confirm) {
            axios.delete(`http://localhost:3000/products/` + id).then(res => {
                console.log(res.data)
                fetchProducts()
            })
        }
    }


    const handleChange = (type) => {
        if (type === "prev") {
            setCurrentPage(currentPage - 1)
        } else {
            setCurrentPage(currentPage + 1)
        }
    }

    const hasPrev = Boolean(currentPage > 1)
    const hasPrev2 = Boolean(currentPage < 3)




    return (
        <div className='Product'>
            <div className="Product-header">
                <h3 className='Tovar'>Товары</h3>
                <p> Главная / Товары</p>
            </div>
            {loading && <Loader />}
            <div className='  Products'>
                <div className='d-flex ' style={{
                    position: 'relative',
                }}>
                    <h3 style={{
                        marginTop: '30px',
                        marginLeft : '10px',
                    }} className='Tovar'> Все товари ({product.length})</h3>
                    <img style={{
                        position: 'absolute',
                        top: '40px',
                        right: '260px'
                    }} src={searchh} alt="" />

                    <input style={{
                        marginLeft: "860px",
                        marginTop: "30px",
                        borderRadius: '12px',
                        width: '250px',
                        height: '40px',
                        background: '#F7F7FF',
                        border: 'none',
                        padding: '20px 43px',
                        fontSize: '14px',
                        color: '#000000',
                        outline: 'none',


                    }} placeholder='Поиск' onChange={handleProductSearch} type="text" id='input' />
                </div>
                <div className='container '  >

                <Table className='my-3  '  responsive>
                    <thead>
                        <tr>
                            <th  style={{
                                color: "#B5B5C3"

                            }}>Наименоваие</th>
                            <th style={{
                                color: "#B5B5C3"

                            }}>Артикул</th>
                            <th style={{
                                color: "#B5B5C3"

                            }}>Бренд</th>
                            <th style={{
                                color: "#B5B5C3"

                            }}>Цена</th>
                            <th style={{
                                color: "#B5B5C3"

                            }}>Цена со скыдкой</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currenPosts.map((item, index) => (
                            <tr key={index}>

                                <td>Товар{index + 1}</td>
                                <td className='w-25'> {item.Article}</td>
                                <td>{item.brand}</td>
                                <td>{item.price}</td>
                                <td > {item.sale ? item.sale : 'no discount'}</td>
                                <td className='d-flex'>
                                    <Link to={`/edit/${item.id}`} className='btn btn-bg '><img src={edit} alt="" /></Link>
                                    <button className='btn btn-bg'><img src={deletee} alt="" onClick={e => deleteStudent(item.id)} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                </div>
                <Pagination totalPosts={product.length} postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    handleChange={handleChange}
                    hasPrev={hasPrev}
                    hasPrev2={hasPrev2}></Pagination>
            </div>
            <button className='btn-add' onClick={Add}><img src={plus} alt="" /> Новый товар</button>
            <p className='pp'>© Anymarket 2022</p>
        </div>
    )
}

export default Product
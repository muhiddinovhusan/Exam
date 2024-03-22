import { useNavigate, useParams } from 'react-router-dom'
import './Edit.scss'
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
const Edit = () => {
  // const [product, setProduct] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({


    title: '',
    description: '',
    brand: '',
    price: 0,
    sale: false,
    Article: 0
  })

  const fetchNew = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/products/${id}`);
      const data = await res?.data;
      console.log(data);
      setValues(data)

    } catch (error) {
    }
  }
  useEffect(() => {
    fetchNew(id);

  }, [id])

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/products/${id}`, values).then(res => {
      console.log(res)
      navigate('/')
    }
    )

  }
  return (
    <form onSubmit={handleUpdate} className='Add'>
      <div className="Add-header">

        <h3>Изменить товар</h3>
        <p>Главная /Товары / Изменить товар</p>
      </div>
      <div className='Add-hero'>
        <button id='main'>Изменить</button>
        <div    >
          <div className='form-control' >




            <div className='mb-3'>
              <label htmlFor="title" className='form-label'>Название *</label>
              <input type="text" required className='Title' id='title' value={values.title || ''}
                onChange={e => setValues({ ...values, title: e.target.value })} />
            </div>

            <div className='d-flex gap-5'>

              <div className='mb-3'>
                <label htmlFor="lastName" className='form-label' id='form-cont'>Бранд *</label>
                <input required type="text" className='' id='brand' value={values.brand || ''}
                  onChange={e => setValues({ ...values, brand: e.target.value })} />
              </div>
              <div className='mb-3'>
                <label htmlFor="Article" className='form-label ' id='Article2'>Артикул производителя *</label>
                <input type="number" required className='' id='Article' value={values.Article || ''}
                  onChange={e => setValues({ ...values, Article: e.target.value })} />
              </div>

            </div>
          </div >
          <div className='mb-3'>
            <label htmlFor="desc" className='form-label'>Описание *</label>
            <input type="text" required className='' id='desc' value={values.description || ''}
              onChange={e => setValues({ ...values, description: e.target.value })} />
          </div>

          <div className='d-flex gap-5'>


            <div className='mb-3'>
              <label htmlFor="desc" className='form-label'>Цена </label>
              <input type="text" required className='' id='price' value={values.price || ''}
                onChange={e => setValues({ ...values, price: e.target.value })} />
            </div>
            <div className='mb-3'>
              <label htmlFor="desc" className='form-label'> Цена со скыдкой</label>
              <input type="text" className='' id='price' value={values.sale || ''}
                onChange={e => setValues({ ...values, sale: e.target.value })} />
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <Button variant="primary" id='btnfoot' type="submit">
          Изменить  </Button>
        <button id='btnfoot2'>Отмена</button>
      </div>

    </form>
  )
}

export default Edit
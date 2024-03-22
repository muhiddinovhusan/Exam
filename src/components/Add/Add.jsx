import { Button, Form } from 'react-bootstrap'
import './Add.scss'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Add = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    description: '',
    title: '',
    brand: '',
    price: 0,
    sale: false,
    Article: 0
  })





  const handleSubmit = (e) => {

    e.preventDefault();
    
    axios.post(`http://localhost:3000/products`, values).then(res => {
      console.log(res)
      navigate('/')
    }
    )
  }

  return (
    <form onSubmit={handleSubmit} className='Add'>
      <div className="Add-header">
        <h3>Новый товар</h3>
        <p>Главная /Товары / Новый товар</p>
      </div>
      <div className='Add-hero'>
        <button id='main'>Основные</button>
        <div    >
          <div className='form-control' >




            <div className='mb-3'>
              <label htmlFor="title" className='form-label'>Название *</label>
              <input type="text" required className='Title' id='title' onChange={e => setValues({ ...values, title: e.target.value })} />
            </div>

            <div className='d-flex gap-5'>

              <div className='mb-3'>
                <label htmlFor="lastName" className='form-label' id='form-cont'>Бранд *</label>
                <input type="text" required className='' id='brand' onChange={e => setValues({ ...values, brand: e.target.value })} />
              </div>
              <div className='mb-3'>
                <label htmlFor="Article" className='form-label ' id='Article2'>Артикул производителя *</label>
                <input type="number" required className='' id='Article' onChange={e => setValues({ ...values, Article: e.target.value })} />
              </div>

            </div>
          </div >
          <div className='mb-3'>
            <label htmlFor="desc" className='form-label'>Описание *</label>
            <input type="text" required className='' id='desc' onChange={e => setValues({ ...values, description: e.target.value })} />
          </div>

          <div className='d-flex gap-5'>


            <div className='mb-3'>
              <label htmlFor="desc" className='form-label'>Цена </label>
              <input type="text" className='' required id='price' onChange={e => setValues({ ...values, price: e.target.value })} />
            </div>
            <div className='mb-3'>
              <label htmlFor="desc" className='form-label'> Цена со скыдкой</label>
              <input type="text" className='' id='price' onChange={e => setValues({ ...values, sale: e.target.value })} />
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <Button variant="primary" id='btnfoot' type="submit">
          Сохранить  </Button>
        <button id='btnfoot2'>Отмена</button>
      </div>

    </form>
  )
}


export default Add
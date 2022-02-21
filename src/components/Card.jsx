import image01 from '../image/image1.jpg'
import image02 from '../image/image2.jpg'



import '../style/cards.css'
export default function Card() {

    const title = 'CRISTIAN CORREA';
    const description = 'Soy desarrollador sofware junior, tengo 21 años de edad y llevo 6 meses de estudio,puedes ver mi proceso de aprendizaje en los siguientes link de enlaces que te dejo abajo'

    return (
        <div className='container-card'>
            <div className="card">
                <img src={image01} alt='imagen de la card' />
                <div className='card-img-user'>
                    <img src={image02} alt='imagen user' />
                </div>
                <div className='card-info'>
                    <h1> {title} </h1>
                    <p> {description} </p>
                    <a href='#!' className='btn btn-outline-primary' > Got to github </a>
                    <a href='#!' className='btn btn-outline-primary' > Go to likened</a>
                </div>
            </div>
        </div>
    )
}

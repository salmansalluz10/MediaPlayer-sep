
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Landing = () => {
  return (
    <div style={{paddingTop:"200px"}} className='container'>
      <div className='row align-items-center'>
      <div className='col-md-6'>
      <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
      <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus non, porro deserunt accusamus aliquid architecto, eum officiis et, inventore voluptas vitae aut? Tempore possimus, magnam molestiae similique in autem! Aliquam!</p>
      <Link to={'/home'} className='btn btn-info'>Get Started</Link>
      </div>
      <div className='col-md-6'>
      <img src="https://media.giphy.com/media/noLiBWJsX9mes/giphy.gif" alt="" className='ms-5 img-fluid'/>
      </div>
      </div>
      <div>
        <h3 className='text-center mt-5'>Features</h3>
        <div className='row mt-5'>
        <div className='col-md-4'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media0.giphy.com/media/WFmjWifrj9DJ50YaXj/giphy.gif?cid=6c09b952fvs7e8mnzs8l73frrl284kka0jmvs04x7rr0mc03&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className='col-md-4'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.tenor.com/eMrZP9HBkqEAAAAj/frkst-records.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className='col-md-4'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.tenor.com/11u8gg1tMs4AAAAM/music-rock.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        </div>
      </div>
      {/* end part */}
      <div className='my-5 row align-items-center border rounded p-5'>
      <div className='col-md-6'>
      <h2 className='text-warning'>Simple,Fast and Powerful</h2>
      <p><span className='fs-5 fw-bolder'>Play Everything</span> : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita dolores incidunt repellat.</p>
      <p><span className='fs-5 fw-bolder'>Categorize Videos</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit..</p>
      <p><span className='fs-5 fw-bolder'>Managing History</span> : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum esse ullam cupiditate.</p>
      </div>
      <div className='col-md-6'>
      <iframe width="540" height="315" src="https://www.youtube.com/embed/bfALBpJ3c3c?si=8a8w4ApwdbNp8qeH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      </div>
      </div>
  )
}

export default Landing
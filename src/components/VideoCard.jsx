

import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { deleteVideoApi, saveHistoryAPI } from '../services/allAPI';


const VideoCard = ({displayData,setDeleteVideoResponseFromVideoCard,insideCategory}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () =>{
    /* modal show */ setShow(true);

    //store history in json
    const {caption,youtubeLink} = displayData
    const sysDateTime = new Date()
    const TimeStamp = sysDateTime.toLocaleString(`en-us`,{timeZoneName:"short"})
    const historyDetails = {caption,youtubeLink,TimeStamp}

    try{
      await saveHistoryAPI(historyDetails)
    }catch(err){
      console.log(err);
      
    }
  } 

  const removeVideo = async (id)=>{
      try{
    const result = await deleteVideoApi(id)
        setDeleteVideoResponseFromVideoCard(result)
      }catch(err){
        console.log(err);
      }
  }

  const videoCardDragStarted = (e,dragVideoDetails)=>{
    console.log("inside drag",dragVideoDetails?.id);
    // share data using event drag start
    e.dataTransfer.setData("videoDetails",JSON.stringify(dragVideoDetails))
  }

  return (
    <>
      <Card draggable={true} onDragStart={e=>videoCardDragStarted(e,displayData)} style={{ width: '15rem'}}>
      <Card.Img onClick={handleShow} variant="top" src= {displayData?.imageUrl}/>
      <Card.Body>
        <Card.Text>
         <div className='d-flex justify-content-between'>
           <h5 className='mt-1'>{displayData?.caption}</h5>
           {
            !insideCategory && 
            <button onClick={()=>removeVideo(displayData?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
            }
         </div>
        </Card.Text>
      </Card.Body>
    </Card>


    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${displayData?.youtubeLink}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard
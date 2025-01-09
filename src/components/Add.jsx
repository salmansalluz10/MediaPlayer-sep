

import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { savevideoAPI } from '../services/allAPI';


const Add = ({setAddResponseFromHome}) => {

  const [invalidYoutubeLink,setInvalidYoutubeLink] = useState(false)

  const [videoDetails,setVideoDetails] = useState({
   caption : "",
   imageUrl : "",
   youtubeLink : ""
  })

  console.log(videoDetails);
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const  EmbedLinkFromYoutube = (userInput)=>{
      //steps for creating embed link
      if(userInput.includes("https://www.youtube.com/watch?v=")){
        console.log(userInput.split("v=")[1].slice(0,11));
        setInvalidYoutubeLink(false)
        const videoId = userInput.split("v=")[1].slice(0,11)
        setInvalidYoutubeLink(false)
        setVideoDetails({...videoDetails,youtubeLink:`https://www.youtube.com/embed/${videoId}`})

      }else{
        setInvalidYoutubeLink(true)
        setVideoDetails({...videoDetails,youtubeLink:""})
      }
  }

  const handleUploadVideo = async ()=>{
    // destructuring : 
    const {caption,imageUrl,youtubeLink} = videoDetails
    if(caption && imageUrl && youtubeLink){
        try{
        const result = await savevideoAPI(videoDetails)
        if(result.status>=200 && result.status<300){
          alert('Video added successfully')
          handleClose()
          //pass the result to view component
          setAddResponseFromHome(result)
        }
        console.log(result);
        
        }catch(err){
          console.log(err);
        }
    }else{
      alert('please fill all the form')
    }
  }

  return (
    <>
      <div className='d-flex align-items-center'>
      <h5 className='pt-2' style={{fontSize:"30px"}}>Upload New Video</h5>  
      <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder' style={{fontSize:"20px"}}>+</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uploading Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className='d-flex flex-column'>
          <input onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" className='form-control' placeholder='Video Caption'/><input onChange={e=>setVideoDetails({...videoDetails,imageUrl:e.target.value})}   type="text" className='form-control mt-3' placeholder='Video Image URL'/><input onChange={e=>EmbedLinkFromYoutube(e.target.value)} type="text" className='form-control mt-3' placeholder='Youtube Link'/>
          { invalidYoutubeLink &&
            <p className='text-danger'>*Invalid Link</p>
            }
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUploadVideo} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
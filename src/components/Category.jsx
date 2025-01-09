

import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { deleteCategoryApi, deleteVideoApi, getAllCategoryApi, saveCategoryAPI, updateCategoryApi } from '../services/allAPI';
import VideoCard from './VideoCard';



const Category = ({setDeleteResponseFromCategory,deleteResponseFromView}) => {

  const [allCategories,setAllCategories] = useState([])

  const [categoryName,setCategoryName] = useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    getAllCategories()
  },[deleteResponseFromView])

  const handleSaveCategory = async ()=>{
    if(categoryName){
      const categoryDetails = {categoryName,allVideos:[]}
      try{
       const result =  await saveCategoryAPI(categoryDetails)
       if(result.status>=200 && result.status<300){
        alert('category created')
        getAllCategories()
        handleClose()
       }
      }catch(err){
        console.log(err);
      }
    }else{
      alert('please provide a category name !!')
    }
  }

  const getAllCategories = async()=>{
    try{
      const result = await getAllCategoryApi()
      if(result.status>=200 && result.status<300){
        setAllCategories(result.data)
      }
    }catch(err){
      console.log(err);
    }
  }

  const removeCategory = async (id)=>{
    try{
      await deleteCategoryApi(id)
      getAllCategories()
    }catch(err){
      console.log(err);
      
    }
  }

  const dragOverCategory = (e)=>{
    e.preventDefault()
  }

  const VideoCardDropOverCategory = async (e,categoryDetails)=>{
    console.log(categoryDetails);
  const videoDetails =  JSON.parse(e.dataTransfer.getData("videoDetails"))
  console.log(videoDetails);
  //update category by adding video to allVideos 
  categoryDetails.allVideos.push(videoDetails)
  console.log(categoryDetails);
  //api call to make update the category
  await updateCategoryApi(categoryDetails)
  getAllCategories()
  const result = await deleteVideoApi(videoDetails?.id)
  setDeleteResponseFromCategory(result)
  }


  const categoryVideoDragStarted = (e,dragVideoDetails,categoryDetails)=>{
    console.log("drag started");
    let dragData = {video:dragVideoDetails,categoryDetails}
    e.dataTransfer.setData("dragdata",JSON.stringify(dragData))
  }

  return (
    <>
      <div className='d-flex justify-content-around align-items-center'>
        <h3>All Categories</h3>
        <button onClick={handleShow}  className='btn btn-warning ms-3 rounded-circle fw-bolder' style={{fontSize:"20px"}}>+</button>
      </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category !!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category Name</Form.Label>
        <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Enter category name" />
      </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className='btn' variant="primary" onClick={handleSaveCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>



      <div className='container-fluid p-3 m-3'>
          {/* single category view */}
          {
            allCategories?.length>0?
            allCategories?.map((categoryDetails)=>(
              <div droppable="true" onDragOver={dragOverCategory} onDrop={e=>VideoCardDropOverCategory(e,categoryDetails)} key={categoryDetails?.id} className='border rounded mb-3'>
          <div className='d-flex justify-content-between'>
          <h5>{categoryDetails?.categoryName}</h5>
          <button onClick={()=>removeCategory(categoryDetails?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
          </div>
          {/* display category videos */}
          <div className='row mt-2'>
            {
              categoryDetails?.allVideos?.length>0 &&
              categoryDetails?.allVideos?.map(video=>(
                <div draggable={true} onDragStart={e=>categoryVideoDragStarted(e,video,categoryDetails)} key={video?.id} className='col-lg-4'>
            <VideoCard insideCategory={true} displayData={video}/>
            </div>
              ))
            }
          </div>
          </div>
            ))
            :
            <div className='fw-bold text-danger fs-5'>
              No Categories added yet !!
            </div>
          }
      </div>
    </>
  )
}

export default Category
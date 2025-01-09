

import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllVideoAPI, savevideoAPI, updateCategoryApi } from '../services/allAPI'


const View = ({addResponseFromHome,deleteResponseFromCategory,setDeleteResponseFromView}) => {

  const [deleteVideoResponseFromVideoCard,setDeleteVideoResponseFromVideoCard] = useState("")

  const [allVideos,setAllVideos] = useState([])

  useEffect(()=>{
    getAllVideos()
  },[addResponseFromHome,deleteVideoResponseFromVideoCard,deleteResponseFromCategory])

  console.log(allVideos);
  

  const getAllVideos = async()=>{
      try{
        const result = await getAllVideoAPI()
        console.log(result);

        if(result.status>=200 && result.status<300){
          setAllVideos(result.data)
        }
        
      }catch(err){
        console.log(err);
      }
  }

  const dragOverView = (e)=>{
    e.preventDefault()
  }

  const categoryVideoDropOverView = async (e) => {
    e.preventDefault();
    console.log("inside category drag started");
  
    const { video, categoryDetails } = JSON.parse(e.dataTransfer.getData("dragData"));
    console.log(video, categoryDetails);
  
    // Remove the video from the category's allVideos array
    const updatedCategoryVideoList = categoryDetails?.allVideos?.filter(item => item.id !== video?.id);
    const updatedCategory = { ...categoryDetails, allVideos: updatedCategoryVideoList };
  
    try {
      // Update category on the server by calling the updateCategoryApi
      const updateResult = await updateCategoryApi(updatedCategory);
      console.log("Category updated:", updateResult);
  
      // Notify the parent component to update the UI
      setDeleteResponseFromView(updateResult);
  
      // After removing from the category, add the video to "All Videos" using savevideoAPI
      await savevideoAPI(video);
  
      // Refresh the video list in "All Videos"
      getAllVideos();
    } catch (error) {
      console.error("Error updating category or saving video:", error);
    }
  }

  return (
    <>
      <div>
        <Row droppable="true" onDragOver={dragOverView} onDrop={e=>categoryVideoDropOverView(e)}>
          {
            allVideos?.length>0?
            allVideos?.map(videos=>(
              <Col className='mb-2' sm={12} md={6} lg={5}>
              <VideoCard setDeleteVideoResponseFromVideoCard={setDeleteVideoResponseFromVideoCard} displayData={videos}/>
              </Col>
            ))
            :
            <div>No Videos uploaded</div>
          }
        </Row>
      </div>
    </>
  )
}

export default View
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryApi, getAllHistoryApi } from '../services/allAPI'


const History = () => {

  const [allVideoHistory,setAllVideoHistory] = useState([])

  useEffect(()=>{
    getAllHistory()
  },[])


  const getAllHistory = async()=>{
      try{
        const result = await getAllHistoryApi()
        if(result.status>=200 && result.status<300){
          setAllVideoHistory(result.data
          )
        }
      }catch(err){
        console.log(err);
        
      }
  }


  const removeHistory = async (id)=>{
    try{
      await deleteHistoryApi(id)
      getAllHistory()
    }catch(err){
      console.log(err);
      
    }
  }

  return (
    <div style={{paddingTop:"100px"}}>
      <div className='container d-flex justify-content-between'>
        <h1>Watch History</h1>
        <Link to={'/home'}>Back To Home</Link>
      </div>
      <table className='container table mt-5'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Link</th>
          <th>TimeStamp</th>
          <th>...</th>
        </tr>
      </thead>
      <tbody>
        {
        allVideoHistory?.length>0?
        allVideoHistory?.map((videoDetails,index)=>(
          <tr key={videoDetails?.id}>
          <td>{index+1}</td>
          <td>{videoDetails?.caption}</td>
          <td><a href={videoDetails?.youtubeLink}>{videoDetails?.youtubeLink}</a></td>
          <td>{videoDetails?.TimeStamp}</td>
          <td><button className='btn' onClick={()=>removeHistory(videoDetails?.id)}><i class="fa-solid fa-trash text-danger"></i></button></td>
        </tr>
        ))
        :
        <div className='fw-bolder text-danger'>
        No Video History !!
        </div>
        }
      </tbody>
      </table>
      </div>
  )
}

export default History
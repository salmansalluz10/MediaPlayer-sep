import commonApi from "./commonApi";
import SERVERURL from "./serverUrl";

// savevideoAPI - use POST method,used by 'Add' component. URL :  http://localhost:3000/uploadVideos


export const savevideoAPI = async (videoDetails)=>{
  return await commonApi("POST",`${SERVERURL}/uploadVideos`,videoDetails)
}


// getAllVideoAPI - use GET method,used by 'View' component. URL :  http://localhost:3000/uploadVideos


export const getAllVideoAPI = async ()=>{
    return await commonApi("GET",`${SERVERURL}/uploadVideos`,"")
  }



  // saveHistoryAPI - use POST method,used by 'VideoCard' component. URL :  http://localhost:3000/history


export const saveHistoryAPI = async (historyDetails)=>{
    return await commonApi("POST",`${SERVERURL}/history`,historyDetails)
  }


  // getAllHistoryApi - use GET method,used by 'History' component. URL :  http://localhost:3000/history

export const getAllHistoryApi = async ()=>{
    return await commonApi("GET",`${SERVERURL}/history`,"")
  }

  // deleteHistoryApi - delete http request to http://localhost:3000/history from history when user clicked on delete button.

  export const deleteHistoryApi = async (id)=>{
    return await commonApi("DELETE",`${SERVERURL}/history/${id}`,{})
  }


   // deleteVideoApi - delete http request to http://localhost:3000/uploadVideos from videocard when user clicked on delete button.

   export const deleteVideoApi = async (id)=>{
    return await commonApi("DELETE",`${SERVERURL}/uploadVideos/${id}`,{})
  }


  // saveCategoryAPI - use POST method,used by 'Category' component. URL :  http://localhost:3000/categories


export const saveCategoryAPI = async (CategroyDetails)=>{
  return await commonApi("POST",`${SERVERURL}/categories`,CategroyDetails)
}

// getAllCategoryApi - use GET method,used by 'Category' component. URL :  http://localhost:3000/categories

export const getAllCategoryApi = async ()=>{
  return await commonApi("GET",`${SERVERURL}/categories`,"")
}


// deleteCategoryApi - delete http request to http://localhost:3000/categories from 'Category' when user clicked on delete button.

export const deleteCategoryApi = async (id)=>{
  return await commonApi("DELETE",`${SERVERURL}/categories/${id}`,{})
}



// updateCategoryApi - put http request to http://localhost:3000/categories/id from 'Category' when user drops a video over category.

export const updateCategoryApi = async (CategroyDetails)=>{
  return await commonApi("PUT",`${SERVERURL}/categories/${CategroyDetails?.id}`,CategroyDetails)
}
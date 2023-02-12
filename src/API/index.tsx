
import request from "./request"


const { requestPOST } = request

const getDataAPI = (searchData:string) =>{
   return requestPOST ('/interview/keyword_search',{search_phrase:searchData});

}

export default {
    getDataAPI
}
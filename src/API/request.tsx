
const BASE_URL = 'http://3.141.23.218:5000'

const requestPOST = async (url:string, params:any) =>{

    const postUrl = `${BASE_URL}${url}`
    const data ={...params}
    data.login_token = 'INTERVIEW_SIMPLY2021' // 'INTERVIEW_SIMPLY2021'

    console.log('%c [ datadatadata ]-10', 'font-size:13px; background:pink; color:#bf2c9f;',data )
    return new Promise((resolve, reject)=>{
        fetch(postUrl,{
            headers:{
                Accept: 'application/json',
                'Content-Type':'application/json;text/html;charset=UTF-8',
                'Access-Control-Allow-Origin':'*' // 跨域解决
            },
            method:'POST',
            body:JSON.stringify(data) , 
        }).then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log(`%c${postUrl}`, 'font-size:13px; background:#00ff00; color:#fff;',response )
            resolve(response)
        }).catch((e)=>{
            console.log(`%c${postUrl}`, 'font-size:13px; background:#ff0000; color:#fff;',e )
            reject(e)
        }).finally(()=>{
            console.log(`%c${postUrl}`, 'font-size:13px; background:#0000ff; color:#fff;','finally' )
        })
    })
}   

export default {
    requestPOST
}
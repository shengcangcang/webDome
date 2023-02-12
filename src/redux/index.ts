import { createAction ,createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import _ from 'lodash'
// createAction 本质就是返回了一个 {type : 'CHANGEDATA'} 用来区分是哪个进行改变
// const changeData = createAction('CHANGEDATA')


import API from '../API'
// // // 首先, 创建 thunk
// const fetchUserById = createAsyncThunk(
//     'users/fetchByIdStatus',
//     async (userId, thunkAPI) => {
//     //   const response = await userAPI.fetchById(userId)
//       return ''
//     }
//   )

export  const getNumData = createAsyncThunk(
    'test/numdata',
    async (serch:string, { rejectWithValue })=>{
        try {

            console.log('%c [ serchserchserchserch ]-21', 'font-size:13px; background:pink; color:#bf2c9f;', serch)
            const response:any = await API.getDataAPI(serch) 
        
            console.log('%c [ getNumData-redux ]-21', 'font-size:13px; background:pink; color:#bf2c9f;', response)
            return response
        } catch (error:any) {
            if (!error.response) {
                throw error
              }


              console.log('%c [ errorerrorerrorerror ]-30', 'font-size:13px; background:pink; color:#bf2c9f;',error )
              return rejectWithValue(error.response)
        }
      
    }
)


 const testData = createSlice({
    name:'test', // 名称 是否可以随意命名
    initialState:{
        change:1,
        apiStatus:'fulfilled',
        showData:[],
    }, // 默认值的一个的设置
    reducers:{ // 执行的 action 变化
    //     changeData:(state,action)=>({
    //         ...state,
    //         ...action.payload,
    // })
    },
    extraReducers:(builder)=>{
        builder.addCase(getNumData.fulfilled,(state:any, { payload })=>{

            console.log('%c [  ]-54', 'font-size:13px; background:pink; color:#bf2c9f;', payload)
            if(payload.status === 'OK'){
                state.apiStatus = 'fulfilled'
                if(payload.data.product_trends){
                    state.showData = getTrendData(payload.data.product_trends) 
                }
               
            }else{
                state.apiStatus = 'rejected'
            }
          
        })
        builder.addCase(getNumData.rejected,(state, { payload })=>{
              state.apiStatus = 'rejected'
            // 接口错误？                                                                    
            console.log('%c [ rejectedrejected ]-41', 'font-size:13px; background:pink; color:#bf2c9f;',payload )
        })
        builder.addCase(getNumData.pending,(state, { payload })=>{
            // 执行前
            state.apiStatus = 'pending'
            // console.log('%c [ pendingpending ]-41', 'font-size:13px; background:pink; color:#bf2c9f;',payload )
        })
    }
})


const getTrendData = (data:any[])=>{

    return data.map((item,index:number)=>{
        const nowSearchData:any[] =_.cloneDeep(item.search_msv);  
        const startNum = nowSearchData[0].sv;
        const endNum = nowSearchData[nowSearchData.length - 1].sv;
        const TrendAvg = ( endNum - startNum ) / nowSearchData.length;
        // const upDownChange = endNum - startNum >= 0 // 大于0 加 小于减 负负得正直接加
        
        return{
            name:item.name,
            dataAvg:Math.abs(TrendAvg) ,
            color: index % 2 !== 0 ? '#8884d8':'#82ca9d', 
            startData:nowSearchData[0],
            endData:nowSearchData[nowSearchData.length - 1],
            search_msv:item.search_msv.map((items:any,indexs:number)=>{
            return{...items,av:  startNum + TrendAvg * indexs}
        })}
    })

}   


// export const  { changeData } = testData.actions

export default {
    testData: testData.reducer
}
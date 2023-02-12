// import { Button, TextField } from '@material-ui/core';
// import React from 'react';
// import { connect } from 'react-redux'
import './index.css';
// import { useNavigate } from 'react-router-dom' 
import Head from '../../components/head';
// import SearchIcon from '@material-ui/icons/Search';
import Search from '../../components/search'
import { Link } from 'react-router-dom';
// import API from '../../API';
// import { getNumData } from '../../redux';

function ErrorPage(props:any) {
  // const navigate = useNavigate() // 路由

  // // 头部
  // const homeHead = () =>{
  //   return(
  //     <div className='Home-flex Home-head'>
  //       <div className='Home-head-box'>
  //         <p className='Home-head-text'>
  //           <span className='Home-head-bold' >Best</span>Search
  //         </p>
  //       </div>
  //     </div>
  //   )
  // }

  // 搜索框
  // const searchBody = () =>{

  //   return(
  //     <div className="Home-flex Home-flex1 Home">
      
  //       <TextField
  //           id="outlined-full-width"
  //           style={{ margin: 8 }}
  //           placeholder="Placeholder"
  //           margin="normal"
  //           InputLabelProps={{
  //             shrink: true,
  //           }}
  //           variant="outlined"
  //         />
  //         <Button variant="outlined" onClick={()=>{

  //           // 
  //           navigate(`search/${4523}`)
  //           // useNavigate()
  //           // browserHistory
  //         }}>
  //          <SearchIcon  color='action'/>
  //         </Button>
      
  //     </div>
  //   )
  // }
  // console.log('%c [ render ]-67', 'font-size:13px; background:pink; color:#bf2c9f;', props)
  return (
    <div className='error-page'>
      404 Not Found
      <Link to={'/'}  > Back Home </Link>
    </div>
  );
}


// const mapStateToProps = ({testData}:any)=>({
//   // changeNum:testData.change,
//   // testData,
//   // console.log('%c [ mapStateToPropsmapStateToPropsmapStateToProps ]-83', 'font-size:13px; background:pink; color:#bf2c9f;', e)

// })

// connect 连接组件？

// export default connect(mapStateToProps)(Home);

export default ErrorPage;

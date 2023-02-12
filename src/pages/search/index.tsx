import React, { useEffect, useState } from 'react';
import logo from '../../logo.svg';
import './index.css';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import { connect } from 'react-redux';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getNumData } from '../../redux';
import AreaChartMin from '../../components/AreaChart';
// import SearchCom from '../../components/search';
import Head from '../../components/head';
import { CircularProgress } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import DesktopAccessDisabledIcon from '@material-ui/icons/DesktopAccessDisabled';

// import {
//   Chart,
//   AreaSeries,
// } from '@devexpress/dx-react-chart-material-ui';



function Search(props: any) {
  const navigate = useNavigate() // 路由
  // console.log('%c [ SearchSearchSearchSearch ]-7', 'font-size:13px; background:pink; color:#bf2c9f;',useParams() )
  const { name } = useParams()
  // const [search, setSearch] = useSearchParams()
  // const [useNum,setUseNum] = useState(0)
  const searchName = name?.replace(/\+/g, ' ') || ''


  // console.log('%c [  ]-28', 'font-size:13px; background:pink; color:#bf2c9f;', useParams())
  useEffect(() => {
    // console.log('%c [  ]-29', 'font-size:13px; background:pink; color:#bf2c9f;', useSearchParams())
    if (searchName !== '') {
      props.dispatch(getNumData(searchName))
    } else {
      navigate('/')
    }
  }, [name])



  const showAreaChart = (status: string) => {

    switch (status) {
      case 'pending':
        return (
          <div className='show-date-loading'>
            <CircularProgress size={60} />
          </div>
        )
      case 'fulfilled':
        return (
          props.showData.length !== 0 ? (
            <div className='Search-area'>
              {props.showData.map((item: any, index: number) => (
                <AreaChartMin
                  key={index}
                  data={item}
                  color={index % 2! == 0 ? '#0099cc' : '#009966'}
                  searchText={searchName}
                />
              ))}
            </div>
          ) : (
            <div className='show-date-otherIcon'>
              <DesktopAccessDisabledIcon style={{ width: 60, height: 60 }} />
             {`Not Found "${searchName}"`} 
            </div>
          )
        )

      default:
        return (
          <div className='show-date-otherIcon'>
            <ErrorIcon color='error' style={{ width: 60, height: 60 }} />
            Error
          </div>
        )
    }
  }


  return (
    <div className="Search-flex Search ">
      <Head showSearch={true} searchText={searchName} />
      <div className='Search-flex Search-body '>
        <div className='Search-area-body'>
          <p className='Search-area-title'>Related product trends</p>
         
          {showAreaChart(props.apiStatus)}
          {/* <div className='show-date-otherIcon'>
              <DesktopAccessDisabledIcon style={{ width: 60, height: 60 }} />
             {`Not Found "${searchName}"`} 
            </div> */}

          {/* {props.apiStatus === 'fulfilled' && props.showData.length !== 0 && (
            <div className='Search-area'>
              {props.showData.map((item: any, index: number) => (
                <AreaChartMin
                  key={index}
                  data={item}
                  color={index % 2! == 0 ? '#0099cc' : '#009966'}
                  searchText={searchName}
                />
              ))}
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}


const mapStateToProps = ({ testData }: any) => ({
  showData: testData.showData,
  apiStatus: testData.apiStatus
})


export default connect(mapStateToProps)(Search);

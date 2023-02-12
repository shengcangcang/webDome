import { Button, TextField } from '@material-ui/core';
import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom'
import Search from '../search';

interface HeadProps {
  showSearch: boolean;
  searchText?: string;
  searchOnClick?: () => void
}

function Head(props: HeadProps) {
  const navigate = useNavigate() // 路由
  const { showSearch } = props
  return (
    <div className='Com-head-flex Com-head'>
      <div className='Com-head-box'
        onClick={() => {
          navigate('/')
        }} >
        <p className='Com-head-text'>
          <span className='Com-head-bold' >Best</span>Search
        </p>
      </div>
      
      {showSearch && (
        <div className='Com-head-search'>
          <Search
            searchText={props.searchText || ''}
            searchOnClick={props.searchOnClick && props.searchOnClick}
            searchStatus={showSearch}
          />
        </div>
      )}

    </div>
  );
}

export default Head;

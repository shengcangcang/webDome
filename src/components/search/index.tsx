import { Button, TextField } from '@material-ui/core';
import React , { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';

interface SearchProps {
    className?:string;
    searchOnClick?:()=>void;
    searchText?:string;
    searchStatus?:boolean;
}

function Search(props:SearchProps) {
    const navigate = useNavigate() // 路由
    const [searchText,setSearchText] = useState( props.searchText ||'')

    const {className, searchOnClick ,searchStatus } = props;
    const newText = searchText.toString().replace(/\s/g,'+')
    return (
        <div className={`Com-search ${className}`}>

            <TextField
                className='Com-search-input'
                id="outlined-full-width"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                margin="normal"
                size='small'
                InputLabelProps={{
                    shrink: true,
                }}
                value={searchText}
                variant="outlined"
                onChange={(event)=>{
                    setSearchText(event.target.value)
                    // console.log('%c [  ]-33', 'font-size:13px; background:pink; color:#bf2c9f;', event.target.value)
                }}
                onKeyDown={(e)=>{
                    if(e.code==='Enter' || e.code === 'NumpadEnter'){
                        if(searchOnClick){
                            searchOnClick() 
                        }else{
                            if(searchText.trim().length !== 0 ){
                                navigate(`${searchStatus&&searchStatus?'/':''}search/${newText}`)
                            }else{
                                navigate(`/`)
                            }
                        }
                    }
                }}
                
            />
            <Button variant="outlined" size='large' onClick={() => {

                if(searchOnClick){
                    searchOnClick() 
                }else{
                    if(searchText.trim().length !== 0 ){
                        navigate(`${searchStatus&&searchStatus?'/':''}search/${newText}`)
                    }else{
                        navigate(`/`)
                    }
                }
                
            }}>
                <SearchIcon color='action' />
            </Button>

        </div>
    );
}

export default Search;

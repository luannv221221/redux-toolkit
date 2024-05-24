import React, { useEffect, useState } from 'react'
import ResultSearch from '../ResultSearch'
import { useDispatch } from 'react-redux';
import { getProductSearch } from '../../../redux-toolkit/reducers/productSlice';
import useDebounce from '../../hook/useDebounce';

export default function Menu() {
    const [showResultSearch, setShowResultSearch] = useState(false)
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm,1000)
    const handleChangeText = (e)=>{
        setSearchTerm(e.target.value);  
    }
    useEffect(()=>{
       dispatch(getProductSearch({searchText:searchTerm}))
    },[debouncedSearchTerm])
  return (
    <>
      <nav
            class="navbar navbar-expand-sm navbar-light bg-light"
        >
            <div class="container">
                <a class="navbar-brand" href="#">Navbar {searchTerm}</a>
                <button
                    class="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" href="#" aria-current="page"
                                >Home{showResultSearch}
                                <span class="visually-hidden">(current)</span></a
                            >
                        </li>   
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                id="dropdownId"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                >Dropdown</a
                            >
                            <div
                                class="dropdown-menu"
                                aria-labelledby="dropdownId"
                            >
                                <a class="dropdown-item" href="#"
                                    >Action 1</a
                                >
                                <a class="dropdown-item" href="#"
                                    >Action 2</a
                                >
                            </div>
                        </li>
                    </ul>
                    <form class="d-flex me-auto my-lg-0 position-relative">
                        <input
                            class="form-control me-sm-2"
                            type="text"
                            placeholder="Search"
                            onClick={()=>{setShowResultSearch(true)}}
                            onBlur={()=>setShowResultSearch(false)}
                            onChange={(e)=>{handleChangeText(e)}}
                        />
                        {showResultSearch && <ResultSearch></ResultSearch>}
                        
                    </form>
                </div>
            </div>
        </nav>
    </>
  )
}

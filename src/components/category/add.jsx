import axios from 'axios'
import { Button } from 'bootstrap'
import React, { useState } from 'react'

export default function AddCategory({handleClose}) {
    const [category, setCategory] = useState({
        categoryName:'',
        description:''
    })
    const save =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8080/api.myservice.com/v1/admin/categories',category).
        then((res)=>{
            console.log(res);
            handleClose();
        }).catch(err=>console.log(err));
    }
  return (
    <>
        <form action="">
            <div className="form-group">
              <label for="">Category Name</label>
              <input type="text" name="" id="" onChange={(e)=>setCategory({...category,categoryName:e.target.value})} className="form-control" placeholder="" />
            </div>
            <div className="form-group">
              <label for="">Description</label>
              <input type="text" name="" id="" className="form-control" onChange={(e)=>setCategory({...category,description:e.target.value})} />
            </div>
            <div className='form-group mt-3'>
                <button className='btn btn-success form-control' onClick={save} >Save</button>
            </div>
        </form>
    </>
  )
}

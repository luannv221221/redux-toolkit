import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import AddCategory from './add';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesThunk } from '../../../redux-toolkit/reducers/categorySlice';

export default function Category() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const getCategoires = useSelector((state)=>state.categories);
    
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log("a");
        dispatch(getCategoriesThunk())
        console.log(getCategoires.data);
    },[])
  return (
    <>
        <Container>
            <Row>
                <Col lg={8}>
                    <h1 className='text-danger text-center'>Quản lý danh mục</h1>
                    {!getCategoires.loading ? 
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Category Name</th>
                                <th>Description</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                       
                        <tbody>
                           
                            {getCategoires.data.map((item,key)=>{
                                return(<tr key={key}>
                                    <td scope="row">{item.categoryId}</td>
                                    <td>{item.categoryName}</td>
                                    <td>{item.description}</td>
                                    <td>{item.status ?
                                    <span className='text-primary'>Active</span>:
                                    <span className='text-danger'>InActive</span>}
                                    </td>
                                </tr>)
                            })}
                            
                        </tbody>
                        
                        
                    </table>
                    :
                    <h1>Dowii ti</h1>
                }
                </Col>
            </Row>
            <button className='btn btn-success' onClick={handleShow}>Add</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddCategory handleClose={handleClose}></AddCategory>
                </Modal.Body>
                
            </Modal>
        </Container>
    </>
  )
}

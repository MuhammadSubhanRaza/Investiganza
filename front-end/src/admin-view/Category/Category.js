import React,{useEffect, useState} from 'react'
import './Category.css';
import AdminSidebar from '../AdminCommon/AdminSidebar'
import AdminTopbar from '../AdminCommon/AdminTopbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link,useNavigate } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";
import DataLoadLoader from '../AdminCommon/DataLoadLoader';

const Category = () => {

    const navigate = useNavigate();
    const [isDataLoading, setisDataLoading] = useState(true);

    const apiUrl = "http://localhost:5070/api/categories";
    const [categoriesList, setCategoriesList] = useState([]);

    useEffect(()=>{
        fetchData();
        Aos.init({duration:2000})
    },[]);

    function fetchData()
    {
        fetch(apiUrl).then(res=>res.json())
        .then((result)=>{
            setisDataLoading(false);
            setCategoriesList(result)
        },(error)=>{
            navigate('/servicedown');
        });
    }

 

  return (
    <>
    
    <section className="main_content dashboard_part large_header_bg">

        <AdminSidebar/>
        <AdminTopbar/>



        <h5 className='admin-window-title'>Categories</h5>

        <div className='admin-content-cont'>

        <Link className='admin-btn-add-new' to="/admin/addcategory">
            <FontAwesomeIcon icon={faPlus}/> Add New Record
        </Link>

        {isDataLoading && <DataLoadLoader/>}

            
            <table data-aos="fade-up" className='table table-hover admin-dt-datatable'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categoriesList.map((item)=>{
                            return(
                                <tr>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>
                                    <button className='admin-dt-btn'><FontAwesomeIcon icon={faPencil}/></button>
                                    <button className='admin-dt-btn'><FontAwesomeIcon icon={faTrash}/></button>
                                </td>
                            </tr>
                            );
                        })
                    }
                </tbody>
            </table>

        </div>

    </section>

    </>
  )
}

export default Category
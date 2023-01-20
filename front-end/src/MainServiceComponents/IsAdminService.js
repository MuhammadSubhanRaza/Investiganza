
import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const IsAdminService = (props) => {

  
    // -------------------- NOTIFICATIONS

    const notifyDataSaved = () => toast.success("Success! data has been saved successfully");
    const notifyDataUpdated = () => toast.success("Success! data has been updated successfully");
    const notifyDataDeleted = () => toast.success("Success! data has been deleted successfully");
  
    const notifyDataSaveFailure = () => toast.error("Sorry! Action failed due to an unexpected failure");

    // ------------------- INTIALIZERS

  let {Component} = props;

  const [allowAccess, setallowAccess] = useState(false);

  //------------ USE NAVIGATE

  const navigate = useNavigate()


   // -------------------- REDUX

   const myState = useSelector((state)=>state.SetTheProfileGlobal)


   function isloggedin()
   {
      if(myState==null)
      {
          navigate('/login')
      }
      else{
          checkIfIsAdmin()
      }
   }

   function checkIfIsAdmin()
   {
    if(myState.isAdmin!=1)
    {
      navigate('/unauthorized');
    }
    else
    {
      setallowAccess(true)
    }
   }



  useEffect(() => {
   isloggedin()
  }, []);

  return (
    <>
      {
        allowAccess && <Component notificationFailure={notifyDataSaveFailure} 
                        notificationDelete={notifyDataDeleted}
                        notificationSave={notifyDataSaved}
                        notificationUpdate={notifyDataUpdated}
                        />
      }
    </>
  )
}

export default IsAdminService


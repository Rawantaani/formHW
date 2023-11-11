
import axios from "axios";
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import "./app.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
let nextIndex = 0;
function App() {
  const [data, setData] = useState([]);
  const [newData, setnewData] = useState({});
  const [state, setstate] = useState(false);
  const [newNAme, setnewNAme] = useState('');
  const [emailCorrectText, setemailCorrectText] = useState('');
  
  const upNAme=(id)=>{
    setData(data.map((item)=>item.id==id?{...item,UserName:newNAme}:item ))

  }
  const deleate=(id)=>{
    setData(data.filter((x)=>x.id!=id))
  }
  
 
  
    const handleEmailChange = (emaill) => {
     
  
  
      // Validate the email using a regular expression
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
      {
        
        if( emailRegex.test(emaill)){
          setstate(true)
          setnewData({...newData,id:nextIndex++})
          setData([...data,newData]);
          setemailCorrectText('')
        }
        else{
          setemailCorrectText('Enter valid email')
        }
      }
    
      
 
    };

  return (
    <>
      <div className="container mt-5">
        <div className="d-flex flex-column mb-2">
          <input placeholder="Enter UserName" type="text" onChange={(e) => setnewData( { ...newData, UserName: e.target.value })} />
          <input placeholder="Enter Email" type="text" onChange={(e) => setnewData( { ...newData, Email: e.target.value })} />
          <input placeholder="Enter Phone" type="text" onChange={(e) => setnewData( { ...newData, Phone: e.target.value})} />
          <p>{emailCorrectText}</p>


        </div>
        <div className="button">  <button className="bt " onClick={()=>handleEmailChange(newData.Email)}>Save</button></div>
        
      
        <div className="d-flex flex-column mb-2 mt-5 h-5"><hr /></div>

        {
          state&&

          <table className="table  mt-5 table-responsive-md">
            <thead>
              <tr >
                <th >Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th> </th>

              </tr>
            </thead>
            <tbody>
             {data.map((item,index)=>
              <tr key={index}>
              <td>{item.UserName} </td>
              <td>{item.Email}</td>
              <td>{item.Phone}</td>
              <td>
                <div>
                  <button className="iconBtn me-5" onClick={()=>deleate(item.id)}><FontAwesomeIcon icon={faXmark} /></button>
                  <button className="iconBtn me-2 " onClick={()=>upNAme(item.id)}><FontAwesomeIcon icon={faPenToSquare} /></button>
                  <input className="bg-dark editIn text-light" onChange={(e)=>setnewNAme(e.target.value)}></input>

                </div>
              </td>
            </tr>
             )}

            </tbody>
          </table>
        }








      </div>


    </>
  )
}

export default App

import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Swal from 'sweetalert2';

export default function Register() {
    const [userName,setUserName]=useState('');
    const [passWord,setPassWord]=useState('');
    const [email,setEmail]=useState('');
    const [user,setUser]=useState([]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(userName.length>0&&passWord.length>0&&email.length>0){
            const newUser={
                userName,
                passWord,
                email
            }
            console.log(newUser);
            fetch('https://academyusers-default-rtdb.firebaseio.com/users.json',{
                method:'POST',
                body:JSON.stringify(newUser)
            })
            .then(res=>{
                res.json();
                if(res.status==200){
                    Swal.fire({
                        title: "congratulations",
                        text: "you have register successfuly",
                        icon: "success"
                      });
                    
                }
                
            })
            .then(data=>console.log(data)
            )
            setUserName('');
            setPassWord('');
            setEmail('');
        }
    }
return (
    <>
            <Container fluid className="d-flex justify-content-center align-items-center" style={{backgroundColor:'#1D1E1F', minHeight:'100vh'}} >
                    <Row className="w-100">
                            <form onSubmit={handleSubmit} className='p-4 rounded-5 mt-5 d-flex flex-column justify-content-center align-items-center mx-auto' style={{maxWidth:'400px', width:'100%', backgroundColor:'#303131'}}>
                                    <input onChange={(e)=>setUserName(e.target.value)} value={userName} type="text" className='form-control mt-3 p-3' placeholder='User Name' />
                                    <input onChange={(e)=>setPassWord(e.target.value)} value={passWord} type="password" className='form-control mt-3 p-3' placeholder='Password' />
                                    <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='form-control mt-3 p-3' placeholder='Email' />
                                    <button type='submit' className='mt-4 btn btn-warning w-100'>Submit</button>
                            </form>
                    </Row>
            </Container>
    </>
)
}

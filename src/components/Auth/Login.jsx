import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import { Link,  useNavigate } from 'react-router-dom';
import MessageBox from '../common/MessageBox';

const Login = () => {
    const {login} = useAuth();
    const [formdata , setFormdata] = useState({email:"",password:""});
    const [message , setMessage] = useState(null)
    const [bar , setBar] = useState(null)
    const navigation = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const res = await login(formdata)
            console.log(res)            
            setFormdata({email:"",password:""})
            setMessage(res.message)
            setBar(true)
            setTimeout(() => {
                setMessage(false)
                setBar(false)
                navigation('/dashboard')                
            }, 2000);
            
        }
        catch(error){
            console.log(error)
        }
    }

  return (
    <section className='h-screen relative'>                
    <MessageBox message={message} bar={true}  />

        <div className="container flex  h-full items-center">            
        <div className=" border-[1px] border-solid border-black py-8 px-5 rounded-xl max-w-[366px] mx-auto ">
            <h2 className=' font-bold text-[28px] text-center'>Welcome  Back</h2>
            <p className='text-[14px] font-medium pt-1 text-center text-[#575757]'>Login to your account to continue.</p>
            <form  onSubmit={handleSubmit}>
                
                
                <label  htmlFor='email'  className='font-medium  inline-block w-full pb-1 pt-2'>Email</label>
                <input id="email" type="text" placeholder='Enter your email..' value={formdata.email}  onChange={(e) => setFormdata({...formdata , email:e.target.value})} className='border-[1px] border-solid border-black rounded-lg py-2 px-4 font-medium w-full' />
                <label   htmlFor='password' className='font-medium  inline-block w-full pb-1 pt-2'>Password</label>
                <input id="password" type="text" placeholder='Enter your password..' value={formdata.password}  onChange={(e) => setFormdata({...formdata , password:e.target.value})} className='border-[1px] border-solid border-black rounded-lg py-2 px-4 font-medium w-full' />
                  <Link to='/dashboardlayout'  className='bg-[#4F2CBC]  cursor-pointer text-white   rounded-xl font-medium py-3  text-center w-full inline-block mt-3' >Login</Link>
            </form>
            <p className='text-[#575757] text-center pt-3   '>Don’t have an account? <Link to='/signup' className=' text-black font-semibold'>Sign up</Link> </p>
        </div>
        </div>
    </section>
  )
}

export default  Login
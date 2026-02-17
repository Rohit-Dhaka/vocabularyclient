import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import { Link,  useNavigate } from 'react-router-dom';
import MessageBox from '../common/MessageBox';

const Signup = () => {
    const {signup} = useAuth();
    const [formdata , setFormdata] = useState({name:"",email:"",password:""});
    const [message , setMessage] = useState(null)
    const [bar , setBar] = useState(null)
    const navigation = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const res = await signup(formdata)
            console.log(res)
            console.log("user signup successfuly")
            setFormdata({name:"",email:"",password:""})
            setMessage(res.message)
            setBar(true)
            setTimeout(() => {
                setMessage(false)
                setBar(false)
                navigation('/login')
                
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
            <h2 className=' font-bold text-[28px] text-center'>Create Your Account</h2>
            <p className='text-[14px] font-medium pt-1 text-center text-[#575757]'>Join us and start your journey today Create an account to access all features</p>
            <form  onSubmit={handleSubmit}>
                <label  htmlFor='name'  className='font-medium  inline-block w-full pb-1 pt-4'>Full Name</label>
                <input id='name' type="text" placeholder='Enter your name..' value={formdata.name}  onChange={(e) => setFormdata({...formdata , name:e.target.value})} className='border-[1px] border-solid border-black rounded-lg py-2 px-4 font-medium w-full' />
                <label  htmlFor='email'  className='font-medium  inline-block w-full pb-1 pt-2'>Email</label>
                <input id="email" type="text" placeholder='Enter your email..' value={formdata.email}  onChange={(e) => setFormdata({...formdata , email:e.target.value})} className='border-[1px] border-solid border-black rounded-lg py-2 px-4 font-medium w-full' />
                <label   htmlFor='password' className='font-medium  inline-block w-full pb-1 pt-2'>Password</label>
                <input id="password" type="text" placeholder='Enter your password..' value={formdata.password}  onChange={(e) => setFormdata({...formdata , password:e.target.value})} className='border-[1px] border-solid border-black rounded-lg py-2 px-4 font-medium w-full' />
                <input type="submit" value="Signup" className='bg-[#4F2CBC]  mt-4 cursor-pointer text-white   rounded-xl font-medium py-3 w-full' />                                
            </form>
            <p className='text-[#575757] text-center pt-3   '>Already have an account? <Link to='/login' className=' text-black font-semibold'>Login here</Link> </p>
        </div>
        </div>
    </section>
  )
}

export default Signup
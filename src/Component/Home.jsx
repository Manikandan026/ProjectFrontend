import React, { useEffect, useState } from 'react'
import profile from '../Images/b.jpg'
import style from '../Style/home.module.css'
import axios from 'axios'


const Home = () => {

  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

 

  const handleSubmit=(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    axios.post('http://localhost:8080/api/category', formData, {
      headers: {
          'Content-Type': 'multipart/form-data',
      },
  })
    .then((responce)=>{
      console.log(responce)
    })
    .catch((e)=>{
      console.log(image);
      
      console.log(e);
     
      
      console.log('you got error');
    })

  }

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
};  
 
const handleNameChange = (event) => {
  setName(event.target.value);
};

  return (
    <div className={style.main}>
       <div className={style.image}>
       <img src={profile} alt="" style={{ width: '100%', height: '650px' }} /> 
       <div className={style.text}>
        <h1>Order your favourite food here</h1>
       <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus totam quam cumque,
         expedita ex nemo? Deleniti, laudantium ullam? Perspiciatis distinctio maiores commodi iste.</span>
         <br/>
         <button>View Menu</button>
       </div>
       </div>
       <div className={style.menu}>
        <h1>Explore our menu</h1>
        <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eius laboriosam quibusdam 
            iste ullam, non maiores eos quos quasi explicabo animi rem recusandae beatae nostrum at.        </span>
       </div>
   
   <div className={style.abc}>
                <input
                     type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Enter category name"
                        required
                    />
              <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={(e)=> setImage(e.target.files[0])}
                        required
                    />

<button onClick={handleSubmit}>Upload</button>
   </div>
   
   

    </div>
  )
}

export default Home

import React, { useState } from "react";
import '../src/App.css'
import image1 from "../src/assets/backg.png"
import image2 from "../src/assets/sea.jpg"
import image3 from "../src/assets/mountains.jpg"
import image4 from "../src/assets/flowers.jpg"
import image5 from "../src/assets/strawberry.jpg"
import {IoMdPause,IoMdPlay} from "react-icons/io"
import {FaGreaterThan,FaLessThan} from "react-icons/fa"

function App() {

  
  const [show, setShow] = useState(false)
  const [selectedImage, setSelectedImage] = useState(image3)
  const [allImages, setAllImages] = useState([image1, image2, image3, image4,image5])
  return (
    <div className='container' >

      <div >

        <img width={800} height={400} className="big-image" src={selectedImage} />

        <div className="catalog-view" style={{ display: 'flex' }}>
          
          <FaLessThan className="view" />
          {
            allImages.map((image) => {
              return <img
                onClick={() => setSelectedImage(image)}
                width={200}
                height={150}
                src={image}
                style={selectedImage === image ? { border: '5px solid red', height: '140px' } : {}} />
            })
          }<FaGreaterThan className="view" />
          
         

        </div>

        <div className="footer">
        <button className="btn" onClick={() => {
          if (selectedImage > 0)
            setSelectedImage(selectedImage - 1)
        }}
        >PREV</button>

        <button
        className="btn"
          onClick={() => {
            if (selectedImage < allImages.length - 1)
              setSelectedImage(selectedImage + 1)
          }}
        >NEXT</button>
        </div>

      

      </div>

        <div className="content-container">
          <h1>W Maldives</h1> <br/>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lorem tortor. Quisque sed iaculis risus. Sed non dignissim augue. Cras a erat nisi. Morbi tempor justo augue, in volutpat lectus mattis in. Vivamus tristique in lorem ut imperdiet. Fusce lobortis congue mattis. Mauris condimentum mi lacus, in vulputate libero consequat ut. Suspendisse viverra, odio eget ultricies pellentesque, dolor dolor gravida nisi, vel iaculis quam ipsum finibus quam. Sed ut accumsan nulla. Morbi convallis tristique orci in aliquet. Sed enim nulla, pretium nec euismod in, sodales non mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lorem tortor. Quisque sed iaculis risus. Sed non dignissim augue. Cras a erat nisi. Morbi tempor justo augue, in volutpat lectus mattis in. Vivamus tristique in lorem ut imperdiet. Fusce lobortis congue mattis. Mauris condimentum mi lacus, in vulputate libero consequat ut. Suspendisse viverra, odio eget ultricies pellentesque, dolor dolor gravida nisi, vel iaculis quam ipsum finibus quam. Sed ut accumsan nulla. Morbi convallis tristique orci in aliquet. Sed enim nulla, pretium nec euismod in, sodales non mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="audio">
            {
              show ? <IoMdPlay className="play" onClick={()=>setShow(false)}/> : <IoMdPause className="pause" onClick={()=>setShow(true)}/>
            }

            
            

          </div>

        </div>


     

    </div>
  );
}

export default App;

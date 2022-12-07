import { useState, useEffect} from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


import {useAddProductsMutation} from '../../../features/products/productsService'
import { storage } from "../../../utils/firebase.utils";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



import './AddProductsForm.css'

export const AddProductsForm = () => {
  const initialState = {
    id: Math.random() * 100 ,
    name: "",
    price: null,
  };
  const [data, setData] = useState(initialState);
  const [file, setFile] = useState(null);
  // progress
  const [percent, setPercent] = useState(0);



  

const [addProducts] = useAddProductsMutation()
  let {  name, price } = data;

  
  const navigate = useNavigate();
  const routeToShop = () => {
    navigate("/goToShop");
  };
  
  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }

    const storageRef = ref(storage, file.name);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          // appending aan imageUrl to the previous object (name, price)
          toast.success(`image successfully uploaded`);
          setData((prev) => ({ ...prev, imageUrl: url }));
          console.log(url);
        });
      }
    );
  };

  useEffect(() => {
    file && handleUpload();
  }, [file]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(name && price ) {
      await addProducts( data)
    }
    routeToShop()
  }


  return (
    <div className="create">
    
      <h2 className="page-title">Add a New Product to Database</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input type="text" value={name} name="name" onChange={handleChange} />
        </label>

        <label>
          <span>Image:</span>
          <div className="ingredients">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              accept="/image/*"
            />
            {/* <button className="btn" onClick={handleUpload} >upload image</button> */}
            <p className="progress">{percent} "% done"</p>
          </div>
        </label>

        <label>
          <span>Price</span>
          <input type="number" value={price} name="price" onChange={handleChange} />
        </label>

        <button
          className="btn"
          onClick={handleUpload}
          disabled={percent !== null && percent < 100}
        >
          submit
        </button>
      </form>
      <Toaster position="top-center" 
                reverseOrder={true} />
    </div>
    
  );
};

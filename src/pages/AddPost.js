import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import '../styles.css';

const AddPost = () => {
  const { register, handleSubmit } = useForm();
  const [imagePreviews, setImagePreviews] = useState([]);

  const onSubmit = async (data) => {
    // Construct the data object to be sent to the API
    const postData = {
      username: data.username,
      caption: data.caption,
      images: imagePreviews, // Assuming imagePreviews contains URLs of uploaded images
    };

    try {
      const response = await fetch('https://crudcrud.com/api/b55f3325d1304470a06c450057d2a406', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if needed
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        console.log('Data saved successfully');
      } else {
        console.error('Failed to save data');
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  return (
    <div className='AddPost_div'>
      <div className='AddPost_Title'>
        Add your Post Here
      </div>
      <form className='AddPost_Form' onSubmit={handleSubmit(onSubmit)} style={{ alignItems: "start" }}>

        <label>Your UserName :</label>
        <TextField id="username" placeholder='Enter your username...' {...register('username', { required: true })} variant="outlined" style={{ width: '100%' }} />

        <label>Want To Add Caption ?</label>
        <TextField id="caption" placeholder='Enter your caption...' {...register('caption')} variant="outlined" style={{ width: '100%' }} />

        <label>Upload Photos :</label>
        <input type="file" id="images" onChange={handleImageChange} multiple />
        <div className="image-previews">
          {imagePreviews.map((preview, index) => (
            <div key={index} className="image-preview">
              <img src={preview} alt={`Image ${index}`} />
            </div>
          ))}
        </div>

        <button type="submit">Let's Post it...</button>
      </form>
    </div>
  );
};

export default AddPost;


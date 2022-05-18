import { useState } from "react";
import { useDispatch } from "react-redux";

import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const initialFormState = {
    title: "",
    content: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = ({ target }) => {
    console.log(formData);
    setFormData(
      (formData) =>
        (formData = {
          ...formData,
          [target.name]: target.value,
        })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.title && formData.content) {
      dispatch(postAdded(formData.title, formData.content));
      setFormData((formData) => (formData = initialFormState));
    }
  };

  return (
    <section onSubmit={handleSubmit}>
      <h2>Add A New Post</h2>
      <form>
        <label htmlFor='title'>Title: </label>
        <input
          id='postTitle'
          name='title'
          type='text'
          value={formData.title ? formData.title : ""}
          onChange={handleChange}
        />
        <label htmlFor='content'>Content: </label>
        <textarea
          id='postContent'
          name='content'
          value={formData.content ? formData.content : ""}
          onChange={handleChange}
        />
        <button type='submit'>Save Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;

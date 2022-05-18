import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const initialFormState = {
    title: "",
    content: "",
    userId: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const users = useSelector(selectAllUsers);

  const canSave =
    Boolean(formData.title) &&
    Boolean(formData.content) &&
    Boolean(formData.userId);

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
      dispatch(postAdded(formData.title, formData.content, formData.userId));
      setFormData((formData) => (formData = initialFormState));
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section onSubmit={handleSubmit}>
      <h2>Add A New Post</h2>
      <form>
        <label htmlFor='userId'>Title: </label>
        <select id='postUserId' name='userId' onChange={handleChange}>
          <option value=''></option>
          {usersOptions}
        </select>
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
        <button disabled={!canSave} type='submit'>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;

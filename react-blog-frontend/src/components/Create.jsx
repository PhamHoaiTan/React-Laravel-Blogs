import React, { useState } from "react";
import Editor from "react-simple-wysiwyg";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Create() {
  const [html, setHtml] = useState("");
  const navigate = useNavigate();
  function onChange(e) {
    setHtml(e.target.value);
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const newData = { ...data, description: html };
    const res = await fetch("http://localhost:8000/api/blogs", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newData),
    });
    toast("Blog added successfully!");
    navigate('/');
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-between mt-5 mb-4">
        <h4>Create Blog</h4>
        <a href="/" className="btn btn-dark">
          Back
        </a>
      </div>
      <div className="card border-0 shadow-lg">
        <div className="card-body">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Title
              </label>
              <input
                {...register("title", { required: true })}
                type="text"
                placeholder="Enter Title"
                className={`form-control ${errors.title && "is-invalid"}`}
              />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Short Description
              </label>
              <input
                type="text"
                {...register("shortDesc")}
                className="form-control"
                cols={30}
                rows={5}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Description
              </label>
              {/* <textarea name='' cols="30" rows="10" className='form-control'/> */}
              <Editor
                value={html}
                containerProps={{ style: { height: "300px" } }}
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Image
              </label>
              <br />
              <input type="file" className="" />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Author
              </label>
              <br />
              <input
                placeholder="Enter Author"
                {...register("author", { required: true })}
                className={`form-control ${errors.author && "is-invalid"}`}
              />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <button className="btn btn-dark">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;

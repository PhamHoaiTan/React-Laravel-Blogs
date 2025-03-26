import React from 'react'
import BlogCard from './BlogCard'

const Blogs = () => {
  return ( 
    <div className="container">
    {/* display */}
    <div className="d-flex justify-content-between mt-4 mb-5">
      <h4>Blogs</h4>
      {/* btn button-dark */}
      <a href="/create" className="btn btn-dark">
        Create
      </a>
    </div>
    <div className="row">
      {/* col-12(mobile 12/12), col-md-3(3/12) tb(>=765 - tablet), 3/12 lager(>=992px - desktop) */}
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  </div>
  )
}

export default Blogs

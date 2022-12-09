import React, { useState } from "react";
import { Helmet } from "react-helmet";
import BlogList from "./bloglist/BlogList";
import SearchBar from './SearchBar';
import { thaiData } from "./Data";
import "./thai.css";
import Category from "./Category";
import EmptyList from "./EmptyList ";

const Home = () => {
  const TITLE = "กฎหมายมรดกไทย - Thai Inheritance Law";
  const [blogs, setBlogs] = useState(thaiData);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by title, description
  const handleSearchResults = () => {
    const allBlogs = thaiData;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    const filteredBlog = allBlogs.filter((blog) =>
      blog.description.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    const filteredBlogContent = allBlogs.filter((blog) =>
      blog.content.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
    setBlogs(filteredBlog);
    setBlogs(filteredBlogContent);
  };
  
   // Clear search and show all blogs
   const handleClearSearch = () => {
    setBlogs(thaiData);
    setSearchKey('');
  };

  // category
  const categoryData = thaiData.map((value) => {
    return value.category;
  });
  const tabsData = [...new Set(categoryData)];
  const filterCategory = (category) => {
    const filteredData = thaiData.filter((value) => {
      return value.category == category;
    });
    setBlogs(filteredData);
  };

  return (
    <section className="container thai section" id="thai">
      <div >
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>

        <h2 className="section__title mt-8">กฎหมายมรดกไทย</h2>
        <span className="section__subtitle">Contact Us</span>

        <SearchBar
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearchBar}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        />

        <Category filterCategory={filterCategory} tabsData={tabsData} />
        {!blogs.length ? (
            <EmptyList />
          ) : (
            <BlogList blogs={blogs} key={blogs.id} />
        )}
      </div>
    </section>
  );
};

export default Home;

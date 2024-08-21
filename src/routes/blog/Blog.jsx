import React from "react";
import user_avatar from "../../assets/user_avatar.svg";
import Footer from "../../components/footer/Footer";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import dots from "../../assets/dots.svg";
import Container from "../../import";

const Blog = ({ data }) => {
  const { id } = useParams();
  const blog = data[id - 1];
  const { t } = useTranslation();

  return (
    <>
      <Nav />
      <Container>
        <div className="blog__wrapper flex flex-col items-center max-w-4xl mx-auto px-4 py-12">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight text-center mb-8">
            {blog.title}
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <img
              className="w-16 h-16 rounded-full border-4 border-gray-700"
              src={user_avatar}
              alt="Author Avatar"
            />
            <div>
              <span className="text-gray-700 font-poppins font-semibold text-base">
                {t("author-name", { name: "Husni Ramdani" })}
              </span>
              <p className="font-poppins font-normal text-sm text-gray-600">
                {t("blog-date", { date: "30 November 2021" })}
              </p>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <img src={dots} alt="Decorative Dots" className="w-20 h-20" />
          </div>

          <img
            className="w-full max-w-4xl h-auto rounded-lg shadow-lg mb-8"
            src={blog.image}
            alt={blog.title}
          />

          <div className="prose prose-lg max-w-4xl mx-auto text-justify">
            <p className="font-poppins font-normal text-lg leading-relaxed">
              {blog.text}
            </p>
            <p className="font-poppins font-normal text-lg leading-relaxed mt-4">
              {blog.text2}
            </p>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Blog;

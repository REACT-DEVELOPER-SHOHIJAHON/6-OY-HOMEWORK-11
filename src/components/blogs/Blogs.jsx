import React from "react";
import user_avatar from "../../assets/user_avatar.svg";
import { useTranslation } from "react-i18next";
import blogs1 from "../../assets/blogs1.png";
import blogs2 from "../../assets/blogs2.png";
import blogs3 from "../../assets/blogs3.png";
import { Link } from "react-router-dom";
import Container from "../../import";

const BlogCard = ({ to, imgSrc, title, description, author }) => (
  <div className="custom-box-shadow w-full p-4 mb-6">
    <Link to={to}>
      {imgSrc && <img src={imgSrc} alt={title} className="w-full mb-4" />}
      <h2 className="roman font-bold text-2xl text-justify mb-2">{title}</h2>
      {description && (
        <p className="font-poppins font-normal text-sm text-justify mb-2">
          {description}
        </p>
      )}
      {author && (
        <div className="flex items-center gap-2">
          <img className="w-9 h-9" src={user_avatar} alt="Author Avatar" />
          <div className="py-1">
            <b className="font-poppins font-semibold text-xs">{author.name}</b>
            <p className="font-poppins font-normal text-xs">{author.date}</p>
          </div>
        </div>
      )}
    </Link>
  </div>
);

const Blogs = () => {
  const { t } = useTranslation();

  return (
    <section>
      <Container>
        <div className="blogs__wrapper w-full flex flex-wrap gap-4 pt-12 pb-8">
          <div className="flex-1 max-w-sm border-r custom-box-shadow-v2 pr-4">
            <BlogCard
              to="/blog/1"
              title="Lorem ipsum dolor sit amet, consectetur..."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc maecenas cras ipsum, lorem massa lacus..."
              author={{ name: t("blog-1"), date: t("blog-2") }}
            />
            <BlogCard
              to="/blog/2"
              title="Lorem ipsum dolor sit amet, consectetur..."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc maecenas cras ipsum, lorem massa lacus..."
            />
          </div>

          <div className="flex-1 max-w-md px-4 pb-6">
            <BlogCard
              to="/blog/1"
              imgSrc={blogs1}
              title="Lorem ipsum dolor sit amet, consectetur..."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc maecenas cras ipsum, lorem massa lacus. Tortor lorem augue elit leo nibh. Laoreet risus iaculis quisque adipisc..."
              author={{ name: t("blog-1"), date: t("blog-2") }}
            />
          </div>

          <div className="flex-1 max-w-xs px-4 pb-6 custom-box-shadow-v3">
            <BlogCard
              to="/blog/2"
              imgSrc={blogs2}
              title="Lorem ipsum dolor sit amet, consectetur..."
              description={`By ${t("blog-1")}`}
            />
            <BlogCard
              to="/blog/3"
              imgSrc={blogs3}
              title="Lorem ipsum dolor sit amet, consectetur..."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet lorem massa lacus..."
              author={{ name: t("blog-1") }}
            />
          </div>

          <div className="flex-1 max-w-lg px-4 pb-4">
            <BlogCard
              to="/blog/1"
              title="Lorem ipsum dolor sit amet, consectetur..."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc maecenas cras ipsum, lorem massa lacus..."
              author={{ name: t("blog-1"), date: t("blog-2") }}
            />
            <BlogCard
              to="/blog/2"
              title="Lorem ipsum dolor sit amet, consectetur..."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc maecenas cras ipsum, lorem massa lacus..."
              author={{ name: t("blog-1"), date: t("blog-2") }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Blogs;

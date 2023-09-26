import React from "react";
import Post from "../../ui/Post";

export default function BlogePage() {
  return (
    <section>
      <div
        className=" sm:py-44 py-24 "
        style={{
          backgroundImage: `url("data/image/Image/id-yourself-blog-page-header.jpg")`,
        }}
      >
        <h1 className="sm:text-5xl text-2xl font-bold text-center text-white ">
          Thanks for Visit my Website
        </h1>
      </div>

      <div className="relative mx-auto max-w-7xl py-24 px-4">
        <Post />
      </div>
    </section>
  );
}

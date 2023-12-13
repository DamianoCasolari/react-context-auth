import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function SinglePost() {
  const { slug } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setPost((prevData) => {
          //   console.log(prevData);
          console.log(data);
          return data;
        });
      });
  }, [slug]);

  return (
    <main className="flex justify-center p-10 relative items-center h-full w-full">
      <div className="post flex flex-col justify-between rounded-2xl w-full h-full p-4 hover:scale-[1.02] duration-500">
        <h2 className="text-[30px]  text-stone-100 font-bold">{post.title}</h2>
        <img
          src={post.image}
          className=" h-full"
          alt=" l'immagine non è presente"
        />
        <p className="text-end text-stone-100">{post.content}</p>
        <div className="tags_container flex flex-wrap">
          <div className="font-bold text-stone-100">
            {post.tags &&
              post.tags.map((tag) => {
                return (
                  <span key={tag.id} className="me-4">
                    {tag.name}
                  </span>
                );
              })}
          </div>
        </div>
      </div>
    </main>
  );
}

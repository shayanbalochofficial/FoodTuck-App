import Image from "next/image";
import { FaRegComments } from "react-icons/fa";

// BlogPost Component for repeated content
const BlogPost = ({
  imageSrc,
  date,
  comments,
  author,
  title,
  description,
}: {
  imageSrc: string;
  date: string;
  comments: number;
  author: string;
  title: string;
  description: string;
}) => {
  return (
    <section className="p-6 md:p-10 bg-white mb-6 rounded-lg shadow-lg my-6">
      <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-md">
        <Image
          src={imageSrc}
          alt="Featured Image"
          layout="intrinsic" // Use intrinsic to make sure it fits properly
          width={700} // The image width (adjust as per your design)
          height={400} // The image height (adjust as per your design)
          className="object-cover" // Ensures that the image maintains aspect ratio
        />
      </div>
      <div className="mt-6">
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <span>{date}</span>
          <span className="mx-2">|</span>
          <FaRegComments className="text-gray-500 mr-1" />
          <span>{comments} Comments</span>
          <span className="mx-2">|</span>
          <span>{author}</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-gray-700 mb-6">{description}</p>
        <a href="#" className="text-blue-500 hover:underline">
          Read More
        </a>
      </div>
    </section>
  );
};

const BlogPostPage = () => {
  const blogPosts = [
    {
      imageSrc: "/b-1.svg",
      date: "Feb 14, 2022",
      comments: 3,
      author: "Admin",
      title: "10 Reasons To Do A Digital Detox Challenge",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
    {
      imageSrc: "/b-1.svg",
      date: "Feb 14, 2022",
      comments: 3,
      author: "Admin",
      title: "10 Reasons To Do A Digital Detox Challenge",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
    {
      imageSrc: "/b-1.svg",
      date: "Feb 14, 2022",
      comments: 3,
      author: "Admin",
      title: "10 Reasons To Do A Digital Detox Challenge",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
    {
      imageSrc: "/b-1.svg",
      date: "Feb 14, 2022",
      comments: 3,
      author: "Admin",
      title: "10 Reasons To Do A Digital Detox Challenge",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      {blogPosts.map((post, index) => (
        <BlogPost
          key={index}
          imageSrc={post.imageSrc}
          date={post.date}
          comments={post.comments}
          author={post.author}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
};

export default BlogPostPage;

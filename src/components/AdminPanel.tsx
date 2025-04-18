// To access the admin panel, go to http://localhost:3000/admin in your browser after starting the app.

import React, { useState, ChangeEvent, FormEvent } from "react";

interface Blog {
  id: number;
  title: string;
  paragraph: string;
  image: string;
}

const AdminPanel: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [title, setTitle] = useState<string>("");
  const [paragraph, setParagraph] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleAddBlog = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !paragraph || !imagePreview) return;

    const newBlog: Blog = {
      id: Date.now(),
      title,
      paragraph,
      image: imagePreview,
    };

    setBlogs([...blogs, newBlog]);
    setTitle("");
    setParagraph("");
    setImage(null);
    setImagePreview(null);
  };

  const handleDeleteBlog = (id: number) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto bg-white rounded shadow p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Add Blog Post</h2>
        <form onSubmit={handleAddBlog} className="space-y-4">
          <input
            type="text"
            placeholder="Blog Title"
            className="w-full border rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Blog Paragraph"
            className="w-full border rounded px-3 py-2"
            rows={4}
            value={paragraph}
            onChange={(e) => setParagraph(e.target.value)}
          />
          <div>
            <label className="block mb-1 font-medium">Image Upload</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 h-32 object-cover rounded"
              />
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Blog
          </button>
        </form>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Blogs</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded shadow p-4 flex flex-col"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-40 w-full object-cover rounded mb-3"
              />
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <p className="text-gray-700 mb-4">{blog.paragraph}</p>
              <button
                onClick={() => handleDeleteBlog(blog.id)}
                className="self-end bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
          {blogs.length === 0 && (
            <p className="text-gray-500 col-span-2">No blogs added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

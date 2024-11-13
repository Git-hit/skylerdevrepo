import { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import Button from './button';

const client = createClient({
    space: 'deugs1v52g73',
    accessToken: '1lQOYwKnIqhWbuSww8XaGsuXhrG6-54NHotbNYKru0Y',
    // space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    // accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
})

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .getEntries({ content_type: 'blogPost' })
      .then((response) => {
        setPosts(response.items);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading blog posts: {error.message}</div>;
  }

  return (
    <div className='md:py-40 py-28 font-teko'>
      <h1 className='text-center text-7xl md:text-9xl font-[700]'>Our Blog</h1>
      <div className='flex flex-col items-center w-full py-28'>
        {posts.map((post) => (
          <div key={post.sys.id} className="flex flex-col-reverse px-7 gap-5 md:flex-row md:w-2/4">
            {/* <div className='bg-gray-200 h-px w-full'></div> */}
            <div className='md:w-3/5 flex flex-col items-start justify-between gap-7'>
                <h2 className='text-xl md:text-4xl font-ssp font-[100]'>{post.fields.title}</h2>
                <Button content="Read More" link={`/blog/${post.fields.slug}`} />
            </div>

            <div className='md:w-2/5'>
                {post.fields.titleImage && (
                    <img
                        src={post.fields.titleImage.fields.file.url}
                        alt={post.fields.title}
                        className="w-full"
                    />
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
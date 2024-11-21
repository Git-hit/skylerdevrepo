import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createClient } from 'contentful';
import { Helmet } from 'react-helmet-async';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import BlogPostCTA from './blogPostCTA';
import Popup from './popup';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const client = createClient({
    space: 'deugs1v52g73',
    accessToken: '1lQOYwKnIqhWbuSww8XaGsuXhrG6-54NHotbNYKru0Y',
    // space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    // accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  });

  useEffect(() => {
    client
      .getEntries({
        content_type: 'blogPost',
        'fields.slug': slug,
      })
      .then((response) => {
        setPost(response.items[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        setError('Error fetching post:', err);
        alert(err);
        setIsLoading(false);
      });
  }, [slug]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <span className="font-bold">{text}</span>,
      [MARKS.ITALIC]: (text) => <span className="italic">{text}</span>,
      [MARKS.CODE]: (text) => <code className='bg-gray-100 p-1'>{text}</code>
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="my-4 leading-[1.8] text-lg">{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-4xl font-bold my-6">{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-2xl leading-normal md:text-3xl font-hg font-black my-5">{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-xl font-medium my-4">{children}</h3>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc pl-6">{children}</ul>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="mb-2">{children}</li>,
      [INLINES.HYPERLINK]: (node, children) => <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="underline">{children}</a>,
    },
  };

  if (post) {
    return (
      <>
        <Popup />
        <div className='py-28 lg:px-96 px-6 lg:flex flex-col gap-10 items-center'>
          <Helmet>
            <title>{post.fields.title} | Skyler Dev</title>
            <meta name="description" content={post.fields.metaDescription} />
            <meta property="og:title" content={post.fields.title + '| Skyler Dev'} />
            <meta property="og:description" content={post.fields.metaDescription} />
            <meta property="og:image" content={post.fields.titleImage?.fields.file.url} />
          </Helmet>

          <div className='fixed left-0 top-28 w-1/4 h-screen flex items-center'>
            <BlogPostCTA />
          </div>

          {post.fields.titleImage && (
            <img
              src={post.fields.titleImage.fields.file.url}
              alt={post.fields.title}
              className="w-full"
            />
          )}
          <h1 className='font-teko font-[700] py-10 lg:py-0 text-4xl md:text-5xl lg:text-6xl'>{post.fields.title}</h1>
          <div className='bg-gray-200 h-px w-full'></div>
          {post.fields.content && (
            <div className='font-ssp font-[400] text-xl text-[rgb(0,0,0,0.8)]'>
              {documentToReactComponents(post.fields.content, options)}
            </div>
          )}
        </div>
      </>
    );
  }
}
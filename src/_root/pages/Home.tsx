import { Loader } from '@/components/shared';
import PostCard from '@/components/shared/PostCard';
import { useGetRecentPosts } from '@/lib/react-query/queries';
import { Models } from 'appwrite';

const Home = () => {

  const {
    data: posts,
    isPending: isPostLoading,
    isError: isErrorPosts,
  } = useGetRecentPosts();

  return (
    <div className='flex flex-1'>
      <div className='home-container'>
        <h2 className='h3-bold md:h2-bold text-left w-full'>
          Home
        </h2>
        {isPostLoading && !posts ? (
          <Loader/>
        ): (
          <ul className='flex flex-col flex-1 gap-9 w-full'>
             {posts?.documents.map((post: Models.Document) => (
                <li key={post.$id} className="flex justify-center w-full">
                  <PostCard post={post} key={post.caption} />
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Home
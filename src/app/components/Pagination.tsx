import { useGlobalContext } from '../Context/store';

export default function Pagination() {
  const { postsPerPage, setPostsPerPage } = useGlobalContext();

  const handleLoadMore = () => {
    setPostsPerPage(postsPerPage + 3);
  };
  return (
    <div
      className="mt-5 flex items-center justify-center"
      data-aos="fade-up"
      data-aos-delay="700"
    >
      <button
        onClick={() => handleLoadMore()}
        type="button"
        className="px-4 rounded-lg border border-violet-500 bg-violet-500 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:bg-violet-700 
              focus:ring focus:ring-violet-200 disabled:cursor-not-allowed disabled:border-violet-300 disabled:bg-violet-300
      w-full
      lg:max-w-[162px] h-16"
      >
        Tem mais ainda
      </button>
    </div>
  );
}

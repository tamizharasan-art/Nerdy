import { Models } from "appwrite";
import Loader from "./Loader";
import GridPostLIst from "./GridPostLIst";

type SearchResultProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
};
const SearchResults = ({
  isSearchFetching,
  searchedPosts,
}: SearchResultProps) => {
  if (isSearchFetching) return <Loader />;
  console.log(searchedPosts.documents);

  if (searchedPosts && searchedPosts.documents.length > 0) {
    return <GridPostLIst posts={searchedPosts.documents} />;
  }

  return (
    <div className="text-light-4 mt-10 text-center w-full">
      No results found
    </div>
  );
};

export default SearchResults;

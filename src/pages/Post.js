import { useParams, useLocation } from "react-router-dom";

const Post = ({ match }) => {
  // const id = match.params.id;

  const { id } = useParams(); // get params from url

  console.log(useLocation());
  // go to -> /post/1?first=abe&last=tav
  const query = new URLSearchParams(useLocation().search);
  console.log(query);

  return (
    <div>
      <h2>Post id = {id}</h2>
      <h2>{query.get("first")}</h2>
      <h2>{query.get("last")}</h2>
    </div>
  );
};

export default Post;

import Layout from "../components/Layout"
import CardList from "../components/posts/CardList"
import ViewUserButton from "../components/posts/ViewUserButton"
import styles from "./postPage.module.css"

const base_url = "https://jsonplaceholder.typicode.com/posts"

interface Iposts {
  userId: number,
  id:number,
  title: string,
  body: string
}
const Posts = async() => {
  const response = await fetch(base_url,{
    cache: "no-store"
  });
  const posts: Iposts[] = await response.json()
  return (
    <Layout>
 <div className=" px-10 py-2 text-white ">
      <h1 className="text-cyan-600">{new Date().toLocaleTimeString()}</h1>
      {posts.map((post) => {
        return(
          <CardList key={post.id}>
            <p className="bg-white p-4 rounded-full w-10 text-black m-0">{post.id}</p>
        <p>{post.title}</p>
        <p>{post.body}</p>
        <ViewUserButton userId={post.userId} />
      </CardList>
        )
      })}
      
    </div>
    </Layout>
   
  )
}

export default Posts

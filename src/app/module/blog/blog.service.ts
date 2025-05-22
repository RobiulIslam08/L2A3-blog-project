import QueryBuilder from "../../builder/QueryBuilder";
import { blogSearchableFields } from "./blog.constant";
import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";


const createBlog = async (payload: IBlog) => {
  const result = await Blog.create(payload)
  return result

  
};
const updateBlog = async (id: string, payload: Partial<IBlog>) => {
    const result = Blog.findByIdAndUpdate(id, payload,{ new: true })

  return result
}
const deleteBlog = async (id: string) => {
    const result = Blog.findByIdAndDelete(id)
    console.log(result)
  return result
}
const getBlog = async(query: Record<string, unknown>) => {
 

  const blogQuery = new QueryBuilder(
    Blog.find().populate('author'),
    query,
  )
    .search(blogSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = blogQuery.modelQuery;
  return result;
};

export const blogService = {
  createBlog,
 updateBlog,
  deleteBlog,
  getBlog
};

import Post from '../../../models/Post';
import user from '../../../models/User'

export default {
  Post: {
    author: (post) => User.find(post.author)
  },
  Query: {
    posts: () => Posts.find(),
    post: (_, { id }) => Post.findById(id),
  },
  Mutation: {
    createPost: (_, {data}) => Post.create(data),
    updatePost: (_, {id, data}) => Post.findOneAndUpdate(id, data, { new : true}),
    deletePost: async (_, {id}) => {
      const deleted = await Post.findOneAndDelete(id);
      return !!deleted
    }
  }
}
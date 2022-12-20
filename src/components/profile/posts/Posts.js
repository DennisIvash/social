import Post from './post/Post.js'


function Posts() {
    return(
        <div className='posts'>
          <h5>My Posts</h5>
          <input type='text' placeholder='Enter the post' />
          <button>Add Post</button>
        <Post message='Hello WOrld'/>
        <Post message='I am Elon Musk!'/>
        <Post message='Hi'/>
        <Post message='Hi Hi HI hI'/>
        <Post />
        </div>
    )
}

export default Posts;
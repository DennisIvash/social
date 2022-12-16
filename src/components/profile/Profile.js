import './profile.css'
import ava from '../../img/elon.jpg'
import avaMini from '../../img/elon_mini.jpg'
function Profile() {
    return (
      <div className='profile'>
        <div className='me'>
          <img src={ava} alt='profile-photo' />
          <p>Elon Mask</p>
        </div>
        <div className='posts'>
          <h5>My Posts</h5>
          <input type='text' placeholder='Enter the post' />
          <button>Add Post</button>
          <div className='post'>
            <img src={avaMini} alt='mini-profile-photo' />
            <span>Elon Mask</span>
            <p>Some Text</p>
          </div>
        </div>
      </div>
    );
  }


export default Profile;
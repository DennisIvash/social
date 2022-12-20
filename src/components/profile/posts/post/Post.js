import avaMini from '../../../../img/elon_mini.jpg'
    function Post (props) {
        return (
        <div className='post'>
            <img src={avaMini} alt='mini-profile-photo' />
            <span>Elon Mask</span>
            <p>{props.message}</p>
          </div>
        )
    }
        

export default Post;
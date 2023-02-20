import ProfileImage from '../components/ProfileImage'
import User from '../components/User'
import Timestamp from './Timestamp';
import Message from '../components/Message'
import Actions from '../components/Actions'


function Tweet({props}) {
  console.log(props)
  return (
    <div className="tweet">
      <ProfileImage image={props.user.image} />

      <div className="body">
        <div className="top">
        <User userData={props.user} />
        <Timestamp time={props.timestamp} />
        </div>

        
        <Message message={props.message} />
        

        <Actions />
      
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;

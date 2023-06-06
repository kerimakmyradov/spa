import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const PostItem = ({ post }) => {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [loading, setLoading] = useState(true);
  const[user, setUser]=useState(null)

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  useEffect(()=>{
    // Fetch user details from API based on the post's userID
    fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
      .then((response)=>response.json())
      .then((data)=>setUser(data))
      .catch((error)=>console.log(error))
  }, [post.userId])

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
        setComments(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    if (showComments) {
      fetchComments();
    } else {
      setComments([]);
    }
  }, [post.id, showComments]);

  return (
      <Card>
      <Card.Body>
        {user &&(
          <Link to={`/user/${user.id}`}>
            <img 
              src={`https://i.pravatar.cc/50?img=${user.id}`}
              alt='User Avatar'
              className='avatar'
            />
          </Link>
        )}
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <Button variant="primary" onClick={toggleComments}>
          {showComments ? 'Hide Comments' : 'Show Comments'}
        </Button>
        {showComments && (
          <>
            {loading ? (
              <div><Loader/></div>
            ) : (
              <ul>
                {comments.map((comment) => (
                  <li key={comment.id}>
                    <strong>{comment.email}</strong>: {comment.body}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default PostItem;

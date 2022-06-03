async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment = document.querySelector('#comment').value.trim();
  
    if (comment) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment_text, blog_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create comment');
        document.querySelector('#comment-form').style.display = 'block';
      }
    }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
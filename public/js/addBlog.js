async function blogFormHandler(event) {
   event.preventDefault();

   const title = document.querySelector('#blog-title').value.trim();
   const blog_text = document.querySelector('#blog-blog_text').value.trim();

   if (title && blog_text) {
     const response = await fetch('/api/blogs/new', {
       method: 'POST',
       body: JSON.stringify({ title, blog_text }),
       headers: {
         'Content-Type': 'application/json',
       },
     });
     if (response.ok) {
       // document.location.reload();
       document.location = ('/dashboard')
     } else {
       alert('Failed to create blog');
       document.querySelector('#blog-form').style.display = 'block';
     }
   }
 };
 
 document.querySelector('.blog-form').addEventListener('submit', workoutFormHandler);
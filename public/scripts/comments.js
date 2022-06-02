const loadCommentBtnElement = document.querySelector('#load-comment-btn');
const commentSectionElement = document.querySelector('#comments');
const commentFormElement = document.querySelector('#comments-form form');
const commentEnteredTitle = document.querySelector('#title');
const commentEnteredText = document.querySelector('#text');
// Append comment in the post

function createCommentList(comments) {
  const commentListElement = document.createElement('ol');
  for (const comment of comments) {
    const commentElement = document.createElement('li');
    commentElement.innerHTML = `
    <article class="comment-item">
      <h2>${comment.title}</h2>
      <p>${comment.text}</p>
    </article>
    `;
    commentListElement.appendChild(commentElement);
  }
  return commentListElement;
}

// Fetch comments for post
async function fetchCommentsForPost() {
  try {
    const postId = loadCommentBtnElement.dataset.postid;
    const response = await fetch(`/posts/${postId}/comments`);
    if (!response.ok) {
      alert('Fetching comments faild!');
      return;
    }
    const responseData = await response.json(); // decode data ase json
    if (responseData && responseData > 0) {
      const commentListElement = createCommentList(responseData);
      commentSectionElement.innerHTML = '';
      commentSectionElement.appendChild(commentListElement);
    } else {
      commentSectionElement.textContent = `We could't find any comments - may be add one!`;
    }
  } catch (error) {
    alert('Getting comments faild!')
  }
}

// Save comment
async function saveComment(event) {
  event.preventDefault();
  const enteredTitle = commentEnteredTitle.value;
  const enteredText = commentEnteredText.value;

  const comment = {
    title: enteredTitle,
    text: enteredText,
  };
  const postId = commentFormElement.dataset.postid;
  try {
    const response = await fetch(`/posts/${postId}/comments`, {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    alert('Could not send request - may be try again later!');
  }
  if (response.ok) {
    fetchCommentsForPost();
  } else {
    alert('Could not send comment!');
  }
}

// Event listeners
loadCommentBtnElement.addEventListener('click', fetchCommentsForPost);
commentFormElement.addEventListener('submit', saveComment);

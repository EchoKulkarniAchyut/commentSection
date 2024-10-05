const mainCommentFormSubmit = document.querySelector(".main-comment-submit");
mainCommentFormSubmit.addEventListener("click", () => {
  const mainCommentFormTextareaValue = document.querySelector(
    "#main-comment-textarea"
  ).value;
  if (!mainCommentFormTextareaValue) {
    return;
  }
  const replyCommentFieldAll = document.querySelector(
    ".reply-comment-field-all"
  );
  const replyCommentField = document.createElement("div");
  const commentId = "vhay78ry2yuev";
  replyCommentField.classList.add("reply-comment-field");
  replyCommentField.classList.add(commentId);
  replyCommentField.innerHTML = `<div class="main-comment-view">${mainCommentFormTextareaValue}</div>
            <div class="reply-comments">
                <textarea name="reply-comment-textarea" id="reply-comment-textarea"></textarea>
                <button class="reply-comment-submit">Reply</button>
            </div>
            `;
  replyCommentFieldAll.appendChild(replyCommentField);
  document.querySelector("#main-comment-textarea").value = "";
});

const replyCommentFieldAll = document.querySelector(".reply-comment-field-all");
replyCommentFieldAll.addEventListener("click", (e) => {
  if (e.target.classList[0] != "reply-comment-submit") {
    return;
  }
  const currComment = e.target.parentElement;
  const currReply = currComment
    .querySelector("#reply-comment-textarea")
    .value.trim();
  if (!currReply) {
    return;
  }
  console.log(currComment);
  const replyCommentView = document.createElement("div");
  replyCommentView.classList.add("reply-comment-all-view");
  replyCommentView.innerText = currReply;
  currComment.appendChild(replyCommentView);
  currComment.querySelector("#reply-comment-textarea").value = "";
});

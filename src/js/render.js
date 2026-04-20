export function renderPost(post, container) {
    container.innerHTML = ``;
    post.forEach((post) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <h2>${post.title}</h2>
<p>${post.content}</p>
<button class="editPostButton" data-id="${post.id}">Редагувати</button>
<button class="deletePostButton" data-id="${post.id}">Видалити</button>
<div class="commentsContainer" data-id="${post.id}">
<h3>Коментарі:</h3>
<ul>
${post.comments.map((i) => `<li>${i.text}</li>`).join('')}
</ul>
<form class="createCommentForm" data-id="${post.id}">
<input type="text" class="commentInput" placeholder="Новий коментар" required>
<button type="submit">Додати коментар</button>
</form>
</div>`;
        container.appendChild(div)
    });
}

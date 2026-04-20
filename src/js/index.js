import { getPost } from "./api";
import { renderPost } from "./render";

const container = document.querySelector('#postsContainer')

async function startUp(){
    const post = await getPost()
    renderPost(post, container)
}
startUp()

const MAIN_URL = "http://localhost:3000/posts"

export async function getPost() {
    try{
        const res = await fetch(MAIN_URL)
        return await res.json()
    } catch(error){
        console.log(error)
    }
}
const API_BASE_URL = "https://jsonplaceholder.typicode.com";

const fetchPosts = async () => {
    const response = await fetch(`${API_BASE_URL}/posts?_limit=5`)
    const data = await response.json()
    if (!response.ok) {
        throw new Error("Network response was not ok")
    }
    return data
}

export { fetchPosts }
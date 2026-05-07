const API_BASE_URL = "https://jsonplaceholder.typicode.com";

const fetchPosts = async (page) => {
    const limit = 10;
    const response = await fetch(`${API_BASE_URL}/posts?_page=${page}&_limit=${limit}`)
    const data = await response.json()
    const totalCount = parseInt(response.headers.get("x-total-count") || "0", 10)
    
    if (!response.ok) {
        throw new Error("Network response was not ok")
    }

    return {
        posts: data,
        hasMore: page * limit < totalCount
    }
}

const createPost = async (data) => {
    const { title, body, userId = 1 } = data;
    console.log(title, body, userId);
    const response = await fetch(`${API_BASE_URL}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body, userId }),
    })
    const json = await response.json()
    console.log(json);
    if (!response.ok) {
        throw new Error("Failed to create post")
    }
    return json
}

export { fetchPosts, createPost }
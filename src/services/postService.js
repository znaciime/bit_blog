import { Post } from "../entities/Post";
import { Author } from "../entities/Author"

export const fetchPost = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then((response) => response.json())
        .then((apiPost) => {
            const { id, title, body, userId } = apiPost;
            return new Post(id, title, body, userId);
        });
}

export const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts/')
        .then((response) => response.json())
        .then((apiPosts) => {
            return apiPosts.map((element) => {
                return new Post(element.id, element.title, element.body, element.userId);
            })
        });
}
export const fetchAuthors = () => {
    return fetch('https://jsonplaceholder.typicode.com/users/')
        .then((response) => response.json())
        .then((apiUsers) => {
            return apiUsers.map((element) => {
                return new Author(element.id, element.name, element.email, element.address.street, element.address.city, element.website, element.company.name);
            })
        });
}
export const fetchOneAuthor = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then((response) => response.json())
        .then((apiUser) => {

            return new Author(apiUser.id, apiUser.name, apiUser.email, apiUser.address.street, apiUser.address.city, apiUser.website, apiUser.company.name)

        })

}
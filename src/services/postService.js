import { Post } from "../entities/Post";
import { Author } from "../entities/Author";
import SubmitPage from '../pages/SubmitPage'


export const fetchPost = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then((response) => response.json())
        .then((apiPost) => {
            console.log(apiPost)
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
                return new Author(element.id, element.name, element.email, element.address.street, element.address.city, element.website, element.company.name, element.address.geo.lat, element.address.geo.lng);
            })
        });
}
export const fetchOneAuthor = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then((response) => response.json())
        .then((apiUser) => {
            console.log(apiUser)
            return new Author(apiUser.id, apiUser.name, apiUser.email, apiUser.address.street, apiUser.address.city, apiUser.website, apiUser.company.name, apiUser.address.geo.lat, apiUser.address.geo.lng)

        })

}
export const fetchPostperAuthor = (user) => {
    return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user)
        .then((response) => response.json())
        .then((apiPost) => {
            console.log(apiPost)
            return apiPost.map((element) => {
                return new Post(element.id, element.title, element.body, element.userId);
            })

        });
}
export const sendData = (inputTitle, inputPost) => fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: inputTitle,
        body: inputPost,
        userId: 99
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())



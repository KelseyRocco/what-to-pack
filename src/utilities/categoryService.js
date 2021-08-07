import tokenService from "./tokenService";
const BASE_URL = "/api/main";

function index() {
    const options = {
        method: "GET",
        headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
        },
    };
    return fetch("/main", options)
        .then((res) => res.json())
        .catch((err) => console.log("err", err));
    }

function getOne(id) {
    return fetch(`${BASE_URL}${id}`)
        .then((res) => res.json())
        .catch((err) => console.log("err", err));
}

function create(quiz) {
    const options = {
        method: "POST",
        headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
        },
        body: JSON.stringify(quiz),
    };
    return fetch(BASE_URL, options).then((res) => res.json());
}

function update(category) {
    console.log(category);
    const options = {
        method: "PUT",
        headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
        },
        body: JSON.stringify(quiz),
    };
    return fetch("/api/main/" + quiz._id, options).then((res) => res.json());
}

function deleteOne(id) {
    const options = {
        method: "DELETE",
        headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
        },
    };
    return fetch("/api/main/" + id, options).then((res) => res.json());
}

export default {
    index,
    getOne,
    create,
    update,
    delete: deleteOne,
};







Message Angela Choi











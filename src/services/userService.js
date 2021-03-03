import tokenService from "../services/tokenService";
const BASE_URL = "/api/users/";

export function getAllUsers() {
  return fetch(
    BASE_URL,
    {
      headers: { Authorization: "Bearer " + tokenService.getToken() },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function getMyFriends(user){
  return fetch(
    `${BASE_URL}/myfriends/${user._id}`,
    {
      headers: { Authorization: "Bearer " + tokenService.getToken() },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}


export function addFriend(formData){
  return fetch(
    `${BASE_URL}/addfriend`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(formData)
    },
    { mode: "cors" }
  ).then((res) => res.json())
}

export function deleteFriend(formData){
  return fetch(
    `${BASE_URL}/deletefriend`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(formData)
    },
    { mode: "cors" }
  ).then((res) => res.json())
}
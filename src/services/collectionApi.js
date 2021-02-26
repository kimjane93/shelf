import tokenService from '../services/tokenService'
const BASE_URL = '/api/collections'

export function create(collection) {
  return fetch(
    BASE_URL,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(collection)
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function getMyCollections(user){
  return fetch(`${BASE_URL}/myCollections/${user._id}`, 
  {
    headers: { Authorization: "Bearer " + tokenService.getToken() },
  },
  { mode: "cors" }
  ).then((res) => res.json());
}

export function addNewResource(newResourceCollectionData){
  return fetch(
    `${BASE_URL}/addNewResource`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(newResourceCollectionData)
    },
    { mode: "cors" }
  ).then((res) => res.json());
}


export function deleteResource(deleteData){
  console.log('this is the delete resoruce function')
  return fetch(
    `${BASE_URL}/deleteResource/${deleteData}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(deleteData)
    },
    { mode: "cors" }
  ).then((res) => res.json());
}
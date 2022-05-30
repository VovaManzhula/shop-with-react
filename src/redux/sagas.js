import { all, put, takeEvery } from "redux-saga/effects";
import actions from "./reducers/actions";

async function deleteData(id) {
  await fetch(`http://localhost:3001/posts/${id}`, {
    method: "DELETE"
  });
}

async function postData(post) {
  await fetch("http://localhost:3001/posts", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(post)
  });
}

async function getData() {
  const request = await fetch("http://localhost:3001/posts").catch((error) => {
    alert("plz 'json-server --w db.json -p 3001'");
  });
  const data = await request.json();
  return data;
}
function* deleteDataW(params) {
  yield deleteData(params.payload);
  yield getPosts();
}
function* postDataW(params) {
  yield postData(params.payload);
  yield getPosts();
}
function* getPosts() {
  const data = yield getData();
  yield put({ type: actions.SET_DATA, payload: data });
}
function* dataChangesListener(payload) {
  yield takeEvery(actions.CREATE_POST, postDataW);
}
function* deleteDataListener(payload) {
  yield takeEvery(actions.DELETE_DATA, deleteDataW);
}

// COMMENTS...

function* getComments() {
  const data = yield getCommentsData();
  yield put({ type: actions.SET_COMMENTS, payload: data });
}

async function getCommentsData() {
  const request = await fetch("http://localhost:3001/comments");

  const data = await request.json();
  return data;
}
function* commentAdd() {
  yield takeEvery(actions.CREATE_COMMENT, createComment);
}
function* createComment(params) {
  yield addComment(params.payload);
  const data = yield getCommentsData();
   yield put({ type: actions.SET_COMMENTS, payload: data });
}

async function addComment(comment) {
  await fetch("http://localhost:3001/comments", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(comment)
  });
}
function* deleteCommentListener(payload) {
  yield takeEvery(actions.DELETE_COMMENT, deleteCommentW);
}
function* deleteCommentW(params) {
  yield deleteComment(params.payload);
  yield getComments();
}
async function deleteComment(id) {
  await fetch(`http://localhost:3001/comments/${id}`, {
    method: "DELETE"
  });
}
export function* rootSaga() {
  yield all([
    getPosts(),
    dataChangesListener(),
    deleteDataListener(),
    getComments(),
    commentAdd(),
    deleteCommentListener()
  ]);
}

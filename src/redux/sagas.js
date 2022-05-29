import { all, put, takeEvery } from "redux-saga/effects";
import actions from "./reducers/actions";

async function deleteData(id) {
  await fetch(`http://localhost:3001/posts/${id}`,{
    method: "DELETE"
  });
}

async function postData(post) {
 
  await fetch("http://localhost:3001/posts",
  {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  method: "POST",
  body: JSON.stringify(post)
  }
  );
}

async function getData() {
  const request = await fetch("http://localhost:3001/posts")
  .catch(error => {
    alert("plz 'json-server --w db.json -p 3001'");
})
  const data = await request.json();
  return data;
}
function* deleteDataW(params){
  yield deleteData(params.payload)
  yield getPosts()

}
function* postDataW(params){
  yield postData(params.payload)
  yield getPosts()

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

function* windowClose(){
  yield takeEvery(actions.CLOSE_WINDOW,closeWindow)

}
function* closeWindow(){
  yield put({type:"WINDOW_CLOSED",payload:false})

}

export function* rootSaga() {
  yield all([getPosts(), dataChangesListener(), deleteDataListener(),windowClose()]);
}

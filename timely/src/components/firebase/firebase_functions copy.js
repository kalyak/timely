import fb from "./firebase_config";
// import { functions } from "firebase-functions";
// import { admin } from "firebase-admin";
import "firebase/functions";

const db = fb.firestore();

//////////////////////////////////////////////////////////////////////////////////////////////////////

const getSubCollections = fb.functions().httpsCallable("getSubCollections");

getSubCollections({ docPath: "users/kalya" })
  .then(function (result) {
    const collections = result.data.collections;
    //console.log(collections);
  })
  .catch(function (error) {
    // Getting the Error details.
    // var code = error.code;
    // var message = error.message;
    // var details = error.details;
    // ...
    //console.log("error");
  });

//////////////////////////////////////////////////////////////////////////////////////////////////////

const addData = (formData) =>
  db
    .collection("products")
    .add({
      title: formData.title.value,
      price: formData.price.value,
      stock: formData.stock.value,
    })
    .then((docRef) => {
      //console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });

const readData = (callbackFn) => {
  const q = (querySnapshot) => {
    // const items = [];
    // querySnapshot.forEach((doc) => {
    //   // //console.log(`${doc.id} => ${doc.data()}`);
    //   items.push(doc.data());
    // });

    // const items = querySnapshot.docs.map((item) => item.data()); //same as on top

    const items = querySnapshot.docs.map((item) =>
      //{   ...item.data(),
      //   id: item.id,}

      item.data()
    ); // return whole item to be able to use documentID as key. item at App.js then needs to have data() before .title
    callbackFn(items);
  };
  db.collection(`users`).get().then(q);
};

const getData = (callbackFn) => {
  //sets up listener that is always listening in. Constantly uses resources
  const q = (querySnapshot) => {
    const items = querySnapshot.docs.map((item) => ({
      ...item.data(),
      id: item.id,
    }));
    callbackFn(items);
  };
  const query = db.collection("products").orderBy("title", "asc").limit(10);
  query.onSnapshot(q);
};

const all = { addData, readData, getData };
export default all;

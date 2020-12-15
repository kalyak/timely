import fb from "./firebase_config";

const db = fb.firestore();

// const addData = (formData) =>
//   db
//     .collection("products")
//     .add({
//       title: formData.title.value,
//       price: formData.price.value,
//       stock: formData.stock.value,
//     })
//     .then((docRef) => {
//       console.log("Document written with ID: ", docRef.id);
//     })
//     .catch((error) => {
//       console.error("Error adding document: ", error);
//     });

// const readData = (callbackFn) => {
//   const q = (querySnapshot) => {
//     // const items = querySnapshot.docs.map((item) => item.data());

//     const items = querySnapshot.docs.map((item) =>
//       //{   ...item.data(),
//       //   id: item.id,}

//       callbackFn(Object.keys(item.data()))
//     );
//     // items;
//   };
//   db.collection(`users`).get().then(q);
// };

// const getData = (callbackFn) => {
//   //sets up listener that is always listening in. Constantly uses resources
//   const q = (querySnapshot) => {
//     const items = querySnapshot.docs.map((item) => ({
//       ...item.data(),
//       id: item.id,
//     }));
//     callbackFn(items);
//   };
//   const query = db.collection("products").orderBy("title", "asc").limit(10);
//   query.onSnapshot(q);
// };

const readContacts = (callbackFn, userName, groupName) => {
  const q = (querySnapshot) => {
    console.log(querySnapshot.docs);
    const contacts = querySnapshot.docs.map((group) => group.data());
    callbackFn(contacts);
  };
  db.collection(`users/${userName}/${groupName}`).get().then(q);
};

const addContact = (formData, userName, groupName) => {
  const countrycode = formData["country-select"].value;
  // const country =
  //   formData["country-select"].options[formData["country-select"].selectedIndex]
  //     .text;
  db.collection(`users/${userName}/${groupName}`)
    .doc(formData.name.value)
    .set({
      name: formData.name.value,
      // country: country,
      countrycode: countrycode,
      timezone: formData["zone-select"].value,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", formData.name.value);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

const all = { readContacts, addContact };
export default all;

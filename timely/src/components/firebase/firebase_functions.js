import axios from "axios";
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

// const getGMTOffset = (timezone, i, setContacts) => {
//   const qu = (timezoneData) => {
//     //   setGMTarray((oldArray) => [...oldArray, timezoneData.gmtOffset / 3600]);
//     console.log(timezone);
//     console.log(timezoneData.gmtOffset);
//     ;
//   };

//   axios
//     .get(
//       `http://api.timezonedb.com/v2.1/get-time-zone?key=BSB22B2ARR6V&format=json&by=zone&zone=${timezone}&fields=gmtOffset`
//     )
//     .then((response) => {
//       console.log(response.data);
//       qu(response.data);
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     });
// };

const readContacts = (setContacts, userName, groupName) => {
  const q = (querySnapshot) => {
    console.log(querySnapshot.docs);
    const contacts = querySnapshot.docs.map((contact, i) => {
      // getGMTOffset(contact.data().timezone, i, setContacts);

      return {
        name: contact.data().name,
        country: contact.data().country,
        countrycode: contact.data().countrycode,
        timezone: contact.data().timezone,
        gmt: contact.data().gmt,
        latestGmt: 0,
      };
    });
    setContacts(contacts);
  };
  db.collection(`users/${userName}/${groupName}`).get().then(q);
};

const addContact = (formData, userName, groupName) => {
  const countrycode = formData["country-select"].value;
  const country =
    formData["country-select"].options[formData["country-select"].selectedIndex]
      .text;
  db.collection(`users/${userName}/${groupName}`)
    .doc(formData.name.value)
    .set({
      name: formData.name.value,
      country: country,
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

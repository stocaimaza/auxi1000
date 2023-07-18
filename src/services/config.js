import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// import { collection,addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJOaW84u0vhqY-J1O3E-O0zNztIoInBuU",
  authDomain: "coderhouse-d25aa.firebaseapp.com",
  projectId: "coderhouse-d25aa",
  storageBucket: "coderhouse-d25aa.appspot.com",
  messagingSenderId: "996032839105",
  appId: "1:996032839105:web:35c9987c86c849ae7d0340"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


///

// export const misProductos = [
//   { id: "1", nombre: "Yerba", precio: 500, stock:10, img: "../img/yerba.jpg", idCat: "2" },
//   { id: "2", nombre: "Fideos", precio: 200, stock:10, img: "../img/fideos.jpg", idCat: "2" },
//   { id: "3", nombre: "Arroz", precio: 180, stock:5, img: "../img/arroz.jpg", idCat: "3" },
//   { id: "4", nombre: "Aceite", precio: 900, stock:10, img: "../img/aceite.jpg", idCat: "3" },
// ]


// export function cargarProductos(misProductos) {
//   misProductos.forEach((producto) => {
//     addDoc(collection(db, 'productos'), producto)
//       .then((docRef) => {
//         console.log('Producto guardado con ID: ', docRef.id);
//       })
//       .catch((error) => {
//         console.error('Error al guardar el producto: ', error);
//       });
//   });
// }



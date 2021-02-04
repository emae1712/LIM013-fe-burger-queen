import firebase from 'firebase/app';
import 'firebase/firestore'; 

//Obtener los productos de firebase
export const getProducts = (category) => {
  return firebase.firestore().collection('Products').where("Category", "==", category).get()
    .then((querySnapshot) => {
        const array = [];
        querySnapshot.forEach((doc) =>{
            array.push({
                id: doc.id,
                ...doc.data()
            })
        });
        return array;
    }); 
}

// Crear la base de datos de la orden
export const orderBD = (sendOrder) => {
    return firebase.firestore().collection('Orders').add(sendOrder)
    }

//Obtener la lista de ordenes de firebase
export const getOrders = () => {
  return firebase.firestore().collection('Orders').orderBy('date_init', 'desc')
  }
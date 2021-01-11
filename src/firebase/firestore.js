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

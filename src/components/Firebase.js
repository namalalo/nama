
import firebase from 'react-native-firebase';

export function Login(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((value) => {
            alert('Vous etes connecté !');
        });
}

export function Inscription(nom, email, password){
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userInfo) => {
            alert(userInfo)
            userInfo.user.updateProfile({nom: nom.trim()})
            .then(() =>{ })
        })
}

export function Deconnexion(onSignOut){
    firebase.auth().onSignOut()
    .then(() => {
        alert('Déconnecté');
        onSignOut();
    })
}

// Fonction d'ajout de données dans Firebase
export function ajout(abonne, addComplet){
    firebase.firestore()
    .collection('abonnes')
    .add({
        name: abonne.name,
        cni: abonne.cni,
        phone: abonne.phone,
        password: abonne.password,
        createdAt: firebase.firestore().FielValue.serverTimestamp()
    }).then((data) => addComplet(data))
    .catch((error) => alert('Erreur dajout de données'))
}

// Fonction de lecture de données depuis Firebase
export async function getAbonnes(abonneRetreived){
    var abonnesList = [];

    var snapshot = await firebase.firestore()
    .collection('abonnes')
    .orderBy('createAt')
    .get()

    snapshot.forEach((doc) => {
        abonnesList.push(doc.data());
    });

    abonneRetreived(abonnesList);
}
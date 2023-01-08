import {initializeApp} from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithRedirect,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch,query,getDocs} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBV8ER50mRpGa7sSbDHxuw5zYyPeivqW4o",
    authDomain: "crwn-db-c300d.firebaseapp.com",
    projectId: "crwn-db-c300d",
    storageBucket: "crwn-db-c300d.appspot.com",
    messagingSenderId: "321736026674",
    appId: "1:321736026674:web:94cc3cdf33e93745986a2b"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd, field = 'title') => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object[field].toLowerCase());
        batch.set(docRef, object);
    });
    await batch.commit();
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;
};

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth, callback);
}

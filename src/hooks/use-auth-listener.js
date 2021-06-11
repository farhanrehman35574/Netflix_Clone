import {useState,useEffect,useContext} from 'react';
import {FirebaseContext} from '../context/firebase';


export default function useAuthListener(){
    const [user,setUser] = useState(
        JSON.parse(localStorage.getItem('authUser'))
    );
    const {firebase} = useContext(FirebaseContext);
    useEffect(() =>{
        const listener = firebase.auth().onAuthStateChanged((auhtUser)=>{
            if(auhtUser){
                localStorage.setItem('authUser',JSON.stringify(auhtUser));
                setUser(auhtUser);
            }
            else{
                localStorage.removeItem('authUser');
            }
        });
        return () => listener();
    }, []);
    return { user };
}

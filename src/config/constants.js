import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDyU7epetKB1g0F_4sfm_LnevTL64kSeaM",
  authDomain: "joinnus-336af.firebaseapp.com",
  databaseURL: "https://joinnus-336af.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
import 'package:flutter/material.dart';
import 'package:firebase/firebase.dart';
import '../dashboard.dart';

class MyAuth {
  var error;
  MyAuth({Auth firebaseAuth, GoogleAuthProvider googleSignin})
      : _firebaseAuth = firebaseAuth ?? auth(),
        _googleSignIn = googleSignin ?? GoogleAuthProvider();

  var db = firestore();
  final Auth _firebaseAuth;
  final GoogleAuthProvider _googleSignIn;

  void signInWithGoogle(BuildContext context) async {
    var error = 0;
    var texterror;
    try {
      await _firebaseAuth.signInWithPopup(_googleSignIn);
    } catch (e) {
      error = e;
      texterror = e;
    }
    if (error == 0)
      Navigator.push(
          context, MaterialPageRoute(builder: (context) => MyHomePage()));
    else
      AlertDialog(title: Text("Error"),
      content: Text(texterror));
  }

  void createRecord() async {
    await db
        .collection("users")
        .doc(_firebaseAuth.currentUser.toString().substring(6))
        .set({'mail': getUser(), 'meteo': '0'});
  }


  void signInWithCredentials(
      String email, String password, BuildContext context) async {
    var error = 0;
   // var texterror;
    await _firebaseAuth
        .signInWithEmailAndPassword(email, password)
        .catchError((e) {
      error = e;
  //    texterror = e;
    });
    if (error == 0)
      Navigator.push(
          context, MaterialPageRoute(builder: (context) => MyHomePage()));
    // else
    //   AlertDialog(title: Text("Error"),
    //   content: Text(texterror));
  }

  Future<UserCredential> signUp(String email, String password) async {
    try {
      return await _firebaseAuth.createUserWithEmailAndPassword(
        email,
        password,
      );
    } catch (e) {
      print('Error siging in with credentials: $e');
      throw '$e';
    }
  }

  User getUser() {
    return _firebaseAuth.currentUser;
  }

  checksignup(String email, String password1, String password2) {
    if (password1 == password2) {
      signUp(email, password1);
      createRecord();
    }
  }
}

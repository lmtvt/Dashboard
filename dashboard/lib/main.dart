import 'package:flutter/material.dart';
import 'package:firebase/firebase.dart' as fb;
import 'login/login.dart';

void main() {
  fb.initializeApp(
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
  );
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Le Petit Lyonnais',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
          fontFamily: 'CaviarDreams',
          textTheme: TextTheme(
          body1: TextStyle(),
          title: TextStyle(),
          ).apply(
          bodyColor: Colors.black,
          displayColor: Colors.black,
        ),
    ),
      home: LoginScreen(),
    );
  }
}

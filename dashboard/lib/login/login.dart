import 'package:flutter/material.dart';
import 'signup.dart';
import 'signin.dart';
import 'google.dart';

class LoginScreen extends StatefulWidget {
  @override
  _LoginScreenState createState() => _LoginScreenState();
}

BoxDecoration myBoxDecoration() {
  return BoxDecoration(
    border: Border.all(
      width: 3.0
    ),
    borderRadius: BorderRadius.all(
        Radius.circular(250.0) //         <--- border radius here
    ),
  );
}

class _LoginScreenState extends State<LoginScreen> {
  @override
  Widget build(BuildContext context) {
    var width = MediaQuery.of(context).size.width;
    var height = MediaQuery.of(context).size.height;
    return Scaffold(
        backgroundColor: Color(0xFFf7e6cb),
        appBar: AppBar(
          title: Text(
              "Connexion - Le Petit Lyonnais",
              style: TextStyle(fontFamily: 'Cocogoose-Pro-trial', height: 15, color: Colors.black),
          ),
          leading: Image.asset('assets/iconlyon.png', fit: BoxFit.cover),
          centerTitle: true,
          backgroundColor: Color(0xFFf9cdbf),
        ),
      body: Column(children: <Widget>[
            Center(
                child: Container(
                  width: width * 0.7,
                  height: height * 0.7,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: <Widget>[
                      Container(
                        width: width * 0.3,
                        child: Signup(),
                      ),
                      SizedBox(width: width * 0.1),
                      Container(
                        width: width * 0.3,
                        child: Signin(),
                      ),
                    ],
                  ),
                ),
              ),
              Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: <Widget>[
                      Container(
                        child: Google(),
                      ),
                  ],
              ),
          ],
        ),
    );
  }
}

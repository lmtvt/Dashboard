import 'package:flutter/material.dart';
import 'auth.dart';

class Signin extends StatelessWidget {
  MyAuth myauth = MyAuth();
  var emailsignin = TextEditingController();
  var passwordsignin = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Text(
            "Sign In",
            style: TextStyle(fontSize: 30),
        ),
        SizedBox(height: 40),
        TextField(
          controller: emailsignin,
          decoration: InputDecoration(hintText: "Email"),
        ),
        SizedBox(height: 40),
        TextField(
          obscureText: true,
          controller: passwordsignin,
          decoration: InputDecoration(hintText: "Password"),
        ),
        SizedBox(height: 40),
        FloatingActionButton.extended(
                heroTag: "btnin",
                label: Text(
                    "Sign In",
                    style: TextStyle(color: Colors.black),
                ),
                backgroundColor: Color(0xFFf9cdbf),
                onPressed: () =>
                  myauth.signInWithCredentials(
                      emailsignin.text, passwordsignin.text, context),
            ),
      ],
    );
  }
}

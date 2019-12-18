import 'package:flutter/material.dart';
import 'auth.dart';

class Signup extends StatelessWidget {
  MyAuth myauth = MyAuth();
  var emailup = TextEditingController();
  var passwordup = TextEditingController();
  var password2 = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
                  children: <Widget>[
                      Text(
                          "Sign Up",
                          style: TextStyle(fontSize: 30),
                      ),
                    SizedBox(height: 40),
                    TextField(
                      controller: emailup,
                      decoration: InputDecoration(hintText: "Email"),
                    ),
                    SizedBox(height: 40),
                    TextField(
                      obscureText: true,
                      controller: passwordup,
                      decoration: InputDecoration(
                          hintText: "Password (6 characters min)"),
                    ),
                    SizedBox(height: 40),
                    TextField(
                      obscureText: true,
                      controller: password2,
                      decoration: InputDecoration(
                          hintText: "Password (6 characters min)"),
                    ),
                    SizedBox(height: 80),
                    FloatingActionButton.extended(
                      heroTag: "btnup",
                      label: Text(
                          "Sign Up",
                          style: TextStyle(color: Colors.black),
                      ),
                      backgroundColor: Color(0xFFf9cdbf),
                      onPressed: () => myauth.checksignup(emailup.text, passwordup.text, password2.text),
                    ),
                  ],
                );
  }
}

import 'package:flutter/material.dart';
import 'auth.dart';

class Google extends StatelessWidget {
  MyAuth myauth = MyAuth();
  var emailup = TextEditingController();
  var passwordup = TextEditingController();
  var password2 = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Row(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
                  children: <Widget>[
                    FlatButton(
                        onPressed: () => myauth.signInWithGoogle(context),
                        child: Row( // Replace with a Row for horizontal icon + text
                          children: <Widget>[
                            new Image.asset(
                                'assets/google.png',
                                height: 20.0,
                              ),
                            SizedBox(width: 5.0),
                            Text("Connect with Google")
                          ],
                    ),
                ),
                  ],
                );
  }
}

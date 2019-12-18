import 'login/auth.dart';
import 'package:firebase/firestore.dart';
import 'package:flutter/material.dart';
import 'package:firebase/firebase.dart';

import 'widgets/rpicture.dart';
import 'drawer.dart';
import 'widgets/finance.dart';
import 'widgets/football.dart';
import 'widgets/meteo.dart';
class MyHomePage extends StatefulWidget {
  MyHomePage({Key key}) : super(key: key);

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  MyAuth myauth = MyAuth();
  User userdata;
  var db = firestore();
  var data;

  void getData() {
    db
        .collection("users")
        .doc(userdata.email)
        .get()
        .then((fdata) {
      data = fdata;
    });
  }

  void updateUser(String widget, String value) async {
    final CollectionReference ref = db.collection('users');

    var newData = {
      widget: value,
    };

    await ref.doc(userdata.email).set(newData, SetOptions(merge: true));
  }
  @override
  Widget build(BuildContext context) {
    var width = MediaQuery.of(context).size.width;
    userdata = myauth.getUser();
    getData();
    return Scaffold(
      backgroundColor: Color(0xFFffffff),
      appBar: AppBar(
        title: Text(
            "Le Petit Lyonnais",
            style: TextStyle(fontFamily: 'Cocogoose-Pro-trial', height: 15, color: Colors.black),
        ),
        leading: Image.asset('assets/iconlyon.png', fit: BoxFit.cover),
        centerTitle: true,
        backgroundColor: Color(0xFFf9cdbf),
        actions: <Widget>[
          IconButton(
              icon: Icon(Icons.exit_to_app),
              padding: EdgeInsets.only(right: 20.0),
              color: Colors.black,
          ),
        ],
      ),
      body: Row(
        children: <Widget>[
          MyDrawer(width),
          Container(
            width: width * 0.8,
            child: GridView(
              padding: EdgeInsets.all(20.0),
              gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 3,
              ),
              children: <Widget>[
                Card(
                  color: Colors.lightGreen[200],
                  child: Football(),
                ),
                Card(
                  color: Colors.lightGreen[200],
                  child: Rpictures(),
                ),
                Card(
                  color: Colors.lightGreen[200],
                  child: Meteo(),
                ),
                Card(
                  color: Colors.lightGreen[200],
                  child: Finance(),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

import 'package:flutter/material.dart';
import 'login/auth.dart';

class MyDrawer extends StatefulWidget {
  var width;
  MyDrawer(this.width);

  @override
  _MyDrawerState createState() => _MyDrawerState();
}

class _MyDrawerState extends State<MyDrawer> {
  MyAuth myauth = MyAuth();

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Color(0xFFf7e6cb),
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.7),
            spreadRadius: 8,
            blurRadius: 4,
            offset: Offset(0, 7), // changes position of shadow
          ),
        ],
      ),
      width: widget.width * 0.2,
      child: Column(
        children: <Widget>[
          SizedBox(height: 50),
          Text(
            myauth.getUser().email,
            style: TextStyle(color: Color(0xFFfff1b9)),
          ),
        ],
      ),
    );
  }
}

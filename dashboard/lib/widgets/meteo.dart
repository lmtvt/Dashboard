import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

Future<Post> fetchPost(String ville) async {
  final response =
      await http.get('https://www.prevision-meteo.ch/services/json/' + ville);

  return Post.fromJson(json.decode(response.body));
}

class Post {
  final int temp;

  Post({this.temp});

  factory Post.fromJson(Map<String, dynamic> json) {
    return Post(
      temp: json['current_condition']['tmp'],
    );
  }
}

class Meteo extends StatefulWidget {
  Meteo({Key key}) : super(key: key);

  @override
  _MeteoState createState() => _MeteoState();
}

class _MeteoState extends State<Meteo> {
  Future<Post> post;
  var ville = TextEditingController();
  var sec = Duration(hours: 1);

  @override
  void initState() {
    ville.text = "lyon";
    Timer.periodic(sec, (Timer t) => setState(() {initState();}));
    super.initState();
    post = fetchPost(ville.text);
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Text("Regardez la météo !", style: TextStyle(fontSize: 20),),
        TextField(
          controller: ville,
          decoration: InputDecoration(hintText: "Choisissez une ville"),
        ),
        FlatButton(
          child: Text("Go"),
          onPressed: () => setState(() {
            post = fetchPost(ville.text);
          }),
        ),
        Center(
          child: FutureBuilder<Post>(
            future: post,
            builder: (context, snapshot) {
              if (snapshot.hasData) {
                return Text(snapshot.data.temp.toString() +
                    ' Degrés' +
                    ' à ${ville.text}', style: TextStyle(fontSize: 15),);
              } else if (snapshot.hasError) {
                return Text("${snapshot.error}", style: TextStyle(fontSize: 15),);
              }

              // By default, show a loading spinner.
              return CircularProgressIndicator();
            },
          ),
        ),
      ],
    );
  }
}

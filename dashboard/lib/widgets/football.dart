import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'dart:math';
import 'dart:html';

class Football extends StatefulWidget {
  @override
  _FootballState createState() => _FootballState();
}

class _FootballState extends State<Football> {
  Map _nextMatch;
  Map _lastMatch;
  String upcomvs;
  String upcomdate;
  String finishvs;
  String finishdate;

  Future<void> getNextLyonMatch() async {
    String _apiURL = "https://api.football-data.org/v2/teams/523/matches?status=SCHEDULED&limit=1";
    http.Response response = await http.get(
        _apiURL,
        headers: {'X-Auth-Token': '50027bacfe154da2ab1c760d7080f911'},
    );
    setState(() {
      this._nextMatch = jsonDecode(response.body);
      this.upcomvs = _nextMatch['matches'][0]['homeTeam']['name'] + " VS " + _nextMatch['matches'][0]['awayTeam']['name'];
      this.upcomdate = DateTime.parse(_nextMatch['matches'][0]['utcDate']).day.toString() + "/" + DateTime.parse(_nextMatch['matches'][0]['utcDate']).month.toString() + "/" + DateTime.parse(_nextMatch['matches'][0]['utcDate']).year.toString();
    });
    return;
  }

  Future<void> getLastLyonMatch() async {
    String _apiURL = "https://api.football-data.org/v2/teams/523/matches?status=FINISHED";
    http.Response response = await http.get(
        _apiURL,
        headers: {'X-Auth-Token': '50027bacfe154da2ab1c760d7080f911'},
    );
    setState(() {
      this._lastMatch = jsonDecode(response.body);
      this.finishvs = _lastMatch['matches'][_lastMatch['count'] - 1]['homeTeam']['name'] + " VS " + _lastMatch['matches'][_lastMatch['count'] - 1]['awayTeam']['name'];
      this.finishdate = _lastMatch['matches'][_lastMatch['count'] - 1]['score']['fullTime']['homeTeam'].toString() + " - " + _lastMatch['matches'][_lastMatch['count'] - 1]['score']['fullTime']['awayTeam'].toString();
    });
    return;
  }

  @override
  Widget build(BuildContext context) {
    getNextLyonMatch();
    getLastLyonMatch();
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Text("Résultats de l'Olympique Lyonnais", style: TextStyle(fontSize: 23),),
        SizedBox(height: 20),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Text("- DERNIER MATCH -", style: TextStyle(fontSize: 15),),
          ],
        ),
        SizedBox(height: 20),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Text(finishvs, style: TextStyle(fontSize: 15),),
          ],
        ),
        SizedBox(height: 8),
        Row(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Text(finishdate, style: TextStyle(fontSize: 15),),
            ],
        ),
        SizedBox(height: 25),
        Row(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Text("- PROCHAIN MATCH -", style: TextStyle(fontSize: 15),),
            ],
        ),
        SizedBox(height: 20),
        Row(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Text(upcomvs, style: TextStyle(fontSize: 15),),
            ],
        ),
        SizedBox(height: 8),
        Row(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Text(upcomdate, style: TextStyle(fontSize: 15),),
            ],
        ),
      ],
    );
  }
}

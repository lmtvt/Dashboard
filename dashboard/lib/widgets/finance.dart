import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'dart:math';
import 'dart:async';

class Finance extends StatefulWidget {
  @override
  _FinanceState createState() => _FinanceState();
}

class _FinanceState extends State<Finance> {
  List _cryptoList;
  String price;

  Future<void> getCryptoPrices() async {
    String _apiURL = "https://api.coinmarketcap.com/v1/ticker/";
    http.Response response = await http.get(_apiURL);
    setState(() {
      this._cryptoList = jsonDecode(response.body);
    });
    return;
  }

  void cryptoPrice(Map crypto) {
    int decimals = 2;
    int fac = pow(10, decimals);
    double d = double.parse(crypto['price_usd']);
    String prc = ("\$" + (d = (d * fac).round() / fac).toString());
    setState(() {
      price = prc;
    });
  }

  @override
  Widget build(BuildContext context) {
    getCryptoPrices();
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Text("Les cryptomonnaies", style: TextStyle(fontSize: 20),),
        SizedBox(height: 20),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            RaisedButton(
              child: Text("BTC", style: TextStyle(fontSize: 15),),
              onPressed: () => cryptoPrice(_cryptoList[0]),
            ),
            RaisedButton(
              child: Text("ETH", style: TextStyle(fontSize: 15),),
              onPressed: () => cryptoPrice(_cryptoList[1]),
            ),
            RaisedButton(
              child: Text("XRP", style: TextStyle(fontSize: 15),),
              onPressed: () => cryptoPrice(_cryptoList[2]),
            ),
          ],
        ),
        SizedBox(height: 20),
        if (price == null) Text("\$", style: TextStyle(fontSize: 15),) else Text(price, style: TextStyle(fontSize: 15),)
      ],
    );
  }
}

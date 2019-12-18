import 'package:flutter/material.dart';
import 'dart:async';

class Rpictures extends StatefulWidget {
  Rpictures({Key key}) : super(key: key);

  @override
  _RpicturesState createState() => _RpicturesState();
}

class _RpicturesState extends State<Rpictures> {

  var _imageurl = 'https://source.unsplash.com/random/';
  int counter = 0;
  var sec = Duration(seconds: 10);

  Widget imageprovider() {
    return Image.network(
      _imageurl,
      fit: BoxFit.cover,
      height: double.infinity,
      width: double.infinity,
    );
  }

   void _newImage() {
    setState(() {
      _imageurl = 'https://source.unsplash.com/featured/?lyon/$counter';
      counter++;
    });
  }

  @override
  void initState() {
    Timer.periodic(sec, (Timer t) => setState(() {_newImage();}));
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
                child: imageprovider(),
                onTap: _newImage,
              );
  }
}

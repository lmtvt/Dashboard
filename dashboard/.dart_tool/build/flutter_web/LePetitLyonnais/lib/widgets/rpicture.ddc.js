define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const rpicture = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 7,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 7,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/widgets/rpicture.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 17,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/widgets/rpicture.dart"
      });
    }
  });
  rpicture.Rpictures = class Rpictures extends framework.StatefulWidget {
    createState() {
      return new rpicture._RpicturesState.new();
    }
  };
  (rpicture.Rpictures.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    rpicture.Rpictures.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = rpicture.Rpictures.prototype;
  dart.addTypeTests(rpicture.Rpictures);
  dart.setMethodSignature(rpicture.Rpictures, () => ({
    __proto__: dart.getMethods(rpicture.Rpictures.__proto__),
    createState: dart.fnType(rpicture._RpicturesState, [])
  }));
  dart.setLibraryUri(rpicture.Rpictures, "package:LePetitLyonnais/widgets/rpicture.dart");
  const _imageurl = dart.privateName(rpicture, "_imageurl");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C4;
  let C5;
  let C1;
  let C0;
  const _newImage = dart.privateName(rpicture, "_newImage");
  let C8;
  let C9;
  let C7;
  let C6;
  rpicture._RpicturesState = class _RpicturesState extends framework.State$(rpicture.Rpictures) {
    imageprovider() {
      return new image.Image.network(this[_imageurl], {fit: box_fit.BoxFit.cover, height: 1 / 0, width: 1 / 0, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    [_newImage]() {
      this.setState(dart.fn(() => {
        this[_imageurl] = "https://source.unsplash.com/featured/?lyon/" + dart.str(this.counter);
        this.counter = dart.notNull(this.counter) + 1;
      }, VoidToNull()));
    }
    build(context) {
      return new gesture_detector.GestureDetector.new({child: this.imageprovider(), onTap: dart.bind(this, _newImage), $creationLocationd_0dea112b090073317d4: C6 || CT.C6});
    }
  };
  (rpicture._RpicturesState.new = function() {
    this[_imageurl] = "https://source.unsplash.com/random/";
    this.counter = 0;
    rpicture._RpicturesState.__proto__.new.call(this);
    ;
  }).prototype = rpicture._RpicturesState.prototype;
  dart.addTypeTests(rpicture._RpicturesState);
  dart.setMethodSignature(rpicture._RpicturesState, () => ({
    __proto__: dart.getMethods(rpicture._RpicturesState.__proto__),
    imageprovider: dart.fnType(framework.Widget, []),
    [_newImage]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(rpicture._RpicturesState, "package:LePetitLyonnais/widgets/rpicture.dart");
  dart.setFieldSignature(rpicture._RpicturesState, () => ({
    __proto__: dart.getFields(rpicture._RpicturesState.__proto__),
    [_imageurl]: dart.fieldType(core.String),
    counter: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/LePetitLyonnais/widgets/rpicture", {
    "package:LePetitLyonnais/widgets/rpicture.dart": rpicture
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["rpicture.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAMmC;IAAiB;;;QAHnC;;AAAQ,sDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;AAYpC,YAAa,yBACX,uBACY;IAIhB;;AAMI,MAHF,cAAS;AAC0D,QAAjE,kBAAY,AAAqD,yDAAR;AAChD,QAAT,eAAO,aAAP,gBAAO;;IAEX;UAG0B;AACxB,YAAO,kDACY,uCACA;IAErB;;;IAzBI,kBAAY;IACZ,eAAU;;;EAyBhB","file":"rpicture.ddc.js"}');
  // Exports:
  return {
    widgets__rpicture: rpicture
  };
});

//# sourceMappingURL=rpicture.ddc.js.map

define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/http/http'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__http__http) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const async$ = packages__flutter__src__widgets__actions.src__widgets__async;
  const text_field = packages__flutter__material.src__material__text_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const progress_indicator = packages__flutter__material.src__material__progress_indicator;
  const http = packages__http__http.http;
  const meteo = Object.create(dart.library);
  const $_get = dartx._get;
  const $toString = dartx.toString;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let FutureBuilderOfPost = () => (FutureBuilderOfPost = dart.constFn(async$.FutureBuilder$(meteo.Post)))();
  let AsyncSnapshotOfPost = () => (AsyncSnapshotOfPost = dart.constFn(async$.AsyncSnapshot$(meteo.Post)))();
  let BuildContextAndAsyncSnapshotOfPostToWidget = () => (BuildContextAndAsyncSnapshotOfPostToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, AsyncSnapshotOfPost()])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 13,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 13,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/widgets/meteo.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/widgets/meteo.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/widgets/meteo.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 71,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/widgets/meteo.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 48,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/widgets/meteo.dart"
      });
    },
    get C18() {
      return C18 = dart.constList([], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/widgets/meteo.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 13,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 13,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/widgets/meteo.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/widgets/meteo.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/widgets/meteo.dart"
      });
    }
  });
  const temp$ = dart.privateName(meteo, "Post.temp");
  meteo.Post = class Post extends core.Object {
    get temp() {
      return this[temp$];
    }
    set temp(value) {
      super.temp = value;
    }
    static fromJson(json) {
      return new meteo.Post.new({temp: core.int._check(dart.dsend(json[$_get]("current_condition"), '_get', ["tmp"]))});
    }
  };
  (meteo.Post.new = function(opts) {
    let temp = opts && 'temp' in opts ? opts.temp : null;
    this[temp$] = temp;
    ;
  }).prototype = meteo.Post.prototype;
  dart.addTypeTests(meteo.Post);
  dart.setLibraryUri(meteo.Post, "package:LePetitLyonnais/widgets/meteo.dart");
  dart.setFieldSignature(meteo.Post, () => ({
    __proto__: dart.getFields(meteo.Post.__proto__),
    temp: dart.finalFieldType(core.int)
  }));
  meteo.Meteo = class Meteo extends framework.StatefulWidget {
    createState() {
      return new meteo._MeteoState.new();
    }
  };
  (meteo.Meteo.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    meteo.Meteo.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = meteo.Meteo.prototype;
  dart.addTypeTests(meteo.Meteo);
  dart.setMethodSignature(meteo.Meteo, () => ({
    __proto__: dart.getMethods(meteo.Meteo.__proto__),
    createState: dart.fnType(meteo._MeteoState, [])
  }));
  dart.setLibraryUri(meteo.Meteo, "package:LePetitLyonnais/widgets/meteo.dart");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C5;
  let C4;
  let C9;
  let C10;
  let C8;
  let C7;
  let C13;
  let C12;
  let C11;
  let C16;
  let C15;
  let C14;
  let C18;
  let C17;
  let C21;
  let C22;
  let C20;
  let C19;
  let C25;
  let C24;
  let C23;
  let C28;
  let C27;
  let C26;
  meteo._MeteoState = class _MeteoState extends framework.State$(meteo.Meteo) {
    initState() {
      this.ville.text = "lyon";
      super.initState();
      this.post = meteo.fetchPost(this.ville.text);
    }
    build(context) {
      return new basic.Column.new({children: JSArrayOfWidget().of([new text_field.TextField.new({controller: this.ville, decoration: new input_decorator.InputDecoration.new({hintText: "Choisissez une ville"}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new flat_button.FlatButton.new({child: new text.Text.new("Go", {$creationLocationd_0dea112b090073317d4: C4 || CT.C4}), onPressed: dart.fn(() => this.setState(dart.fn(() => {
              this.post = meteo.fetchPost(this.ville.text);
            }, VoidToNull())), VoidTovoid()), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), new basic.Center.new({child: new (FutureBuilderOfPost()).new({future: this.post, builder: dart.fn((context, snapshot) => {
                if (dart.test(snapshot.hasData)) {
                  return new text.Text.new(dart.toString(snapshot.data.temp) + " Degrés" + (" à " + dart.str(this.ville.text)), {$creationLocationd_0dea112b090073317d4: C11 || CT.C11});
                } else if (dart.test(snapshot.hasError)) {
                  return new text.Text.new(dart.str(snapshot.error), {$creationLocationd_0dea112b090073317d4: C14 || CT.C14});
                }
                return new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C17 || CT.C17});
              }, BuildContextAndAsyncSnapshotOfPostToWidget()), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23})]), $creationLocationd_0dea112b090073317d4: C26 || CT.C26});
    }
  };
  (meteo._MeteoState.new = function() {
    this.post = null;
    this.ville = new editable_text.TextEditingController.new();
    meteo._MeteoState.__proto__.new.call(this);
    ;
  }).prototype = meteo._MeteoState.prototype;
  dart.addTypeTests(meteo._MeteoState);
  dart.setMethodSignature(meteo._MeteoState, () => ({
    __proto__: dart.getMethods(meteo._MeteoState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(meteo._MeteoState, "package:LePetitLyonnais/widgets/meteo.dart");
  dart.setFieldSignature(meteo._MeteoState, () => ({
    __proto__: dart.getFields(meteo._MeteoState.__proto__),
    post: dart.fieldType(async.Future$(meteo.Post)),
    ville: dart.fieldType(editable_text.TextEditingController)
  }));
  meteo.fetchPost = function fetchPost(ville) {
    return async.async(meteo.Post, function* fetchPost() {
      let response = (yield http.get("https://www.prevision-meteo.ch/services/json/" + dart.notNull(ville)));
      return meteo.Post.fromJson(MapOfString$dynamic()._check(convert.json.decode(response.body)));
    });
  };
  dart.trackLibraries("packages/LePetitLyonnais/widgets/meteo", {
    "package:LePetitLyonnais/widgets/meteo.dart": meteo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["meteo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAcY;;;;;;oBAIiC;AACzC,YAAO,2CAC0B,WAAzB,AAAI,IAAA,QAAC,+BAAqB;IAEpC;;;QANW;;;EAAM;;;;;;;;;AAaY;IAAa;;;QAH/B;;AAAQ,+CAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAYb,MAAnB,AAAM,kBAAO;AACI,MAAX;AACsB,MAA5B,YAAO,gBAAU,AAAM;IACzB;UAG0B;AACxB,YAAO,iCACa,sBAChB,0CACgB,wBACA,mDAA0B,iFAExC,uCACS,kBAAK,yEACD,cAAM,cAAS;AACI,cAA5B,YAAO,gBAAU,AAAM;qGAG7B,6BACS,yCACG,oBACC,SAAC,SAAS;AACjB,8BAAI,AAAS,QAAD;AACV,wBAAO,mBAAwB,AAAW,AAAY,cAA1C,AAAS,AAAK,QAAN,cAAwB,aAAY,AAAkB,iBAAZ,AAAM;sBAC/D,eAAI,AAAS,QAAD;AACjB,wBAAO,mBAAwB,SAAhB,AAAS,QAAD;;AAIzB,sBAAO;;IAMnB;;;IAzCa;IACT,aAAQ;;;EAyCd;;;;;;;;;;;;uCArE8B;AAAR;AACd,sBACF,MAAM,SAAS,AAAgD,+DAAE,KAAK;AAE1E,YAAY,kDAAS,AAAK,oBAAO,AAAS,QAAD;IAC3C","file":"meteo.ddc.js"}');
  // Exports:
  return {
    widgets__meteo: meteo
  };
});

//# sourceMappingURL=meteo.ddc.js.map

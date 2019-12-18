define(['dart_sdk', 'packages/LePetitLyonnais/dashboard', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/material'], function(dart_sdk, packages__LePetitLyonnais__dashboard, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const auth = packages__LePetitLyonnais__dashboard.login__auth;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const google = Object.create(dart.library);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 33,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 33,
        [_Location_line]: 21,
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
        [_Location_column]: 33,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/login/google.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 38,
        [_Location_line]: 23,
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
        [_Location_column]: 29,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/login/google.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 34,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/login/google.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/login/google.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 25,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/login/google.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/login/google.dart"
      });
    }
  });
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
  let C8;
  let C7;
  let C12;
  let C11;
  let C10;
  let C15;
  let C16;
  let C14;
  let C13;
  let C19;
  let C20;
  let C21;
  let C18;
  let C17;
  const myauth = dart.privateName(google, "Google.myauth");
  const emailup = dart.privateName(google, "Google.emailup");
  const passwordup = dart.privateName(google, "Google.passwordup");
  const password2 = dart.privateName(google, "Google.password2");
  google.Google = class Google extends framework.StatelessWidget {
    get myauth() {
      return this[myauth];
    }
    set myauth(value) {
      this[myauth] = value;
    }
    get emailup() {
      return this[emailup];
    }
    set emailup(value) {
      this[emailup] = value;
    }
    get passwordup() {
      return this[passwordup];
    }
    set passwordup(value) {
      this[passwordup] = value;
    }
    get password2() {
      return this[password2];
    }
    set password2(value) {
      this[password2] = value;
    }
    build(context) {
      return new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new flat_button.FlatButton.new({onPressed: dart.fn(() => this.myauth.signInWithGoogle(context), VoidTovoid()), child: new basic.Row.new({children: JSArrayOfWidget().of([new image.Image.asset("assets/google.png", {height: 20.0, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new basic.SizedBox.new({width: 5.0, $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), new text.Text.new("Connect with Google", {$creationLocationd_0dea112b090073317d4: C7 || CT.C7})]), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13})]), $creationLocationd_0dea112b090073317d4: C17 || CT.C17});
    }
  };
  (google.Google.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[myauth] = new auth.MyAuth.new();
    this[emailup] = new editable_text.TextEditingController.new();
    this[passwordup] = new editable_text.TextEditingController.new();
    this[password2] = new editable_text.TextEditingController.new();
    google.Google.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = google.Google.prototype;
  dart.addTypeTests(google.Google);
  dart.setMethodSignature(google.Google, () => ({
    __proto__: dart.getMethods(google.Google.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(google.Google, "package:LePetitLyonnais/login/google.dart");
  dart.setFieldSignature(google.Google, () => ({
    __proto__: dart.getFields(google.Google.__proto__),
    myauth: dart.fieldType(auth.MyAuth),
    emailup: dart.fieldType(editable_text.TextEditingController),
    passwordup: dart.fieldType(editable_text.TextEditingController),
    password2: dart.fieldType(editable_text.TextEditingController)
  }));
  dart.trackLibraries("packages/LePetitLyonnais/login/google", {
    "package:LePetitLyonnais/login/google.dart": google
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["google.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAIS;;;;;;IACH;;;;;;IACA;;;;;;IACA;;;;;;UAEsB;AACxB,YAAO,uCACkC,mDACE,0CACX,sBAChB,2CACe,cAAM,AAAO,6BAAiB,OAAO,yBACzC,6BACa,sBACZ,sBACA,8BACQ,6DAEZ,+BAAgB,4DAChB,kBAAK;IAM/B;;;;IAzBO,eAAS;IACZ,gBAAU;IACV,mBAAa;IACb,kBAAY;;;EAuBlB","file":"google.ddc.js"}');
  // Exports:
  return {
    login__google: google
  };
});

//# sourceMappingURL=google.ddc.js.map

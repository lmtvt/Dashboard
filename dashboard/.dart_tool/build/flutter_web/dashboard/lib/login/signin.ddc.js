define(['dart_sdk', 'packages/dashboard/dashboard', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material'], function(dart_sdk, packages__dashboard__dashboard, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const auth = packages__dashboard__dashboard.login__auth;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const text_field = packages__flutter__material.src__material__text_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const floating_action_button = packages__flutter__material.src__material__floating_action_button;
  const signin = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 13,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 16,
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
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/dashboard/login/signin.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 18,
        [_Location_line]: 18,
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
        [_Location_column]: 9,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/dashboard/login/signin.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 11,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 21,
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
        [_Location_column]: 9,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/dashboard/login/signin.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 18,
        [_Location_line]: 23,
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
        [_Location_column]: 9,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/dashboard/login/signin.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 11,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 11,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/dashboard/login/signin.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 18,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/dashboard/login/signin.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/dashboard/login/signin.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "heroTag",
        [_Location_column]: 13,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/dashboard/login/signin.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 11,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 10,
        [_Location_file]: "org-dartlang-app:///packages/dashboard/login/signin.dart"
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
  let C10;
  let C8;
  let C7;
  let C13;
  let C12;
  let C11;
  let C16;
  let C17;
  let C18;
  let C15;
  let C14;
  let C21;
  let C20;
  let C19;
  let C24;
  let C23;
  let C22;
  let C27;
  let C28;
  let C29;
  let C26;
  let C25;
  let C32;
  let C33;
  let C34;
  let C31;
  let C30;
  const myauth = dart.privateName(signin, "Signin.myauth");
  const emailsignin = dart.privateName(signin, "Signin.emailsignin");
  const passwordsignin = dart.privateName(signin, "Signin.passwordsignin");
  signin.Signin = class Signin extends framework.StatelessWidget {
    get myauth() {
      return this[myauth];
    }
    set myauth(value) {
      this[myauth] = value;
    }
    get emailsignin() {
      return this[emailsignin];
    }
    set emailsignin(value) {
      this[emailsignin] = value;
    }
    get passwordsignin() {
      return this[passwordsignin];
    }
    set passwordsignin(value) {
      this[passwordsignin] = value;
    }
    build(context) {
      return new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new text.Text.new("Sign In", {style: new text_style.TextStyle.new({fontSize: 30.0}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new basic.SizedBox.new({height: 40.0, $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), new text_field.TextField.new({controller: this.emailsignin, decoration: new input_decorator.InputDecoration.new({hintText: "Email"}), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), new basic.SizedBox.new({height: 40.0, $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), new text_field.TextField.new({obscureText: true, controller: this.passwordsignin, decoration: new input_decorator.InputDecoration.new({hintText: "Password"}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), new basic.SizedBox.new({height: 40.0, $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), new floating_action_button.FloatingActionButton.new({heroTag: "btnin", child: new text.Text.new("Signin", {$creationLocationd_0dea112b090073317d4: C22 || CT.C22}), onPressed: dart.fn(() => {
              this.myauth.signInWithCredentials(this.emailsignin.text, this.passwordsignin.text, context);
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C25 || CT.C25})]), $creationLocationd_0dea112b090073317d4: C30 || CT.C30});
    }
  };
  (signin.Signin.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[myauth] = new auth.MyAuth.new();
    this[emailsignin] = new editable_text.TextEditingController.new();
    this[passwordsignin] = new editable_text.TextEditingController.new();
    signin.Signin.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = signin.Signin.prototype;
  dart.addTypeTests(signin.Signin);
  dart.setMethodSignature(signin.Signin, () => ({
    __proto__: dart.getMethods(signin.Signin.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(signin.Signin, "package:dashboard/login/signin.dart");
  dart.setFieldSignature(signin.Signin, () => ({
    __proto__: dart.getFields(signin.Signin.__proto__),
    myauth: dart.fieldType(auth.MyAuth),
    emailsignin: dart.fieldType(editable_text.TextEditingController),
    passwordsignin: dart.fieldType(editable_text.TextEditingController)
  }));
  dart.trackLibraries("packages/dashboard/login/signin", {
    "package:dashboard/login/signin.dart": signin
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["signin.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAIS;;;;;;IACH;;;;;;IACA;;;;;;UAEsB;AACxB,YAAO,0CACgC,mDACE,0CACrB,sBAChB,kBACI,mBACO,wCAAoB,+DAE/B,gCAAiB,6DACjB,0CACc,8BACA,mDAA0B,kEAExC,gCAAiB,+DACjB,2CACe,kBACD,iCACA,mDAA0B,uEAExC,gCAAiB,+DACjB,8DACa,gBACF,kBAAK,+EACD;AAE0C,cADnD,AAAO,kCACH,AAAY,uBAAM,AAAe,0BAAM,OAAO;;IAI9D;;;;IAlCO,eAAS;IACZ,oBAAc;IACd,uBAAiB;;;EAiCvB","file":"signin.ddc.js"}');
  // Exports:
  return {
    login__signin: signin
  };
});

//# sourceMappingURL=signin.ddc.js.map

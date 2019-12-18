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
  const flat_button = packages__flutter__material.src__material__flat_button;
  const signup = Object.create(dart.library);
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 17,
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
        [_Location_column]: 23,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/dashboard/login/signup.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 30,
        [_Location_line]: 19,
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
        [_Location_column]: 21,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/dashboard/login/signup.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 23,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 22,
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
        [_Location_column]: 21,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/dashboard/login/signup.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 30,
        [_Location_line]: 24,
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
        [_Location_column]: 21,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/dashboard/login/signup.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 23,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 23,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 28,
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
        [_Location_column]: 21,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/dashboard/login/signup.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 30,
        [_Location_line]: 31,
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
        [_Location_column]: 21,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/dashboard/login/signup.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 23,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 23,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/dashboard/login/signup.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 30,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/dashboard/login/signup.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 35,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/dashboard/login/signup.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "heroTag",
        [_Location_column]: 23,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36, C37 || CT.C37], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/dashboard/login/signup.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 44,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/dashboard/login/signup.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 32,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43, C44 || CT.C44], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/dashboard/login/signup.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47, C48 || CT.C48, C49 || CT.C49], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/dashboard/login/signup.dart"
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
  let C25;
  let C26;
  let C23;
  let C22;
  let C29;
  let C28;
  let C27;
  let C32;
  let C31;
  let C30;
  let C35;
  let C36;
  let C37;
  let C34;
  let C33;
  let C40;
  let C39;
  let C38;
  let C43;
  let C44;
  let C42;
  let C41;
  let C47;
  let C48;
  let C49;
  let C46;
  let C45;
  const myauth = dart.privateName(signup, "Signup.myauth");
  const emailup = dart.privateName(signup, "Signup.emailup");
  const passwordup = dart.privateName(signup, "Signup.passwordup");
  const password2 = dart.privateName(signup, "Signup.password2");
  signup.Signup = class Signup extends framework.StatelessWidget {
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
      return new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new text.Text.new("Sign Up", {style: new text_style.TextStyle.new({fontSize: 30.0}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new basic.SizedBox.new({height: 40.0, $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), new text_field.TextField.new({controller: this.emailup, decoration: new input_decorator.InputDecoration.new({hintText: "Email"}), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), new basic.SizedBox.new({height: 40.0, $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), new text_field.TextField.new({obscureText: true, controller: this.passwordup, decoration: new input_decorator.InputDecoration.new({hintText: "Password (6 characters min)"}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), new basic.SizedBox.new({height: 40.0, $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), new text_field.TextField.new({obscureText: true, controller: this.password2, decoration: new input_decorator.InputDecoration.new({hintText: "Password (6 characters min)"}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), new basic.SizedBox.new({height: 80.0, $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), new floating_action_button.FloatingActionButton.new({heroTag: "btnup", child: new text.Text.new("Signup", {$creationLocationd_0dea112b090073317d4: C30 || CT.C30}), onPressed: dart.fn(() => this.myauth.checksignup(this.emailup.text, this.passwordup.text, this.password2.text), VoidTodynamic()), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), new flat_button.FlatButton.new({child: new text.Text.new("Google", {$creationLocationd_0dea112b090073317d4: C38 || CT.C38}), onPressed: dart.fn(() => this.myauth.signInWithGoogle(context), VoidTovoid()), $creationLocationd_0dea112b090073317d4: C41 || CT.C41})]), $creationLocationd_0dea112b090073317d4: C45 || CT.C45});
    }
  };
  (signup.Signup.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[myauth] = new auth.MyAuth.new();
    this[emailup] = new editable_text.TextEditingController.new();
    this[passwordup] = new editable_text.TextEditingController.new();
    this[password2] = new editable_text.TextEditingController.new();
    signup.Signup.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = signup.Signup.prototype;
  dart.addTypeTests(signup.Signup);
  dart.setMethodSignature(signup.Signup, () => ({
    __proto__: dart.getMethods(signup.Signup.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(signup.Signup, "package:dashboard/login/signup.dart");
  dart.setFieldSignature(signup.Signup, () => ({
    __proto__: dart.getFields(signup.Signup.__proto__),
    myauth: dart.fieldType(auth.MyAuth),
    emailup: dart.fieldType(editable_text.TextEditingController),
    passwordup: dart.fieldType(editable_text.TextEditingController),
    password2: dart.fieldType(editable_text.TextEditingController)
  }));
  dart.trackLibraries("packages/dashboard/login/signup", {
    "package:dashboard/login/signup.dart": signup
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["signup.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAIS;;;;;;IACH;;;;;;IACA;;;;;;IACA;;;;;;UAEsB;AACxB,YAAO,0CACkC,mDACE,0CACX,sBACd,kBACI,mBACO,wCAAoB,+DAEjC,gCAAiB,6DACjB,0CACc,0BACA,mDAA0B,kEAExC,gCAAiB,+DACjB,2CACe,kBACD,6BACA,mDACE,0FAEhB,gCAAiB,+DACjB,2CACe,kBACD,4BACA,mDACE,0FAEhB,gCAAiB,+DACjB,8DACW,gBACF,kBAAK,+EACD,cAAM,AAAO,wBAAY,AAAQ,mBAAM,AAAW,sBAAM,AAAU,iGAE/E,uCAAkB,kBAAK,+EAClB,cAAM,AAAO,6BAAiB,OAAO;IAG5D;;;;IA3CO,eAAS;IACZ,gBAAU;IACV,mBAAa;IACb,kBAAY;;;EAyClB","file":"signup.ddc.js"}');
  // Exports:
  return {
    login__signup: signup
  };
});

//# sourceMappingURL=signup.ddc.js.map

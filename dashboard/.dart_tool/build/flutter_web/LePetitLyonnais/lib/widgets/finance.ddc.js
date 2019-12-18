define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/http/http', 'packages/flutter/material'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__http__http, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const http = packages__http__http.http;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const finance = Object.create(dart.library);
  const $_get = dartx._get;
  const $round = dartx.round;
  const $toString = dartx.toString;
  const $add = dartx.add;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 14,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/widgets/finance.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/widgets/finance.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 45,
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
        [_Location_column]: 13,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/widgets/finance.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 48,
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
        [_Location_column]: 22,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/widgets/finance.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 49,
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
        [_Location_column]: 13,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/widgets/finance.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/widgets/finance.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 16,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/widgets/finance.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 16,
        [_Location_line]: 60,
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
        [_Location_column]: 11,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/widgets/finance.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 39,
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
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/widgets/finance.dart"
      });
    }
  });
  finance.Finance = class Finance extends framework.StatefulWidget {
    createState() {
      return new finance._FinanceState.new();
    }
  };
  (finance.Finance.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    finance.Finance.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = finance.Finance.prototype;
  dart.addTypeTests(finance.Finance);
  dart.setMethodSignature(finance.Finance, () => ({
    __proto__: dart.getMethods(finance.Finance.__proto__),
    createState: dart.fnType(finance._FinanceState, [])
  }));
  dart.setLibraryUri(finance.Finance, "package:LePetitLyonnais/widgets/finance.dart");
  const _cryptoList = dart.privateName(finance, "_cryptoList");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C4;
  let C3;
  let C8;
  let C9;
  let C7;
  let C6;
  let C12;
  let C11;
  let C10;
  let C15;
  let C16;
  let C14;
  let C13;
  let C19;
  let C18;
  let C17;
  let C22;
  let C21;
  let C20;
  let C25;
  let C24;
  let C23;
  let C28;
  let C27;
  let C26;
  finance._FinanceState = class _FinanceState extends framework.State$(finance.Finance) {
    getCryptoPrices() {
      return async.async(dart.void, (function* getCryptoPrices() {
        let _apiURL = "https://api.coinmarketcap.com/v1/ticker/";
        let response = (yield http.get(_apiURL));
        this.setState(dart.fn(() => {
          this[_cryptoList] = core.List._check(convert.jsonDecode(response.body));
        }, VoidToNull()));
        return;
      }).bind(this));
    }
    cryptoPrice(crypto) {
      core.print("a");
      let decimals = 2;
      let fac = dart.asInt(math.pow(10, decimals));
      let d = core.double.parse(core.String._check(crypto[$_get]("price_usd")));
      let prc = "$" + (d = (dart.notNull(d) * fac)[$round]() / fac)[$toString]();
      this.setState(dart.fn(() => {
        this.price = prc;
      }, VoidToNull()));
    }
    build(context) {
      this.getCryptoPrices();
      return new basic.Column.new({children: (() => {
          let t0 = JSArrayOfWidget().of([]);
          t0[$add](new text.Text.new("Crytocurrencies", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}));
          t0[$add](new basic.Row.new({children: JSArrayOfWidget().of([new raised_button.RaisedButton.new({child: new text.Text.new("BTC", {$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), onPressed: dart.fn(() => this.cryptoPrice(core.Map._check(this[_cryptoList][$_get](0))), VoidTovoid()), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), new raised_button.RaisedButton.new({child: new text.Text.new("ETH", {$creationLocationd_0dea112b090073317d4: C10 || CT.C10}), onPressed: dart.fn(() => this.cryptoPrice(core.Map._check(this[_cryptoList][$_get](1))), VoidTovoid()), $creationLocationd_0dea112b090073317d4: C13 || CT.C13})]), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}));
          if (this.price == null)
            t0[$add](new text.Text.new("$", {$creationLocationd_0dea112b090073317d4: C20 || CT.C20}));
          else
            t0[$add](new text.Text.new(this.price, {$creationLocationd_0dea112b090073317d4: C23 || CT.C23}));
          return t0;
        })(), $creationLocationd_0dea112b090073317d4: C26 || CT.C26});
    }
  };
  (finance._FinanceState.new = function() {
    this[_cryptoList] = null;
    this.price = null;
    finance._FinanceState.__proto__.new.call(this);
    ;
  }).prototype = finance._FinanceState.prototype;
  dart.addTypeTests(finance._FinanceState);
  dart.setMethodSignature(finance._FinanceState, () => ({
    __proto__: dart.getMethods(finance._FinanceState.__proto__),
    getCryptoPrices: dart.fnType(async.Future$(dart.void), []),
    cryptoPrice: dart.fnType(dart.void, [core.Map]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(finance._FinanceState, "package:LePetitLyonnais/widgets/finance.dart");
  dart.setFieldSignature(finance._FinanceState, () => ({
    __proto__: dart.getFields(finance._FinanceState.__proto__),
    [_cryptoList]: dart.fieldType(core.List),
    price: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/LePetitLyonnais/widgets/finance", {
    "package:LePetitLyonnais/widgets/finance.dart": finance
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["finance.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAOiC;IAAe;;;;;;EAChD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAM8B;AACnB,sBAAU;AACH,wBAAW,MAAM,SAAS,OAAO;AAG7C,QAFF,cAAS;AACqC,8BAAvC,iBAAc,mBAAW,AAAS,QAAD;;AAExC;MACF;;gBAEqB;AACT,MAAV,WAAM;AACF,qBAAW;AACX,2BAAM,SAAI,IAAI,QAAQ;AACnB,cAAW,qCAAM,AAAM,MAAA,QAAC;AACxB,gBAAO,AAAK,MAAgC,CAA7B,IAAc,AAAQ,CAAf,aAAF,CAAC,IAAG,GAAG,cAAY,GAAG;AAG/C,MAFF,cAAS;AACI,QAAX,aAAQ,GAAG;;IAEf;UAG0B;AACP,MAAjB;AACA,YAAO;;mBAEH,kBAAK;mBACL,6BACoB,sBAChB,2CACS,kBAAK,0EACD,cAAM,iCAAY,AAAW,yBAAC,4EAE3C,2CACS,kBAAK,4EACD,cAAM,iCAAY,AAAW,yBAAC;AAQ/C,cAAI,AAAM,cAAG;qBACX,kBAAK;;qBAEL,kBAAK;;;IAGb;;;IAnDK;IACE;;;EAmDT","file":"finance.ddc.js"}');
  // Exports:
  return {
    widgets__finance: finance
  };
});

//# sourceMappingURL=finance.ddc.js.map

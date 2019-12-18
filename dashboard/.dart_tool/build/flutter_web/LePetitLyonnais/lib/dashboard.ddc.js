define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/firebase/firebase', 'packages/firebase/src/app', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size', 'packages/LePetitLyonnais/widgets/rpicture', 'packages/LePetitLyonnais/widgets/finance', 'packages/LePetitLyonnais/widgets/meteo'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__firebase__firebase, packages__firebase__src__app, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size, packages__LePetitLyonnais__widgets__rpicture, packages__LePetitLyonnais__widgets__finance, packages__LePetitLyonnais__widgets__meteo) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const top_level = packages__firebase__firebase.src__top_level;
  const firestore = packages__firebase__src__app.src__firestore;
  const auth = packages__firebase__src__app.src__auth;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const colors = packages__flutter__material.src__material__colors;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const icons = packages__flutter__material.src__material__icons;
  const card = packages__flutter__material.src__material__card;
  const page = packages__flutter__material.src__material__page;
  const dialog = packages__flutter__material.src__material__dialog;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_shadow = packages__flutter__src__painting___network_image_web.src__painting__box_shadow;
  const sliver_grid = packages__flutter__src__rendering__animated_size.src__rendering__sliver_grid;
  const rpicture = packages__LePetitLyonnais__widgets__rpicture.widgets__rpicture;
  const finance = packages__LePetitLyonnais__widgets__finance.widgets__finance;
  const meteo = packages__LePetitLyonnais__widgets__meteo.widgets__meteo;
  const dashboard = Object.create(dart.library);
  const drawer = Object.create(dart.library);
  const auth$ = Object.create(dart.library);
  const $substring = dartx.substring;
  let DocumentSnapshotToNull = () => (DocumentSnapshotToNull = dart.constFn(dart.fnType(core.Null, [firestore.DocumentSnapshot])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let JSArrayOfBoxShadow = () => (JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(box_shadow.BoxShadow)))();
  let BuildContextToMyHomePage = () => (BuildContextToMyHomePage = dart.constFn(dart.fnType(dashboard.MyHomePage, [framework.BuildContext])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 13,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 53,
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
        [_Location_column]: 16,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/dashboard.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 30,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 53,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/dashboard.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 32,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/dashboard.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 15,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/dashboard.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 9,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "centerTitle",
        [_Location_column]: 9,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/dashboard.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 20,
        [_Location_line]: 68,
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
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/dashboard.dart"
      });
    },
    get C27() {
      return C27 = dart.constList([], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/dashboard.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/dashboard.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/dashboard.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/dashboard.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/dashboard.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40, C41 || CT.C41], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/dashboard.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "gridDelegate",
        [_Location_column]: 15,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/dashboard.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/dashboard.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/dashboard.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56, C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/dashboard.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 36,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61, C62 || CT.C62], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/drawer.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.constList([C65 || CT.C65], widget_inspector._Location);
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C64 || CT.C64,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/drawer.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 13,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69, C70 || CT.C70], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/drawer.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 60,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/login/auth.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74], widget_inspector._Location);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/login/auth.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C76 || CT.C76,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/login/auth.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 19,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 7,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.constList([C80 || CT.C80, C81 || CT.C81], widget_inspector._Location);
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C79 || CT.C79,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/login/auth.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 60,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/LePetitLyonnais/login/auth.dart"
      });
    }
  });
  dashboard.MyHomePage = class MyHomePage extends framework.StatefulWidget {
    createState() {
      return new dashboard._MyHomePageState.new();
    }
  };
  (dashboard.MyHomePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    dashboard.MyHomePage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = dashboard.MyHomePage.prototype;
  dart.addTypeTests(dashboard.MyHomePage);
  dart.setMethodSignature(dashboard.MyHomePage, () => ({
    __proto__: dart.getMethods(dashboard.MyHomePage.__proto__),
    createState: dart.fnType(dashboard._MyHomePageState, [])
  }));
  dart.setLibraryUri(dashboard.MyHomePage, "package:LePetitLyonnais/dashboard.dart");
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
  let C7;
  let C5;
  let C4;
  let C10;
  let C9;
  let C8;
  let C13;
  let C14;
  let C15;
  let C12;
  let C11;
  let C18;
  let C19;
  let C20;
  let C21;
  let C22;
  let C17;
  let C16;
  let C25;
  let C24;
  let C23;
  let C27;
  let C26;
  let C30;
  let C31;
  let C29;
  let C28;
  let C32;
  let C35;
  let C36;
  let C34;
  let C33;
  let C37;
  let C40;
  let C41;
  let C39;
  let C38;
  let C44;
  let C45;
  let C46;
  let C43;
  let C42;
  let C49;
  let C50;
  let C48;
  let C47;
  let C53;
  let C52;
  let C51;
  let C56;
  let C57;
  let C58;
  let C55;
  let C54;
  dashboard._MyHomePageState = class _MyHomePageState extends framework.State$(dashboard.MyHomePage) {
    getData() {
      this.db.collection("users").doc(this.userdata.email).get().then(core.Null, dart.fn(fdata => {
        this.data = fdata;
      }, DocumentSnapshotToNull()));
    }
    updateUser(widget, value) {
      return async.async(dart.void, (function* updateUser() {
        let ref = this.db.collection("users");
        let newData = new (IdentityMapOfString$String()).from([widget, value]);
        yield ref.doc(this.userdata.email).set(newData, {merge: true});
      }).bind(this));
    }
    build(context) {
      let width = media_query.MediaQuery.of(context).size.width;
      this.userdata = this.myauth.getUser();
      this.getData();
      return new scaffold.Scaffold.new({backgroundColor: new ui.Color.new(4294967295), appBar: new app_bar.AppBar.new({title: new text.Text.new("Le Petit Lyonnais", {style: new text_style.TextStyle.new({fontFamily: "Cocogoose-Pro-trial", height: 15.0, color: colors.Colors.black}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), leading: new image.Image.asset("assets/iconlyon.png", {fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), centerTitle: true, backgroundColor: new ui.Color.new(4294561215), actions: JSArrayOfWidget().of([new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.exit_to_app, {$creationLocationd_0dea112b090073317d4: C8 || CT.C8}), padding: new edge_insets.EdgeInsets.only({right: 20.0}), color: colors.Colors.black, $creationLocationd_0dea112b090073317d4: C11 || CT.C11})]), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), body: new basic.Row.new({children: JSArrayOfWidget().of([new drawer.MyDrawer.new(width, {$creationLocationd_0dea112b090073317d4: C23 || CT.C23}), new container.Container.new({width: dart.notNull(width) * 0.8, child: new scroll_view.GridView.new({padding: new edge_insets.EdgeInsets.all(20.0), gridDelegate: new sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.new({crossAxisCount: 3}), children: JSArrayOfWidget().of([new card.Card.new({color: colors.Colors.lightGreen._get(200), child: new rpicture.Rpictures.new({$creationLocationd_0dea112b090073317d4: C26 || CT.C26}), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), new card.Card.new({color: colors.Colors.lightGreen._get(200), child: new finance.Finance.new({$creationLocationd_0dea112b090073317d4: C32 || CT.C32}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), new card.Card.new({color: colors.Colors.lightGreen._get(200), child: new meteo.Meteo.new({$creationLocationd_0dea112b090073317d4: C37 || CT.C37}), $creationLocationd_0dea112b090073317d4: C38 || CT.C38})]), $creationLocationd_0dea112b090073317d4: C42 || CT.C42}), $creationLocationd_0dea112b090073317d4: C47 || CT.C47})]), $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), $creationLocationd_0dea112b090073317d4: C54 || CT.C54});
    }
  };
  (dashboard._MyHomePageState.new = function() {
    this.myauth = new auth$.MyAuth.new();
    this.userdata = null;
    this.db = top_level.firestore();
    this.data = null;
    dashboard._MyHomePageState.__proto__.new.call(this);
    ;
  }).prototype = dashboard._MyHomePageState.prototype;
  dart.addTypeTests(dashboard._MyHomePageState);
  dart.setMethodSignature(dashboard._MyHomePageState, () => ({
    __proto__: dart.getMethods(dashboard._MyHomePageState.__proto__),
    getData: dart.fnType(dart.void, []),
    updateUser: dart.fnType(dart.void, [core.String, core.String]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(dashboard._MyHomePageState, "package:LePetitLyonnais/dashboard.dart");
  dart.setFieldSignature(dashboard._MyHomePageState, () => ({
    __proto__: dart.getFields(dashboard._MyHomePageState.__proto__),
    myauth: dart.fieldType(auth$.MyAuth),
    userdata: dart.fieldType(auth.User),
    db: dart.fieldType(firestore.Firestore),
    data: dart.fieldType(dart.dynamic)
  }));
  const width$ = dart.privateName(drawer, "MyDrawer.width");
  drawer.MyDrawer = class MyDrawer extends framework.StatefulWidget {
    get width() {
      return this[width$];
    }
    set width(value) {
      this[width$] = value;
    }
    createState() {
      return new drawer._MyDrawerState.new();
    }
  };
  (drawer.MyDrawer.new = function(width, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[width$] = width;
    drawer.MyDrawer.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = drawer.MyDrawer.prototype;
  dart.addTypeTests(drawer.MyDrawer);
  dart.setMethodSignature(drawer.MyDrawer, () => ({
    __proto__: dart.getMethods(drawer.MyDrawer.__proto__),
    createState: dart.fnType(drawer._MyDrawerState, [])
  }));
  dart.setLibraryUri(drawer.MyDrawer, "package:LePetitLyonnais/drawer.dart");
  dart.setFieldSignature(drawer.MyDrawer, () => ({
    __proto__: dart.getFields(drawer.MyDrawer.__proto__),
    width: dart.fieldType(dart.dynamic)
  }));
  let C61;
  let C62;
  let C60;
  let C59;
  let C65;
  let C64;
  let C63;
  let C68;
  let C69;
  let C70;
  let C67;
  let C66;
  drawer._MyDrawerState = class _MyDrawerState extends framework.State$(drawer.MyDrawer) {
    build(context) {
      return new container.Container.new({decoration: new box_decoration.BoxDecoration.new({color: new ui.Color.new(4294436555), boxShadow: JSArrayOfBoxShadow().of([new box_shadow.BoxShadow.new({color: colors.Colors.grey.withOpacity(0.7), spreadRadius: 8.0, blurRadius: 4.0, offset: new ui.Offset.new(0.0, 7.0)})])}), width: core.double._check(dart.dsend(this.widget.width, '*', [0.2])), child: new basic.Column.new({children: JSArrayOfWidget().of([new text.Text.new(this.myauth.getUser().email, {style: new text_style.TextStyle.new({color: new ui.Color.new(4294963641)}), $creationLocationd_0dea112b090073317d4: C59 || CT.C59})]), $creationLocationd_0dea112b090073317d4: C63 || CT.C63}), $creationLocationd_0dea112b090073317d4: C66 || CT.C66});
    }
  };
  (drawer._MyDrawerState.new = function() {
    this.myauth = new auth$.MyAuth.new();
    drawer._MyDrawerState.__proto__.new.call(this);
    ;
  }).prototype = drawer._MyDrawerState.prototype;
  dart.addTypeTests(drawer._MyDrawerState);
  dart.setMethodSignature(drawer._MyDrawerState, () => ({
    __proto__: dart.getMethods(drawer._MyDrawerState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(drawer._MyDrawerState, "package:LePetitLyonnais/drawer.dart");
  dart.setFieldSignature(drawer._MyDrawerState, () => ({
    __proto__: dart.getFields(drawer._MyDrawerState.__proto__),
    myauth: dart.fieldType(auth$.MyAuth)
  }));
  const _firebaseAuth = dart.privateName(auth$, "_firebaseAuth");
  const _googleSignIn = dart.privateName(auth$, "_googleSignIn");
  let C71;
  let C74;
  let C73;
  let C72;
  let C77;
  let C76;
  let C75;
  let C80;
  let C81;
  let C79;
  let C78;
  let C82;
  const error = dart.privateName(auth$, "MyAuth.error");
  const db = dart.privateName(auth$, "MyAuth.db");
  auth$.MyAuth = class MyAuth extends core.Object {
    get error() {
      return this[error];
    }
    set error(value) {
      this[error] = value;
    }
    get db() {
      return this[db];
    }
    set db(value) {
      this[db] = value;
    }
    signInWithGoogle(context) {
      return async.async(dart.void, (function* signInWithGoogle() {
        let error = 0;
        let texterror = null;
        try {
          yield this[_firebaseAuth].signInWithPopup(this[_googleSignIn]);
        } catch (e$) {
          let e = dart.getThrown(e$);
          error = core.int._check(e);
          texterror = e;
        }
        if (error === 0)
          navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new dashboard.MyHomePage.new({$creationLocationd_0dea112b090073317d4: C71 || CT.C71}), BuildContextToMyHomePage())}));
        else
          new dialog.AlertDialog.new({title: new text.Text.new("Error", {$creationLocationd_0dea112b090073317d4: C72 || CT.C72}), content: new text.Text.new(core.String._check(texterror), {$creationLocationd_0dea112b090073317d4: C75 || CT.C75}), $creationLocationd_0dea112b090073317d4: C78 || CT.C78});
      }).bind(this));
    }
    createRecord() {
      return async.async(dart.void, (function* createRecord() {
        yield this.db.collection("users").doc(dart.toString(this[_firebaseAuth].currentUser)[$substring](6)).set(new (IdentityMapOfString$dynamic()).from(["mail", this.getUser(), "meteo", "0"]));
      }).bind(this));
    }
    signInWithCredentials(email, password, context) {
      return async.async(dart.void, (function* signInWithCredentials() {
        let error = 0;
        yield this[_firebaseAuth].signInWithEmailAndPassword(email, password).catchError(dart.fn(e => {
          error = core.int._check(e);
        }, dynamicToNull()));
        if (error === 0) navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new dashboard.MyHomePage.new({$creationLocationd_0dea112b090073317d4: C82 || CT.C82}), BuildContextToMyHomePage())}));
      }).bind(this));
    }
    signUp(email, password) {
      return async.async(auth.UserCredential, (function* signUp() {
        try {
          return yield this[_firebaseAuth].createUserWithEmailAndPassword(email, password);
        } catch (e$) {
          let e = dart.getThrown(e$);
          core.print("Error siging in with credentials: " + dart.str(e));
          dart.throw(dart.str(e));
        }
      }).bind(this));
    }
    getUser() {
      return this[_firebaseAuth].currentUser;
    }
    checksignup(email, password1, password2) {
      if (password1 == password2) {
        this.signUp(email, password1);
        this.createRecord();
      }
    }
  };
  (auth$.MyAuth.new = function(opts) {
    let t0, t0$;
    let firebaseAuth = opts && 'firebaseAuth' in opts ? opts.firebaseAuth : null;
    let googleSignin = opts && 'googleSignin' in opts ? opts.googleSignin : null;
    this[error] = null;
    this[db] = top_level.firestore();
    this[_firebaseAuth] = (t0 = firebaseAuth, t0 == null ? top_level.auth() : t0);
    this[_googleSignIn] = (t0$ = googleSignin, t0$ == null ? auth.GoogleAuthProvider.new() : t0$);
    ;
  }).prototype = auth$.MyAuth.prototype;
  dart.addTypeTests(auth$.MyAuth);
  dart.setMethodSignature(auth$.MyAuth, () => ({
    __proto__: dart.getMethods(auth$.MyAuth.__proto__),
    signInWithGoogle: dart.fnType(dart.void, [framework.BuildContext]),
    createRecord: dart.fnType(dart.void, []),
    signInWithCredentials: dart.fnType(dart.void, [core.String, core.String, framework.BuildContext]),
    signUp: dart.fnType(async.Future$(auth.UserCredential), [core.String, core.String]),
    getUser: dart.fnType(auth.User, []),
    checksignup: dart.fnType(dart.dynamic, [core.String, core.String, core.String])
  }));
  dart.setLibraryUri(auth$.MyAuth, "package:LePetitLyonnais/login/auth.dart");
  dart.setFieldSignature(auth$.MyAuth, () => ({
    __proto__: dart.getFields(auth$.MyAuth.__proto__),
    error: dart.fieldType(dart.dynamic),
    db: dart.fieldType(firestore.Firestore),
    [_firebaseAuth]: dart.finalFieldType(auth.Auth),
    [_googleSignIn]: dart.finalFieldType(auth.GoogleAuthProvider)
  }));
  dart.trackLibraries("packages/LePetitLyonnais/dashboard", {
    "package:LePetitLyonnais/dashboard.dart": dashboard,
    "package:LePetitLyonnais/drawer.dart": drawer,
    "package:LePetitLyonnais/login/auth.dart": auth$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dashboard.dart","drawer.dart","login/auth.dart"],"names":[],"mappings":"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","file":"dashboard.ddc.js"}');
  // Exports:
  return {
    dashboard: dashboard,
    drawer: drawer,
    login__auth: auth$
  };
});

//# sourceMappingURL=dashboard.ddc.js.map

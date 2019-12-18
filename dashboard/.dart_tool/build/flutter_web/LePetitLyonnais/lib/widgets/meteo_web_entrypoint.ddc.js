define(['dart_sdk', 'packages/LePetitLyonnais/widgets/meteo'], function(dart_sdk, packages__LePetitLyonnais__widgets__meteo) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const meteo = packages__LePetitLyonnais__widgets__meteo.widgets__meteo;
  const meteo_web_entrypoint = Object.create(dart.library);
  const CT = Object.create(null);
  meteo_web_entrypoint.main = function main() {
    return async.async(dart.void, function* main() {
      if (true) {
        yield ui.webOnlyInitializePlatform();
      }
      meteo.main();
    });
  };
  dart.trackLibraries("packages/LePetitLyonnais/widgets/meteo_web_entrypoint", {
    "package:LePetitLyonnais/widgets/meteo_web_entrypoint.dart": meteo_web_entrypoint
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["meteo_web_entrypoint.dart"],"names":[],"mappings":";;;;;;;;;;;AAIiB;AACf,UAAI;AACkC,QAApC,MAAM;;AAES,MAAjB;IACF","file":"meteo_web_entrypoint.ddc.js"}');
  // Exports:
  return {
    widgets__meteo_web_entrypoint: meteo_web_entrypoint
  };
});

//# sourceMappingURL=meteo_web_entrypoint.ddc.js.map

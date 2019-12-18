import 'dart:ui' as ui;

import "file:///home/lucamtvt/tek3/DEV_dashboard_2019/dashboard/lib/main.dart" as entrypoint;

Future<void> main() async {
  if (true) {
    await ui.webOnlyInitializePlatform();
  }
  entrypoint.main();
}

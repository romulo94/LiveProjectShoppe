import { registerApplication, start } from "single-spa";

const apps = [
  {
    name: "@shoppe/app-header",
    package: "@shoppe/app-header",
    activeWhen: (location) => !location.pathname.startsWith("/blank"),
  },
  {
    name: "@shoppe/app-footer",
    package: "@shoppe/app-footer",
    activeWhen: (location) => !location.pathname.startsWith("/blank"),
  },
  {
    name: "@shoppe/app-account",
    package: "@shoppe/app-account",
    activeWhen: ["/account"],
  },
];

apps.forEach((app) => {
  registerApplication({
    name: app.package,
    app: () => System.import(app.package),
    activeWhen: app.activeWhen,
  });
});

start({
  urlRerouteOnly: true,
});

import Dashboard from "../view/Dashboard.js";
import Editor from "../view/Editor.js";
import Settings from "../view/Settings.js";
const navigateTo = (href) => {
  // не перезагружает страницу pushState
  window.history.pushState(null, null, href);
  // window.location = href
  route();
};

const route = async () => {
  const routes = [
    {
      path: "/",
      view: Dashboard,
    },
    {
      path: "/editor",
      view: Editor
    },
    {
      path: "/settings",
      view: Settings
    },
  ];

  const potentialMathces = routes.map((item) => {
    return {
      route: item,
      isMatch: window.location.pathname === item.path,
    };
  });

  let match = potentialMathces.find((item) => item.isMatch);

  if (!match) {
    match = { route: routes[0], isMatch: true };
  }

  const view = new match.route.view;

  document.querySelector('#app').innerHTML = await view.getHtml()
};

// событие нажатие на стрелки назад вперед

// Событие popstate вызывается, когда изменяется активная
// запись истории. Если
// изменение записи истории было вызвано методом history.pushState()
window.addEventListener("popstate", route);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  route();
});

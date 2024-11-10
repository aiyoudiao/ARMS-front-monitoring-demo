/* eslint-disable */
/* prettier-ignore */
// Generated by elegant-router
// Read more: https://github.com/mufeng889/elegant-router
// Vue auto route: https://github.com/soybeanjs/elegant-router


import type { IndexRouteObject, LazyRouteFunction,RouteObject } from "react-router-dom";
import type { FunctionComponent } from 'react';
import type { ElegantConstRoute } from '@ohh-889/react-auto-route';
import type { RouteKey, RouteMap, RoutePath } from '@elegant-router/types';
import { redirect as redirectTo } from 'react-router-dom';
import ErrorBoundary from "../../../ErrorBoundary.tsx"

type CustomRouteObject = Omit<RouteObject, 'Component' | 'index'> & {
  Component?: React.ComponentType<any> | null;
};

/**
 * transform elegant const routes to react routes
 *
 * @param routes elegant const routes
 * @param layouts layout components
 * @param views view components
 */
export function transformElegantRoutesToReactRoutes(
  routes: ElegantConstRoute[],
  layouts: Record<string, LazyRouteFunction<CustomRouteObject>>,
  views: Record<string, LazyRouteFunction<CustomRouteObject>>
) {
  return routes.flatMap(route => transformElegantRouteToReactRoute(route, layouts, views));
}

/**
 * transform elegant route to react route
 *
 * @param route elegant const route
 * @param layouts layout components
 * @param views view components
 */
export function transformElegantRouteToReactRoute(
  route: ElegantConstRoute,
  layouts: Record<string, LazyRouteFunction<CustomRouteObject>>,
  views: Record<string, LazyRouteFunction<CustomRouteObject>>
): RouteObject {
  const LAYOUT_PREFIX = 'layout.';
  const VIEW_PREFIX = 'view.';
  const ROUTE_DEGREE_SPLITTER = '_';
  const FIRST_LEVEL_ROUTE_COMPONENT_SPLIT = '$';

  function isLayout(component: string) {
    return component.startsWith(LAYOUT_PREFIX);
  }

  function getLayoutName(component: string) {
    const layout = component.replace(LAYOUT_PREFIX, '');

    if (!layouts[layout]) {
      throw new Error(`Layout component "${layout}" not found`);
    }

    return layout;
  }

  function isView(component: string) {
    return component.startsWith(VIEW_PREFIX);
  }

  function getViewName(component: string) {
    const view = component.replace(VIEW_PREFIX, '');

    if (!views[view]) {
      throw new Error(`View component "${view}" not found`);
    }

    return view;
  }

  function isFirstLevelRoute(item: ElegantConstRoute) {
    return !item.name.includes(ROUTE_DEGREE_SPLITTER);
  }

  function isSingleLevelRoute(item: ElegantConstRoute) {
    return isFirstLevelRoute(item) && !item.children?.length;
  }

  function getSingleLevelRouteComponent(component: string) {
    const [layout, view] = component.split(FIRST_LEVEL_ROUTE_COMPONENT_SPLIT);

    return {
      layout: layout ? getLayoutName(layout) : undefined,
      view: getViewName(view)
    };
  }

  const { name, props, path, meta, component, children, redirect, layout, ...rest } = route;

  const reactRoute = {
    id: name,
    path,
    handle: {
      ...meta
    },
    children: [],
    ErrorBoundary
  } as RouteObject;

  try {
    if (component) {
      if (isSingleLevelRoute(route)) {
        const { layout, view } = getSingleLevelRouteComponent(component);

        if (layout) {
          const singleLevelRoute: RouteObject = {
            path,
            lazy: layouts[layout],
            ErrorBoundary,
            children: [
              {
                id: name,
                index: true,
                lazy: views[view],
                handle: {
                  ...meta
                },
                ...rest
              } as IndexRouteObject
            ]
          };

          return singleLevelRoute;
        }

        return {
          path,
          lazy: views[view],
          id: name,
          ...rest
        } as RouteObject;
      }

      if (isLayout(component)) {
        if (layout) {
          reactRoute.lazy = views[name];
        } else {
          const layoutName = getLayoutName(component);
          reactRoute.lazy = layouts[layoutName];
        }
      }

      if (isView(component)) {
        const viewName = getViewName(component);
        if (props) {
          reactRoute.lazy = async () => {
            const data = (await views[viewName]()).Component as FunctionComponent;
            return {
              Component: () => data(props),
              ErrorBoundary: null
            };
          };
        } else {
          reactRoute.lazy = views[viewName];
        }
      }
    } else if (!layout && !redirect) {
      return Object.assign(reactRoute, rest);
     }
  } catch (error: any) {
     console.error(`Error transforming route "${route.name}": ${error.toString()}`);
    return {};
  }

  if (children?.length) {
    reactRoute.children = children.flatMap(child => transformElegantRouteToReactRoute(child, layouts, views));
    const defaultRedirectPath = redirect || getRedirectPath(path as string, children[0].path as string);

    reactRoute.children.unshift({
      index: true,
      loader: () => redirectTo(defaultRedirectPath),
      ...rest
    });
  } else if (redirect) {
    reactRoute.loader = () => redirectTo(redirect);
  }

  if (layout) {
    return {
      lazy: layouts[layout],
      children: [reactRoute],
      ErrorBoundary
    } as RouteObject;
  }

  return reactRoute;
}

/**
 * map of route name and route path
 */
const routeMap: RouteMap = {
  "root": "/",
  "not-found": "*",
  "exception": "/exception",
  "exception_403": "403",
  "exception_404": "404",
  "exception_500": "500",
  "document": "/document",
  "document_project": "project",
  "document_project-link": "project-link",
  "document_react": "react",
  "document_vite": "vite",
  "document_unocss": "unocss",
  "document_procomponents": "procomponents",
  "document_antd": "antd",
  "logout": "/logout",
  "403": "/403",
  "404": "/404",
  "500": "/500",
  "about": "/about",
  "function": "/function",
  "function_hide-child": "hide-child",
  "function_hide-child_one": "one",
  "function_hide-child_three": "three",
  "function_hide-child_two": "two",
  "function_multi-tab": "multi-tab",
  "function_request": "request",
  "function_super-page": "super-page",
  "function_tab": "tab",
  "function_toggle-auth": "toggle-auth",
  "home": "/home",
  "iframe-page": "/iframe-page/:url",
  "login": "/login",
  "login_code-login": "code-login",
  "login_pwd-login": "pwd-login",
  "login_register": "register",
  "login_reset-pwd": "reset-pwd",
  "manage": "/manage",
  "manage_menu": "menu",
  "manage_role": "role",
  "manage_user": "user",
  "manage_user-detail": "user-detail/:id",
  "multi-menu": "/multi-menu",
  "multi-menu_first": "first",
  "multi-menu_first_child": "child",
  "multi-menu_second": "second",
  "multi-menu_second_child": "child",
  "multi-menu_second_child_home": "home",
  "user-center": "/user-center"
};

/**
 * get route path by route name
 * @param name route name
 */
export function getRoutePath<T extends RouteKey>(name: T) {
  return routeMap[name];
}

/**
 * get route name by route path
 * @param path route path
 */
export function getRouteName(path: RoutePath) {
  const routeEntries = Object.entries(routeMap) as [RouteKey, RoutePath][];

  const routeName: RouteKey | null = routeEntries.find(([, routePath]) => routePath === path)?.[0] || null;

  return routeName;
}

/**
 * get route redirect path
 * @param path route path
 */
function getRedirectPath(path: string, childrenPath: string) {
   if(path.startsWith('/')){
     return path +'/' + childrenPath;
   }
     return   childrenPath
}
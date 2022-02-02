import { asyncRoute, route } from "@/router";
// 传入角色名称和路由对象判断能否加入
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role));
    // 如果不加meta.roles属性就是谁都能看
  } else {
    return true;
  }
}
// 过滤函数
export function filterAsyncRoutes(routes, roles) {
  const res = [];

  routes.forEach(route => {
    const tmp = { ...route };
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles);
      }
      res.push(tmp);
    }
  });

  return res;
}

const state = {
  routes: [], // 完整路由表
  addRoutes: [] // 用户可访问路由表
};

const mutations = {
  SET_ROUTES: (state, routes) => {
      // addRoutes是用户可以访问的权限页面
    state.addRoutes=routes;
    // routes是完整的路由表
    state.routes = route.concat(routes);
  }
};

const actions = {
  // 动态路由生成：在得到用户角色后会第一时间调用
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes;
      //   用户是管理员则拥有完整访问权限
      if (roles.includes("admin")) {
        accessedRoutes = asyncRoute || [];
      } else {
        //   否则需要根据角色做过滤处理
        accessedRoutes = filterAsyncRoutes(asyncRoute, roles);
      }
      commit("SET_ROUTES", accessedRoutes);
      resolve(accessedRoutes);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
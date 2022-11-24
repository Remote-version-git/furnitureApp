import Vue from 'vue'
import apis from '@/api'

class AuthLogic {
  static instance
  static getInstance(store, router, env) {
    if (!AuthLogic.instance) {
      AuthLogic.instance = new AuthLogic()
      AuthLogic.instance.store = store
      AuthLogic.instance.router = router
      AuthLogic.instance.env = env
    }
    return AuthLogic.instance
  }

  login(type, params, routeContext) {
    let resultPromise
    if (type === 'token') {
      resultPromise = this.loginWithSingleAppToken(params.token, params.type, params)
    } else if (type === 'account' || type === 'phone') {
      resultPromise = this.loginWithSingleAppAccount(
        params.account,
        params.password,
        params.type,
        params
      )
    }

    if (resultPromise) {
      let promise = new Promise((resolve, reject) => {
        resultPromise
          .asyncThen(
            (resp) => {
              // 1. 设置Token
              this.store.commit('authModule/SET_TOKEN', resp.data.token)

              // 2. 设置用户信息
              this.store.commit('authModule/SET_USER_INFO', {
                // 保证多Tab页用户信息的一致
                ...resp.data.user,
                tenant: resp.data.userDefaultTenant,
                department: resp.data.userDepartment
              })

              // 3. 设置租户信息
              this.store.commit(
                'tenantModule/SET_DAPTENAT_VERSION',
                resp.data.userDefaultTenant &&
                  resp.data.userDefaultTenant.tenantBasicInfo &&
                  resp.data.userDefaultTenant.tenantBasicInfo.limitId
              )

              const userDefaultTenant = resp.data.userDefaultTenant
              userDefaultTenant.userDepartment = resp.data.xdapDepartments
              this.store.commit('tenantModule/SET_CURRENT_ORG', userDefaultTenant)

              // TODO: 路由暂不处理
              // 4. resolve 指定的路由信息，由next({})，或者路由主动跳转, from, to, next
              // routeContext.next()
              debugger
              resolve(resp)
            },
            (err) => {
              debugger
              reject(err)
            }
          )
          .asyncErrorCatch((err) => {
            debugger
            if (promise && promise.$currentErrorCatchFunction) {
              promise.$currentErrorCatchFunction(err)
            }
          })
      })
      return promise
    }
  }

  /**
   * 这里需要解构参数
   * @param {*} params
   * @param {*} type
   * @returns
   */
  loginWithSingleAppToken(token, type, context) {
    const request = {
      ...apis.ACCOUNT.USER_APP_LOGIN,
      params: {
        ...context,
        token,
        type
      }
    }
    return Vue.prototype.$request(request)
  }

  loginWithSingleAppAccount(account, password, type, context) {
    const request = {
      ...apis.ACCOUNT.USER_APP_LOGIN,
      params: {
        ...context,
        account,
        password,
        type
      }
    }
    return Vue.prototype.$request(request)
  }
}

export default AuthLogic

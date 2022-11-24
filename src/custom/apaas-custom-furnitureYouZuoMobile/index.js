import '@/icons/index'
import ApaasCustomFurnitureYouZuoMobile from './custom-page/page.vue'
import { customFormComponentList } from './custom-component/form-component'
import { widgetConfigList } from './custom-component/form-config'

const install = function(Vue, opts) {
  window.Vue = Vue
  setLink('https://unpkg.com/vant@2.12/lib/index.css')
  setScript('https://unpkg.com/vant@2.12.53/lib/vant.min.js', Vue)
  // 安装FurnitureYouZuoMobile模块, 此处的和apaas.json定义的路由，必须一致
  Vue.component('apaas-custom-furnitureYouZuoMobile', ApaasCustomFurnitureYouZuoMobile)
  // 安装表单部件
  // 注册自开发表单组件
  if (customFormComponentList && Array.isArray(customFormComponentList)) {
    customFormComponentList.forEach((comp) => {
      Vue.component(comp.name, comp)
    })
  }
  // 表单引擎注册自开发组件配置
  if (
    (!opts || !opts.onlyInstallFormWidget) &&
    widgetConfigList &&
    Array.isArray(widgetConfigList)
  ) {
    widgetConfigList.forEach((widgetConfig) => {
      const compConfig = {
        widgetConfig
      }
      Vue.FormEngine && Vue.FormEngine.registerCustomComponentConfig(compConfig)
    })
  }

  window.lowcodeCustomConfig = {
    Vue,
    customFormComponentList
  }
  console.log('优座家具【移动端自开发组件】加载成功')
}

const FurnitureYouZuoMobileCustomPlugin = {
  install: install
}

function setScript(url, Vue) {
  const htmlElement = document.documentElement
  const fragment = document.createDocumentFragment()
  const script = document.createElement('script')
  script.setAttribute('type', 'text/javascript')
  script.setAttribute('src', url)
  // script.setAttribute(
  //   'integrity',
  //   'sha512-DpKb/DUe/QfgY0q5bhxcSl/YCGQaP2wo9AlwzAP5VQHTHNk2KIJyTh9gOqd0u0U1TqovbBOIhpbk87iXCW68jg=='
  // )
  // script.setAttribute('crossorigin', 'anonymous')
  // script.setAttribute('referrerpolicy', 'no-referrer')
  // ="" ="" =""
  // script.setAttribute('async', false)
  script.onload = function() {
    Vue.use(window.vant)
  }
  fragment.append(script)
  htmlElement.append(fragment)
}
function setLink(url) {
  const htmlElement = document.documentElement
  const fragment = document.createDocumentFragment()
  const link = document.createElement('link')
  link.setAttribute('rel', 'stylesheet')
  link.setAttribute('href', url)
  fragment.append(link)
  htmlElement.append(fragment)
}

export default FurnitureYouZuoMobileCustomPlugin

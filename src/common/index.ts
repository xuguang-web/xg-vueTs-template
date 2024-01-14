import Components from "./components"
export default {
  install: (app: any) => {
    Reflect.ownKeys(Components).forEach((key) => {
      app.component(key, Components[key])
    })
  }
}

const modules: any = import.meta.glob("./**/*.vue", { import: "default", eager: true })

const getComponents = () => {
  const components: any = {}
  for (const path in modules) {
    const module = modules[path]
    const { name, __name, ...component } = module
    components[name || __name] = component
  }
  return components
}

const Components = getComponents()
export default Components

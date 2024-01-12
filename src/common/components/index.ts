const modules:any = import.meta.glob('./**/*.vue', { import: 'default', eager: true });


console.log('%c [查看引入的组件 ]-4', 'font-size:13px; background:pink; color:#bf2c9f;', modules)

const getComponents = () => {
    const components:any = {};
    for (const path in modules) {
        const module = modules[path];
        const { name, __name, ...component } = module;
        components[name || __name] = component;
    }

    console.log('%c [  ]-14', 'font-size:13px; background:pink; color:#bf2c9f;', components)
    return components;
};

const Components = getComponents();
export default Components;

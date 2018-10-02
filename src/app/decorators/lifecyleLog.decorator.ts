export function LifecycleLog(constructor: Function) {
  const HOOKS = [
    'ngOnInit',
    'ngDoCheck',
    'ngOnDestory'
  ];

  const component = constructor.name;

  HOOKS.forEach((hook) => {

    const org = constructor.prototype[hook];

    constructor.prototype[hook] = function(...args) {
        console.log(`${component}-${hook} %o`, args);
        org && org.apply(this, args);
    };

  });

}

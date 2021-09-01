declare module "hotdrink" {
    interface HotDrink {
        ConstraintSystem(): System;
        component(stringsArray: TemplateStringsArray): Component;
    }

    interface System {
        addComponent(component: Component);
        update(): void;
    }

    interface Component {
        vs: any;
    }

    interface HDValue<T> {
        value: any;
        subscribe({next: any});
        set(value: T)
    }

    export var hd: HotDrink;
}

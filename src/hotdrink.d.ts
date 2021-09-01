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

    export var hd: HotDrink;
}

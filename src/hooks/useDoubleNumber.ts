import { hd } from "../hotdrink/hotdrink.js";
import {useHDBinding} from "./useHDBinding";

let system = new hd.ConstraintSystem();

let comp = hd.component`
    var a = 0, b;
    
    constraint {
      (a -> b) => a*2;
    }
  `

system.addComponent(comp)
system.update();

export function useDoubleNumber(): [number, number, (newValue: number) => void] {
    const [a, setA] = useHDBinding<number>(comp.vs.a.value);
    const [b,] = useHDBinding<number>(comp.vs.b.value);

    return [a, b, setA]
}

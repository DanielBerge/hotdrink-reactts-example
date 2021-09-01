import {useEffect, useState} from 'react';
import {HDValue} from "hotdrink";

export function useHDBinding<T>(hdValue: HDValue<T>): [T, (newValue: T) => void] {
    const [value, setValue] = useState<T>(hdValue.value);

    useEffect(() => {
        hdValue.subscribe({
            next: (val: any) => {
                if (val.hasOwnProperty('value')) {
                    setValue(val.value)
                }
            }
        });
    }, [hdValue]);

    return [value, (newValue: T) => hdValue.set(newValue)];
}

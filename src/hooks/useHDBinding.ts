import {useEffect, useState} from 'react';

export function useHDBinding(hdValue: any) {
    const [value, setValue] = useState(hdValue.value);

    useEffect(() => {
        hdValue.subscribe({
            next: (val: any) => {
                if (val.hasOwnProperty('value')) {
                    setValue(val.value)
                }
            }
        });
    });

    return [value, (newValue: any) => hdValue.set(newValue)];
}

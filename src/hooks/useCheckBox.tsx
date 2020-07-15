import { useCallback, useState } from 'react';

export default function useCheckBox(defaultList: Array<any>) {
    const [list, setList] = useState(defaultList)

    const onChange = useCallback((e: any, value: any) => {
        setList(list.map((item: any) => ({ ...item, checked: item.id === value.id ? e.target.checked : item.checked })))
    }, [list, setList])

    return {
        list,
        onChange
    };
}
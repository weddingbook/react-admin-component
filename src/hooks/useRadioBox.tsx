import { useCallback, useState } from 'react';

export default function useRadioBox(defaultList: Array<any>) {
    const [list, setList] = useState(defaultList)

    const selectedItem = list.filter(value => value.checked)[0]
    const onChangeDefault = (list: any[]) => {
        setList(list);
    }

    const onChange = useCallback((value: any) => {
        setList(list.map((item: any) => ({...item, checked: item.id === value.id ? true : false})))
    }, [list, setList])

    return {
        selectedItem,
        list,
        onChange,
        onChangeDefault
    };
}
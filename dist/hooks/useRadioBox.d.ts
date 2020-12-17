export default function useRadioBox(defaultList: Array<any>): {
    selectedItem: any;
    list: any[];
    onChange: (value: any) => void;
    onChangeDefault: (list: any[]) => void;
};

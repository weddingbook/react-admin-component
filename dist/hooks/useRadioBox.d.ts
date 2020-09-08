export default function useRadioBox(defaultList: Array<any>): {
    list: any[];
    onChange: (value: any) => void;
    onChangeDefault: (list: any[]) => void;
};

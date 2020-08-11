import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs'
import { PopupArea } from '../molecules/Popup';
import ImageSlider from '../molecules/ImageSlider';
import Modal from '../molecules/Modal';
import Button from '../atoms/Button';
import ModalItem from '../molecules/ModalItem';
import Input from '../atoms/Input';
import CombineInput from '../molecules/CombineInput';
import { DatePicker, TimePicker } from 'antd';


export default {
    title: '이미지 슬라이더',
    component: PopupArea,
    decorators: [withKnobs]
};
const srcList = [
    'https://s3.ap-southeast-1.amazonaws.com/vn-wbook-dev-resize/create/202008/20200807/84bb676d-c87e-45c6-a2fd-8bf824e0ea0f.jpg',
    'https://t1.daumcdn.net/cfile/tistory/992DB34E5AE4FC0131',
    'https://img.danawa.com/prod_img/500000/215/509/img/6509215_1.jpg?shrink=500:500&_v=20181010103119',
    'https://image.bugsm.co.kr/album/images/500/203001/20300127.jpg',
    'https://t1.daumcdn.net/cfile/tistory/992DB34E5AE4FC0131',
    'https://t1.daumcdn.net/cfile/tistory/992DB34E5AE4FC0131',
    
]

export const ImageSliderStory = () => {
    return (
        <>
            <ImageSlider imageUrlList={srcList} />
        </>
    )
}

export const ImageSliderInModalStory = () => {
    return (
        <>
            <Modal size={
                select('사이즈', {
                    small: 'small',
                    medium: 'medium',
                    large: 'large'
                }, 'medium')
            } title={`Create Message`}
                cancelButtonComponent={<Button size='small' type='line'>Close</Button>}
                actionButtonComponent={<Button size='small'>{'Create Message Send'}</Button>}>
                <ModalItem>
                    <label>Title</label>
                    <Input placeholder='Type Title...' />
                </ModalItem>
                <ModalItem>
                    <label>Message Title</label>
                    <Input placeholder='Type Message Title...' />
                </ModalItem>
                <ModalItem>
                    <label>Message Content</label>
                    <textarea placeholder='Type Message Content...' />
                </ModalItem>
                <ModalItem>
                    <label>Link</label>
                    <Input placeholder='Type Link...' />
                </ModalItem>
                <CombineInput title='Send Time'>
                    <DatePicker placeholder='0000-00-00' />
                    <TimePicker placeholder='23:59' use12Hours format="h:mm a" minuteStep={5} />
                </CombineInput>
                <ModalItem style={{ marginTop: '24px' }}>
                    <label>Image Upload</label>
                    <Button size='xs' style={{ margin: '4px 0 0 8px' }}>Image Uploader</Button>
                </ModalItem>
                <ModalItem>
                    <label></label>
                    <ImageSlider imageUrlList={srcList} />
                </ModalItem>
            </Modal>
        </>
    )
}

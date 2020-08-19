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
import SectionContainer from '../organisms/SectionContainer';
import Section from '../molecules/Section';
import { DefinitionTag, DefinitionTagContainer } from '..';


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
                    <TimePicker placeholder='23:59' use12Hours format='h:mm a' minuteStep={5} />
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

export const ImageSliderInSectionStory = () => {
    const productPhotoList = [
        {
            'url': 'https://d31gm4xoou1wz2.cloudfront.net/album/202007/20200728/c6877538-680e-48e7-bc0a-162ce2c98f2f.jpg',
            'title': '2020 더케네스블랑 FW',
            'content': null,
            'albumId': 438
        },
        {
            'url': 'https://d31gm4xoou1wz2.cloudfront.net/album/202003/20200331/497fd516-5de6-4e9a-a6a2-a4a25b6cec3c.JPG',
            'title': '2020 더케네스블랑 SS',
            'content': null,
            'albumId': 353
        },
        {
            'url': 'https://d31gm4xoou1wz2.cloudfront.net/album/201909/20190911/89466864-7661-4edc-be39-26689e420cd9.jpg',
            'title': '2019 더케네스블랑 FW화보',
            'content': null,
            'albumId': 236
        },
        {
            'url': 'https://d31gm4xoou1wz2.cloudfront.net/album/201808/20180806/9b6c59ff-09b7-4e81-8efe-044a7ffe63cc.jpg',
            'title': '2018 더케네스블랑 대표화보',
            'content': null,
            'albumId': 41
        },
        {
            'url': 'https://dnna01d8m6k3w.cloudfront.net/profile/202003/20200310/19834a6b-b268-4af1-b55d-194876edf1fc.jpg',
            'title': null,
            'content': null,
            'albumId': null
        },
        {
            'url': 'https://dnna01d8m6k3w.cloudfront.net/gallery/57/201904/20190407/1c338e25-8fb4-4445-b1aa-35b7110dd90a.jpg',
            'title': null,
            'content': null,
            'albumId': null
        },
        {
            'url': 'https://dnna01d8m6k3w.cloudfront.net/gallery/57/201904/20190407/15ccd7a8-f220-4988-9b72-53e786074b03.jpg',
            'title': null,
            'content': null,
            'albumId': null
        },
        {
            'url': 'https://dnna01d8m6k3w.cloudfront.net/gallery/57/201904/20190407/b7f5ee9c-0424-4ec3-97e5-ca91b726b831.jpg',
            'title': null,
            'content': null,
            'albumId': null
        },
        {
            'url': 'https://dnna01d8m6k3w.cloudfront.net/gallery/57/201904/20190407/de4610e6-b871-4720-82ae-496061998163.jpg',
            'title': null,
            'content': null,
            'albumId': null
        },
        {
            'url': 'https://dnna01d8m6k3w.cloudfront.net/gallery/57/201904/20190407/07e97b5c-997b-4cdc-8613-0d3cdc6cdbc8.jpg',
            'title': null,
            'content': null,
            'albumId': null
        },
        {
            'url': 'https://dnna01d8m6k3w.cloudfront.net/gallery/57/201904/20190407/00f7a8a8-000a-4af4-bcca-d977a006326c.jpg',
            'title': null,
            'content': null,
            'albumId': null
        },
        {
            'url': 'https://dnna01d8m6k3w.cloudfront.net/gallery/57/201904/20190407/f649896d-c298-442b-b402-82ce1bbcda89.jpg',
            'title': null,
            'content': null,
            'albumId': null
        },
        {
            'url': 'https://dnna01d8m6k3w.cloudfront.net/gallery/57/201904/20190407/bfdcbf7f-ed70-44fd-87c0-70cb10df2d0e.jpg',
            'title': null,
            'content': null,
            'albumId': null
        },
        {
            'url': 'https://dnna01d8m6k3w.cloudfront.net/gallery/57/201904/20190407/5e4e29bc-cdeb-4b25-a1ea-fa012769b471.jpg',
            'title': null,
            'content': null,
            'albumId': null
        },
        {
            'url': 'https://dnna01d8m6k3w.cloudfront.net/gallery/57/201904/20190407/aaecd936-3f84-4ac8-ac07-709934e0afbe.jpg',
            'title': null,
            'content': null,
            'albumId': null
        }
    ]

    return (
        <>
            <SectionContainer>
                <Section title='Default Information'>
                    <DefinitionTagContainer>
                        <DefinitionTag
                            title='Classification code'
                        >안녕</DefinitionTag>
                        <DefinitionTag
                            title='Product name'
                        >상품이름</DefinitionTag>
                        <DefinitionTag
                            title='Created Date'
                        >2020-02-02</DefinitionTag>
                    </DefinitionTagContainer>
                    <DefinitionTagContainer>
                        <DefinitionTag
                            title='Product explanation'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum velit et tempus rhoncus. Nullam accumsan sapien lacus, nec vehicula turpis ullamcorper et. Sed mattis nisi at dapibus aliquam. Donec nunc nulla, rutrum eu venenatis nec, sodales sit amet augue. Nam mollis purus vel magna rutrum mattis. Suspendisse ullamcorper egestas nunc ut blandit. Etiam laoreet non massa quis sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec augue eros, mattis quis dapibus non, bibendum et nunc. Proin libero tortor, aliquet sit amet mollis sodales, iaculis nec diam. Donec eu pellentesque dolor. Nam aliquet, nunc id condimentum accumsan, lectus lorem ullamcorper eros, tristique blandit nunc magna vitae eros. Nam non ornare diam, non cursus orci. Nunc mollis pretium est.

                            Cras dictum tortor vel porttitor pulvinar. Sed tortor ex, accumsan et lorem vitae, vulputate vulputate sapien. Duis aliquet ultrices urna nec laoreet. Nam ullamcorper, odio vitae aliquam euismod, nibh quam congue tortor, accumsan dictum quam erat a arcu. Curabitur commodo non diam eget efficitur. In non mauris finibus, auctor elit in, egestas est. Aenean vel blandit mauris, in volutpat nisl. Quisque dapibus augue eget fringilla ultricies. In interdum augue volutpat odio mollis, a pretium purus lacinia. Cras vitae mattis mauris. Cras ac nunc ac turpis tempus finibus vitae ultrices leo. Donec at mollis justo. Sed pulvinar, arcu eu cursus aliquam, purus elit sodales dolor, eu sollicitudin arcu enim ac sem.

                        </DefinitionTag>
                    </DefinitionTagContainer>
                    <DefinitionTagContainer>
                        <DefinitionTag
                            title='공급'
                        >800000</DefinitionTag>
                        <DefinitionTag
                            title='판매'
                        >800000</DefinitionTag>
                        <DefinitionTag
                            title='대여'
                        >800000</DefinitionTag>
                    </DefinitionTagContainer>
                </Section>
            </SectionContainer>
            <Section title='Photo Catalog'>
                {productPhotoList.length ? <ImageSlider imageWidth={300} imageHeight={400} imageUrlList={productPhotoList.map(value => value.url)} /> : <></>}
            </Section>
        </>
    )
}
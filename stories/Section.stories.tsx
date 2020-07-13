import React from 'react';
import DefinitionTag from '../components/atoms/DefinitionTag'
import DefinitionTagContainer from '../components/molecules/DefinitionTagContainer';
import Section from '../components/molecules/Section';
import { withKnobs, text } from '@storybook/addon-knobs'
import Button from '../components/atoms/Button';

export default {
    title: '섹션',
    component: DefinitionTag,
    decorators: [withKnobs]
};

export const SectionStory = () => <Section
    title={text('제목', '기본정보')}
    subTitle={text('부제목', '기본정보')}
    buttonComponent={<Button type='line' size='small'>수정</Button>}
    >
    <DefinitionTagContainer>
        <DefinitionTag
            title='휴대폰정보'
        >아이폰, 앱버전 : 4.20.0, OS버전 : 13.2.2 <br />
        3783c640-d39f-11e8-b933-0aea5320e7f2</DefinitionTag>
    </DefinitionTagContainer>
    <DefinitionTagContainer>
        <DefinitionTag
            title='닉네임'
        >띄지않고최대여덟</DefinitionTag>
        <DefinitionTag
            title='등급'
        >명예회원</DefinitionTag>
    </DefinitionTagContainer>
    <DefinitionTagContainer>
        <DefinitionTag
            title='상태'
        >활성</DefinitionTag>
        <DefinitionTag
            title='글/후기'
        >0 / 0</DefinitionTag>
        <DefinitionTag
            title='경고/신고'
        >0 / 0</DefinitionTag>
    </DefinitionTagContainer>
</Section>

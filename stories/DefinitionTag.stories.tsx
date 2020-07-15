import React from 'react';
import { DefinitionTagContainer, DefinitionTag } from '../index';

import { withKnobs, select } from '@storybook/addon-knobs'

export default {
    title: 'DL DT DD',
    component: DefinitionTag,
    decorators: [withKnobs]
};

export const DefinitionTagStory = () => <>
    <DefinitionTagContainer>
        <DefinitionTag
            title='휴대폰정보'
            direction={select('row, column', {
                row: 'row',
                column: 'column'
            }, 'column')}
        >아이폰, 앱버전 : 4.20.0, OS버전 : 13.2.2 <br />
        3783c640-d39f-11e8-b933-0aea5320e7f2</DefinitionTag>
        <DefinitionTag
            title='휴대폰정보입니다하하하하하하하하하하하하하'
            direction={select('row, column', {
                row: 'row',
                column: 'column'
            }, 'column')}
        >아이폰, 앱버전 : 4.20.0, OS버전 : 13.2.2 <br />
        3783c640-d39f-11e8-b933-0aea5320e7f23783c640-d39f-11e8-b933-0aea5320e7f23783c640-d39f-11e8-b933-0aea5320e7f23783c640-d39f-11e8-b933-0aea5320e7f23783c640-d39f-11e8-b933-0aea5320e7f23783c640-d39f-11e8-b933-0aea5320e7f23783c640-d39f-11e8-b933-0aea5320e7f23783c640-d39f-11e8-b933-0aea5320e7f2</DefinitionTag>
    </DefinitionTagContainer>
    <DefinitionTagContainer>
        <DefinitionTag
            title='휴대폰정보입니다하하하하하하하하하하하하하'
            direction={select('row, column', {
                row: 'row',
                column: 'column'
            }, 'column')}
        >아이폰, 앱버전 : 4.20.0, OS버전 : 13.2.2 <br />
        3783c640-d39f-11e8-b933-0aea5320e7f23783c640-d39f-11e8-b933-0aea5320e7f23783c640-d39f-11e8-b933-0aea5320e7f23783c640-d39f-11e8-b933-0aea5320e7f23783c640-d39f-11e8-b933-0aea5320e7f23783c640-d39f-11e8-b933-0aea5320e7f23783c640-d39f-11e8-b933-0aea5320e7f23783c640-d39f-11e8-b933-0aea5320e7f2</DefinitionTag>
    </DefinitionTagContainer>
    <DefinitionTagContainer>
        <DefinitionTag
            title='닉네임'
            direction={select('row, column', {
                row: 'row',
                column: 'column'
            }, 'column')}
        >띄지않고최대여덟</DefinitionTag>
        <DefinitionTag
            title='등급'
            direction={select('row, column', {
                row: 'row',
                column: 'column'
            }, 'column')}
        >명예회원</DefinitionTag>
    </DefinitionTagContainer>
    <DefinitionTagContainer>
        <DefinitionTag
            title='상태'
            direction={select('row, column', {
                row: 'row',
                column: 'column'
            }, 'column')}
        >활성</DefinitionTag>
        <DefinitionTag
            title='글/후기'
            direction={select('row, column', {
                row: 'row',
                column: 'column'
            }, 'column')}
        >0 / 0</DefinitionTag>
        <DefinitionTag
            title='경고/신고'
            direction={select('row, column', {
                row: 'row',
                column: 'column'
            }, 'column')}
        >0 / 0</DefinitionTag>
    </DefinitionTagContainer>
</>

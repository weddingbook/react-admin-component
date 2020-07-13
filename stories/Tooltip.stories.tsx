import React from 'react';
import { withKnobs } from '@storybook/addon-knobs'
import Tooltip from '../components/atoms/Tooltip';
import Section from '../components/molecules/Section';
import DefinitionTagContainer from '../components/molecules/DefinitionTagContainer';
import DefinitionTag from '../components/atoms/DefinitionTag';
import Button from '../components/atoms/Button';

export default {
    title: '툴팁',
    component: Tooltip,
    decorators: [withKnobs]
};

export const TooltipStory = () =>
    <>
        <span data-tip data-for='happyFace1'>마우스를 위로 가져다보세요 (상품정보)</span>
        <span data-tip data-for='happyFace2'>마우스를 위로 가져다보세요 (업체정보)</span>
        <Button dataTip={true} dataFor='happyFace3'>안녕하세요</Button>
        <Tooltip id='happyFace3' buttonType>
            어쩌구의 버튼
        </Tooltip>
        <Tooltip id='happyFace1'>
            <Section title='상품정보'>
                <DefinitionTagContainer>
                    <DefinitionTag title='업체명'>정경애웨딩모드 제이브라이드</DefinitionTag>
                </DefinitionTagContainer>
                <DefinitionTagContainer>
                    <DefinitionTag title='옵션'>리허설+본식</DefinitionTag>
                </DefinitionTagContainer>
                <DefinitionTagContainer>
                    <DefinitionTag title='구성'>
                        리허설 : 화이트 3벌 <br />
              본식 : 화이트 1벌
            </DefinitionTag>
                </DefinitionTagContainer>
            </Section>
        </Tooltip>
        <Tooltip id='happyFace2' >
            <Section title='업체정보' style={{ width: '400px' }}>
                <DefinitionTagContainer>
                    <DefinitionTag title='업체명'>정경애웨딩모드 제이브라이드</DefinitionTag>
                    <DefinitionTag title='대표'>-</DefinitionTag>
                </DefinitionTagContainer>
                <DefinitionTagContainer>
                    <DefinitionTag title='전화번호'>02-123-1234</DefinitionTag>
                    <DefinitionTag title='팩스번호'>-</DefinitionTag>
                </DefinitionTagContainer>
                <DefinitionTagContainer>
                    <DefinitionTag title='이메일'>-</DefinitionTag>
                </DefinitionTagContainer>
                <DefinitionTagContainer>
                    <DefinitionTag title='주소'>() 서울시 송파구 백제고분로 482 인성빌딩</DefinitionTag>
                </DefinitionTagContainer>
                <DefinitionTagContainer>
                    <DefinitionTag title='홈페이지주소'>http://www.gaeulstudio.com</DefinitionTag>
                </DefinitionTagContainer>
                <DefinitionTagContainer>
                    <DefinitionTag title='등록일'>2016-12-09</DefinitionTag>
                    <DefinitionTag title='노출상태'>노출됨</DefinitionTag>
                    <DefinitionTag title='활성화상태'>활성화됨</DefinitionTag>
                </DefinitionTagContainer>
            </Section>
        </Tooltip>
    </>

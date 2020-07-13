## 클라이언트 빌드
```
yarn build
```

## 패키지 사용 등록 
프로젝트 package.json 파일의 dependency 추가
```json
"dependencies": {
	"react-admin-component": "git+https://bitbucket.h2m.io/scm/in_house/react-admin-component.git"
}
```

컴포넌트 프로젝트를 수정하고 yarn 또는 npm i 로 업데이트 할 경우 업데이트가 안되는것 같다.  
https://bitbucket.h2m.io/projects/IN_HOUSE/repos/react-admin-component/commits 들어가서 commit id(?) head(?)를 dependencies 에 추가

```json
"dependencies": {
	"react-admin-component": "git+https://bitbucket.h2m.io/scm/in_house/react-admin-component.git#{commit}"
}
```
해당 방식으로 코드를 뒤로 돌릴 수 도 있음.

## css import
```tsx
import 'react-admin-component/dist/index.css';
```
전역(일반적으로 src/index.js)에서 css 로딩 해줘야함!!

## color assets
```scss
@import 'react-admin-component/assets/color.scss';
```
scss파일에서 어드민 공통 color assets 파일 불러올 수 있음!

## Components example
### Modal 기본 사용법
```tsx
import { ModalArea, createConfirm } from 'react-admin-component';

const PageComonent = () => {
	const handleClick = () => {
		createConfirm({
			wrap: 'test-modal', // ModalArea id와 매치
			content: `
				모달 메세지
			`.trim()
		});
	}
	return (
		<ModalArea id="test-area">
			<button onClick={() => handleClick()}>모달 생성</button>
		</ModalArea>
	);
}

const PageComonent2 = () => {
	const handleClick = () => {
		createConfirm({
			content: `
				모달 메세지2
			`.trim()
		})
	}
	return (
		<div>
			{/* ModalArea가 없으면 body밑에 div가 추가되어 해당 영역에 모달 append됨 */}
			<button onClick={() => handleClick()}>모달 생성</button>
		</div>
	);
}
```

### Modal options
|property|type|default|description|
|:-------|:----|:----|:---------|
|wrap|string|modal-wrap|wrap과 매치되는 ModalArea의 중앙에 모달이 생성됨|
|title|string||제목|
|content|string||내용|
|buttons|array|||
|childrenElement|ReactNode||추가 UI|
|closeOnClickOutside|boolean|true|바깥 영역 클릭시 모달 닫힘 여부|
|closeOnEsc|boolean|true|esc 키로 모달 닫힘 여부|
|onClickOutside|function||모달 바깥영역 클릭시 콜백|
|willUnmount|function||모달 unmount 라이프 사이클|
|afterClose|function||모달 닫힌 이후 콜백|


### button options
|property|type|descripton|
|:-------|:----|:---------|
|label|string|버튼 라벨|
|action|function|버튼 클릭 액션|

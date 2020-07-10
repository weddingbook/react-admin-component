## 클라이언트 빌드
```
yarn build
```

## 사용법 
프로젝트 package.json 파일의 dependency 추가
```
"dependencies": {
	"react-admin-component": "git+https://bitbucket.h2m.io/scm/in_house/react-admin-component.git"
}
```

컴포넌트 프로젝트를 수정하고 yarn 또는 npm i 로 업데이트 할 경우 업데이트가 안되는것 같다.  
https://bitbucket.h2m.io/projects/IN_HOUSE/repos/react-admin-component/commits 들어가서 commit id를 dependencies 에 추가

```
"dependencies": {
	"react-admin-component": "git+https://bitbucket.h2m.io/scm/in_house/react-admin-component.git#{commit}"
}
```
해당 방식으로 코드를 뒤로 돌릴 수 도 있음.

## Components

### Modal 기본 사용법
```tsx
import { ModalArea, createConfirm, removeConfirm } from 'react-admin-component';

const PageComonent = () => {
	const handleClick = () => {
		createConfirm({
			wrap: 'chat-modal',
			content: `
				모달 메세지
			`.trim()
		})
	}
	return (
		<ModalArea id="test-area">
			<button onClick={() => handleClick()}>모달 생성</button>
		</ModalArea>
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
|:-------|:----|:---------|
|property|type|descripton|
|label|string|버튼 라벨|
|action|function|버튼 클릭 액션|

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
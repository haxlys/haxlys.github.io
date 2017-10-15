const data = [
  {
    title: 'directive(지시어)',
    desc: 'DOM 요소들을 렌더하는데 도움을 주는 지시어',
    contents: [
      {
        title: 'v-text: v-html:',
        desc: 'DOM 요소의 컨텐츠를 변경한다.',
      },
      {
        title: 'v-bind:',
        desc: `DOM 요소의 속성을 변경한다.</br>
        약어로 : 를 사용한다.<br/>
        Boolean을 리터럴로 바인딩할 경우: :isNew="true"`,
      },
      {
        title: 'v-show: v-:if v-else v-else-if',
        desc: `Vue data 속성에 따라 렌더링 여부를 결정하는 기능</br>
        show와 if의 차이는 렌더링의 여부</br>
        show는 렌더링 하되 조건에 따라서 display:none을 갖는다.</br>
        자주 판정된다면 show를 사용해서 리플로우 리페인트를 피하는게 좋다.`,
      },
      {
        title: 'v-for:',
        desc: `반복 렌더링 기능 <br />
v-for="(value, index) in array" <br />
v-for="(value, key, index) in object" <br />
v-if 보다 v-for가 더 우선순위가 높아서 for 실행 후 if 판정이 실행된다.<br />
&lt;template v-for="">&lt;/template> 를 이용해서 직접 DOM 요소에 for를 적용하지 않고 사용할 수도 있다.<br />
&lt;template v-for="value in list" v-bind:key="value.primaryKey">&lt;/template>
Vue는 for로 렌더할 때 렌더되는 DOM 요소에 key 속성을 data의 키값으로 바인딩 시키는 것을 권장한다. for로 렌더된 DOM의 data가 변경될 경우 DOM을 조작하거나 다시 그리지 않고 data만 변경시키기 때문이다.
이는 속도면에서 유리하다.`,
      },
      {
        title: 'v-pre:',
        desc: `컴파일을 수행하지 않음`,
      },
      {
        title: 'v-once:',
        desc: `컴파일을 한번만 수행<br />
        자식 요소들도 영향을 받음`,
      },
      {
        title: 'v-cloak:',
        desc: `컴파일 되지 않은 템플릿을 나타나지 않도록 해줌<br />
        일시적으로 보이는 콧수염 표현식을 해결해줌`,
      },
    ]
  },
  { 
    title: 'Vue instance options',
    desc: 'Vue 인스턴스 옵션들',
    contents: [
      {
        title: 'data',
        desc: `프록시를 이용해서 처리<br/> vm.$data.name과 같이 접근 가능`,
      },
      {
        title: 'el',
        desc: `Vue 인스턴스에 연결할 HTML DOM요소를 지정<br/>
여러 요소를 지정할 수 없음<br/>
class로 여러개 지정할 수 없으며 첫번째 요소만 지정됨`,
      },
      {
        title: 'computed',
        desc: `계산된 속성으로 미리 선계산됨<br/>
계산되어졌다는 computed 과거형에 주목해야함.<br/>
함수의 실행이 아닌 이미 실행된 함수의 return 값에 접근하는 것과 같다.<br/>
의존하고 있는 속성값이 변경되면 다시 평가(실행)된다.<br/>
게터 세터 적용가능<br/>
<pre>data: {
  cnt: 0,
},
computed: {
  count: {
    get: function () {
      return this.cnt + "개";
    },
    set: function (cnt) {
      this.cnt = ++cnt;
    }
  }
}
</pre>`,
      },
      {
        title: 'methods',
        desc: `vue 인스턴스, 디렉티브 표현식, 콧수열 표현식 사용할 수 있다.<br/>
화살표 함수를 사용해서는 안된다.<br/>
화살표 함수에서 this는 Vue 인스턴스가 아닌 전역 객체를 가리키기 때문이다.<br/>
따라서 내부 데이터에 접근할 수 없다.`,
      },
      {
        title: 'watch',
        desc: `
        Vue data의 속성 이름을 함수의 watch 함수의 이름으로 등록하면 해당 data 값이 변경될 때마다 함수가 실행되어진다.
        함수는 변경된 값을 인자로 받는다.
        watch는 속성 하나에 대한 변경값을 감시한다면
        computed는 의존하는 모든 속성에 대한 변경값을 감시한다.
        watch는 값을 리턴하지 않아도 될 때, 즉 비동기 처리에 적합
        computed는 리턴된 값을 사용해야 할 경우, 즉 동기 처리에 적합`,
      },
    ]
  },
  {
    title: 'life cycle hook',
    desc: '라이프 사이클 중간 중간 실행할 수 있는 Hook',
    contents: [
      {
        title: 'beforeCreate',
        desc: 'Vue 인스턴스가 생성되고 데이터에 대한 관찰 기능 및 이벤트 감시자 설정 전에 호출',
      },
      {
        title: 'create',
        desc: 'Vue 인스턴스가 생선된 후 데이터에 대한 관찰 기능, 계산형 속성, 메서드, 감시자 설정이 완료된 후에 호출',
      },
      {
        title: 'beforeMount',
        desc: '마운트가 시작되기 전에 호출',
      },
      {
        title: 'mounted',
        desc: 'el에 vue 인스턴스의 데이터가 마운트된 후 호출',
      },
      {
        title: 'beforeUpdate',
        desc: '가상 DOM이 렌더링, 패치되기 전 데이터가 변경될 때 호출. 추가적인 상태 변경을 수행할 수 있으나 추가로 렌더링을 하지 않는다.',
      },
      {
        title: 'updated',
        desc: '데이터 변경으로 가상 DOM이 다시 렌더링 되고 패치된 후 호출. 이 훅이 호출되었을 때는 이미 컴포넌트의 DOM이 업데이트된 상태. 그래서 DOM이 종속성이 있는 연산을 이 단계에서 수행할 수 있다.',
      },
      {
        title: 'beforeDestroy',
        desc: 'Vue 인스턴스가 제거되기 전 호출',
      },
      {
        title: 'destroyed',
        desc: 'Vue 인스턴스가 제거된 후에 호출됩니다. 이 훅이 호출될 때는 Vue 인스턴스의 모든 디렉티브의 바인딩이 해제되고 이벤트 연결도 모두 제거됩니다.',
      },
    ],
  },
  {
    title: 'Event',
    desc: 'vue 이벤트관련 기능',
    contents: [
      {
        title: 'v-on:',
        desc: '이벤트 디렉티브이며 약어는 @: 로 사용가능',
      },
      {
        title: '이벤트 객체',
        desc: '',
        contents: [
          {
            title: '이벤트 객체의 주요 속성',
            desc: '',
            contents: [
              {
                title: 'target',
                desc: '이벤트가 발생한 HTML 요소를 리턴함',
              },
              {
                title: 'currentTarget',
                desc: '이벤트리스너가 이벤트를 발생시키는 HTML 요소를 리턴',
              },
              {
                title: 'path',
                desc: '배열값, 이벤트 발생 HTML 요소로부터 document, window 객체로까지 거슬러 올라가는 경로를 나타냄',
              },
              {
                title: 'bubbles',
                desc: '현재의 이벤트가 버블링을 일으키는 이벤트인지 여부를 리턴함',
              },
              {
                title: 'cancleable',
                desc: '기본 이벤트를 방지할 수 있는지 여부를 리턴함',
              },
              {
                title: 'eventPhase',
                desc: `이벤트 흐름 단계를 나타냄
              <ol>
              <li>포착(CAPTURING_PHASE)
              <li>이벤트 발생(AT_TARGET)
              <li>버블링(BUBLING_PHASE)
            </ol>`,
              },
              {
                title: 'srcElement',
                desc: `IE에서 사용되던 속성으로 target과 동일한 속성`,
              },
            ]
          },
          {
            title: '키보드 이벤트 관련 속성',
            desc: '',
            contents: [
              {
                title: 'altKey',
                desc: 'altKey 키 토글 여부를 나타냄(true/false)',
              },
              {
                title: 'shiftKey',
                desc: `shiftKey 키 토글 여부를 나타냄(true/false)`,
              },
              {
                title: 'ctrlKey',
                desc: `ctrlKey 키 토글 여부를 나타냄(true/false)`,
              },
              {
                title: 'metaKey',
                desc: `Windows OS 에서는 window 키, Mac OS 에서는 Command 키 토글 여부를 나타냄(true/false)`,
              },
              {
                title: 'key',
                desc: `이벤트에 의해 나타나는 키의 값을 리턴함. 대소문자 구분함.`,
              },
              {
                title: 'code',
                desc: `이벤트를 발생시킨 키의 코드값을 리턴함.
              ex) a를 눌렀을 때 "KeyA"를 리턴함
              ex) shfit를 눌렀을 때 "Shift"를 리턴함`,
              },
              {
                title: 'charCode',
                desc: `keypress 이벤트가 발생될 때 Unicode 캐릭터 코드를 리턴함`,
              },
              {
                title: 'location',
                desc: `디바이스에서의 키 위칫값. 일반 키보드는 이 값이 모두 0이므로 이용할 수 없음`,
              },
            ]
          },
          {
            title: '마우스 이벤트 관련 속성',
            desc: '',
            contents: [
              {
                title: 'altKey, shiftKey, ctrlKey, metaKey',
                desc: `키보드와 동일`
              },
              {
                title: 'button',
                desc: `이벤트를 발생시킨 마우스 버튼
  <ol>
    <li>0: 마우스 왼쪽 버튼
    <li>1: 마우스 휠
    <li>2: 마우스 오른쪽 버튼
  </ol>`
              },
              {
                title: 'buttons',
                desc: `마우스 이벤트가 발생한 후에 눌러져 있는 마우스 버튼의 값을 리턴함, 아래 값의 조합으로 이루어짐
              <ol>
              <li>1: 마우스 왼쪽 버튼
              <li>2: 마우스 오른쪽 버튼
              <li>4: 마우스 휠
              <li>8: 4번째 마우스 버튼
              <li>16: 5번째 마우스 버튼
            </ol>
            ex) 마우스의 오른쪽 버튼, 휠을 누르고 있는 상태에서 왼쪽 버튼을 클릭할 경우 이 값은 6(2+4)을 리턴함.`
              },
              {
                title: 'clientX, clientY',
                desc: `마우스 이벤트가 일어났을 때의 뷰포트(ViewPort) 영역상의 좌표, 이 좌표는 스크롤바를 내리더라도 좌푯값에 영향을 받지 않음`
              },
              {
                title: 'layerX, layerY',
                desc: `마우스 이벤트가 발생한 HTML 요소 영역상에서의 좌표(IE이외의 브라우저에서 사용)`
              },
              {
                title: 'offsetX, offsetY',
                desc: `마우스 이벤트가 발생한 HTML 요소 영역상에서의 좌표(IE 브라우저에서 사용)`
              },
              {
                title: 'pageX, pageY',
                desc: `마우스 이벤트가 발생했을 때 HTML 문서(Document) 영역상의 좌표`
              },
              {
                title: 'screeX, screenY',
                desc: `마우스 이벤트가 발생했을 때 모니터 영역상의 좌표`
              },
            ]
          },
        ]
      },
      {
        title: 'DOM 요소의 기본 이벤트',
        desc: `a 같은 요소는 클릭할 경우 내장되어 있는 기본 이벤트가 호출된다.
          <ul>
        대표적인 기본 이벤트
            <li>a
        <li>오른쪽 버튼의 컨텍스트 메뉴 ContextMenu
        <li>form 요소 내부의 submit 버튼
        <li>input type=text 요소에 키보드를 누르면 입력한 문자가 텍스트 박스에 나타나는 기능
      </ul>`,
      },
      {
        title: '기본 이벤트를 중지시키는 방법',
        desc: `v-on:EVENT.prevent="method"`
      },
      {
        title: '이벤트 전파(버블링, 캡처링) 중지시키는 방법',
        desc: `
      <ul>
        <li>v-on:EVENT.stop="method" 이벤트 전파를 중지
        <li>v-on:EVENT.capture="method" CAPTURING_PHASE 단계에서만 이벤트 발생
        <li>v-on:EVENT.self="method" RAISING_PHASE 단계에서만 이벤트 발생
      </ul>`
      },
      {
        title: 'once : 이벤트를 단 한번만 실행',
        desc: `v-on:EVENT.once="method"`
      },
      {
        title: 'keyup : 키보드 키코드를 이용한 메서드 실행',
        desc: `
      <ul>
        <li> @keyup="method" method: function (e) { if(e.keyCode === 13) alert('hi') } 
        <li> @keyup.13="method" method: function (e) {alert('hi')} 
        <li> @keyup.enter="method" method: function (e) {alert('hi')} 
        <li> 제공해주는 쉬운 별칭 : enter, tab delete, exc, space, up down left right ctrl alt shift meta
        <li> @keyup.ctrl.67="copy" Ctrl + C
        <li> 마우스 버튼 수식어: left, right, middle
      </ul>`
      },
    ],
  },
  {
    title: 'Style',
    desc: '뷰 스타일 적용법',
    contents: [
      {
        title: '인라인 스타일',
        desc: `<pre>되도록이면 인라인은 지양한다.
표기법은 javascript 변수명에 - 대쉬를 사용하지 못하기 때문에 카멜법을 사용
data: {
          style: {backgourndColor: 'red' }
}
&lt;div v-bind:style="style" @mouseover.stop="method1" @mouseout.stop="method2">

개별 속성으로 지정할 수도 있다.(추천안함)
data: {
          a: {bc: 'red' }
}
:style="{backgroundColor: a.bc }"

배열 방식도 가능
v-bind:style="[myColor,myLayout]
data : {
          myColor : {backgroundColor:'purple', color:'yellow' },
  myLayout : {width:'150px', height:'80px', textAlign:'center' }
}
          </pre>`
      },
      {
        title: 'Class 바인딩',
        desc: `<pre>v-bind:class="{class명: boolean, ... }"
.set1 {background - color: aqua; color:purple; }
.set2 {text - align:center; width:120px; }
.set3 {border:sandybrown dashed 1px; }
data : {s1 : false, s2 : false, s3 : false }
&lt;button id="btn1" v-bind:class="{set1:s1, set2:s2, set3:s3 }">버튼1&lt;/button>
더 직관적인 방법
mystyle : {set1:false, set2:false, set3:false }
&lt;button id="btn1" v-bind:class="mystyle">버튼1&lt;/button>
        </pre>`
      },
      {
        title: '계산형 속성,<br />메서드를 이용한 스타일 적용',
        desc: `<pre>스타일 .warning {background - color: orange; color:purple; }
DOM v-bind:class="info"
computed
  info : function() {
          ...
    return {warning:false }
  }
        </pre>`
      },
    ],
  },
  {
    title: '컴포넌트',
    desc: '뷰 컴포넌트 작성법',
    contents: [
      {
        title: '컴포넌트 작성',
        desc: `<pre>Vue.component(tagname, options)
tagname: 컴포넌트를 사용할 태그명
options: 컴포넌트에서 렌더링할 templet등을 지정
태그명은 가능하다면 케밥 표기명으로 지정하는게 좋다.

&lt;script type="text/javascript">
  Vue.component('hello-component', {
            template: '&lt;div>hello world!!!&lt;/div>'
  })
&lt;/script>
위의 컴포넌트 사용법을 아래와 같이 분리 시킬수 있다.

template 태그 사용
&lt;template id="helloTemplate">
  &lt;div>hello world!!!&lt;/div>
&lt;/template>
&lt;script type="text/javascript">
  Vue.component('hello-component', {
            template: '#helloTemplate'
  })
&lt;/script>

script 태그 사용
&lt;script type="text/x-template" id="helloTemplate">
  &lt;div>hello world!!!&lt;/div>
&lt;/script>
&lt;script type="text/javascript">
  Vue.component('hello-component', {
            template: '#helloTemplate'
  })
&lt;/script>
</pre>`
      },
      {
        title: '컴포넌트 작성시 주의 사항 1.',
        desc: `
        <pre > 아래와 같이 body 태그안의 dom 요소가 vue 컴포넌트가 아닌 html 요소(select) 중간에 끼어있다면 종종 렌더링되지 않는 현상을 경험할 수 있다.
&lt;script type= "text/javascript" >
    Vue.component('option-component', {
      template: '&lt;option>hello&lt;/option>'
    })
    & lt;/script >
&lt;body >
  &lt; div id= "app" >
    &lt; select >
      &lt; option - component >&lt; /option-component>
  & lt; option - component >&lt; /option-component>
    & lt; /select>
      & lt; /div>
        & lt; /body>
          & lt; script type= "text/javascript" >
  var v = new Vue({
  el: '#app'
})
  & lt; /script>

해결책: select 태그를 포함한 요소들을 script text/ x - template 태그로 감싸줘서 컴포넌트화 시킨다.
여기서 주의할 점은 & lt; template > 태그로 할 경우 위와 같이 렌더되지 않으므로 x- template로 사용해야 한다.
또 다른 방법으로 단일 파일 컴포넌트 형식을 사용한다.
&lt; script type= "text/javascript" >
  Vue.component('option-component', {
    template: '&lt;option>hello&lt;/option>'
  })
  & lt; /script>
    & lt; script type= "text/x-template" id= "selectTemplate" >
  &lt; select >
      &lt; option - component >&lt; /option-component>
  & lt; option - component >&lt; /option-component>
    & lt; /select>
      & lt; /script>
        & lt; script type= "text/javascript" >
          Vue.component('select-component', {
            template: '#selectTemplate'
          })
          & lt; /script>
            & lt; body >
  &lt; div id= "app" >
    &lt; select - component >&lt; /select-component>
  & lt; /div>
    & lt; /body>

또 다른 방법으로 is 속성을 사용한다.
&lt; option is= 'option-component' >&lt; /option>
  & lt; option is= 'option-component' >&lt; /option>
          </pre >`
      },
      {
        title: '컴포넌트 작성시 주의 사항 2.',
        desc: 
        `<pre>template 문자열 안에서 루트 요소는 하나여야 한다.
Vue.component('option-component', {
        template: '&lt;option>hello&lt;/option>&lt;option>hello&lt;/option>'
})
위와 같이 2개 이상의 root 요소가 있어서는 안된다.
          </pre>`
      },
      {
        title: '컴포넌트에서의 data 옵션',
        desc: `
        <pre>컴포넌트에서 data 속성을 정의할 경우 function을 사용해서 return 값으로 data를 설정해야 한다.
component마다 서로 다른 data를 유지해야 하기 때문이다.
data: function () {
  return {
        name: 'jone'
  }
}
          </pre>`
      },
      {
        title: 'props',
        desc: `<pre>&lt;template id="listTemplate">
  &lt;li>{{ message }}&lt;/li>
&lt;/template>
&lt;script type="text/javascript">
  Vue.component('list-component', {
          template: '#listTemplate',
    props: ['myMessage']
  })
&lt;/script>
&lt;body>
  &lt;div id="app">
    &lt;ul>
      &lt;list-component my-message="Hello">&lt;/list-component>
      &lt;list-component my-message="씬짜오">&lt;/list-component>
      &lt;list-component my-message="니하오마">&lt;/list-component>
    &lt;/ul>
  &lt;/div>
&lt;/body>

위의 예제를 보면 컴포넌트의 옵션에 props가 보일텐데
배열에 등록된 문자열이 키값이 되어 컴포넌트 태그의 속성으로 값이 할당된다.
data를 등록하는 것과 같다.

컴포넌트 태그의 속성명을 정할 때 주의사항
html 태그는 대소문자를 가리지 않기때문에 kebob-casing을 사용해야한다.
컴포넌트 props에서는 camelCasing으로 표기한다.

props 검증
props값을 단순히 받기만 한다면 배열형태를 취하고 있어도 되지만
검증을 하고 싶다면 객체형태로 만들고 값을 검증할 수 있다.
props: {
          message: {type: String, default: '안녕하세요' },
}

props 검증시 주의할 점
값이 배열이 객체일 경우 default 속성 사용시 꼭 함수의 return값으로 기본값을 설정해줘야 한다.
배열과 객체는 참조이기 때문에 값을 새로 할당하지 않으면 부모와 자식이 같은 데이터를 참조하기 때문이다.

props로 값 전달시 숫자로 전달하기(props에 data 값을 전달하기)
태그 속성으로 props 값을 전달할 때 숫자만 적으면 컴포넌트는 값을 문자열로 인식한다.
이러한 문제를 해결하기 위해서 v-bind를 사용한다.
&lt;comp :count="100">&lt;/comp>
만약 v-bind에 문자열을 넣어준다면 변수명으로 인식하기 때문에
문자열에 해당하는 data가 할당되어 있어야 한다.
&lt;comp :count="name">&lt;/comp>
data: {
          name: '백만'
}
          </pre>`
      },
      {
        title: 'event',
        desc: `<pre>child Component
methods : {
            clickEvent : function(e) {
            this.$emit('timeclick', e.target.innerText, e.target.dataset.lang);
          }
}

parent Component
&lt;child-component v-for="s in buttons" v-bind:button-info="s"  v-on:timeclick="timeclickEvent">&lt;/child-component>
 :
methods : {
            timeclickEvent : function(k, v) {
            this.msg = k + ", " + v;
          }
}

1. 부모 컴포넌트는 자식 태그에 v-on 디렉티브로 자식 컴포넌트의 수신 받을 메소드를 지정한다.
v-on:timeclick="timeclickEvent"
v-on:자식이 호출할 발신명="수신할 본인 객체의 methods"
2. 자식 컴포넌트는 특정 이벤트에 this.$emit()을 통해서 부모에게 내용을 발신한다.
첫번째 인자는 부모가 자식컴포넌트를 만들때 정의했던 v-on 디렉티브의 이름(발신명)
두번째 인자부터 부모로 전달한 데이터를 작성해주면된다.
3. 자식이 발신한(this.$emit()) 부모의 method가 데이터를 받아서 처리하게 된다.
          </pre>`
      },
      {
        title: '이벤트 버스 객체를 이용한 통신',
        desc: `<pre>부모 자식 관계는 props와 event를 이용하면 된다.
하지만 형제 관계에 있는 컴포넌트들끼리 정보를 전달하려면?

비어 있는 Vue 인스턴스를 만들어 사용하면 된다.
데이터를 저장할 필요가 있다면 데이터 옵션을 추가한다.
단지 UI를 만들기 위한 template가 없는 인스턴스이다.

이벤트 버스 객체
var eventBus = new Vue();

첫번째 자식 컴포넌트
methods : {
              clickEvent : function() {
        var d = new Date();
        var t = d.toLocaleTimeString() + " " + d.getMilliseconds() + "ms";
        eventBus.$emit('click1', t);
        this.currentTime = t;
    }
}

두번째 자식 컴포넌트
created : function() {
              eventBus.$on('click1', this.child1Click);
            },
methods : {
              child1Click : function(time) {
              this.timelist.push(time);
            }
}

1. vue 인스턴스 생성
2. created로 이벤트 수신 설정($on)을 해준다.(발신 전 미리 수신상태여야 하기 때문에 created 훅에서 수신 설정)
3. 이벤트 발신 설정($emit)을 해준다.
          </pre>`
      }
    ],
  },
  {
    title: 'ECMAScript2015',
    desc: 'ES6 새로운 기능들',
    contents: [
      {
        title: 'let const',
        desc:`
        <pre>공통
블록단위 스코프 지원
중복 선언 허용하지 않음

const
상수로 값 변경을 허락하지 않음.
선언만하고초기값을 주지 않으면 에러.

var 키워드로 변수 할당하지 않는 것이 좋음.
          </pre>`
      },
      {
        title: '기본 파라미터와 가변 파라미터',
        desc:`
        <pre>함수의 파라미터에 기본값 설정가능
function add(a=0, b=0){ return a+b }

함수의 파라미터를 동적으로 할당받을 수 있음(...배열명)
var add = (a, b, ...rest) => a+b+rest.reduce((x,y) => x+=y)
가변 파라미터명 앞에 ... 을 붙여준다.
가변 파라미터는 배열형태이다.
          </pre>`
      },
      {
        title: '구조분해 할당',
        desc:`
        <pre>let arr = [10,20,30,40];
let [a1,a2,a3] = arr;
console.log(a1, a2, a3);

let p1 = {name:"홍길동", age:20, gender:"M"};
let {name:n, age:a, gender } = p1;
console.log(n,a,gender);

함수에서도 사용 가능
function addContact({name, phone, email="이메일 없음", age=0}) {
            console.log("이름 : " + name);
          console.log("전번 : " + phone);
  console.log("이메일 : " + email);
  console.log("나이 : " + age);
}

addContact({
            name : "이몽룡",
  phone : "010-3434-8989"
})
          </pre>`
      },
      {
        title: 'Arrow function',
        desc:`
        <pre>var add = function (a, b) { return a+b }
let add = (a, b) => a+b

function 키워드가 실행될 때마다 그 함수 context는 최상위 영역을 바라보게 된다.
하지만 화살표 함수는 context가 갱신되지 않고 현재 스코프 context를 유지한다.
function과 화살표 함수의 this는 다르다.
          </pre>`
      },
      {
        title: '새로운 객체 리터럴',
        desc:`
        <pre>객체 속성과 변수명이 같다면 생략 가능.
var name = "홍길동";
var age = 20;
var email = "gdhong@test.com";

//var obj = {name: name, age: age, email: email };
var obj = {name, age, email };

객체 속성에 메소드 명을 생략할 수도 있음
var obj = {
            add(a, b) {
          return a+b
  }
}
          </pre>`
      },
      {
        title: '템플릿 리터럴',
        desc:`
        <pre>역따옴포(Backquote:\`)로 묶여진 문자열에서 템플릿 대입문(\${})을 이용해
동적으로 문자열을 끼워넣어 구성할 수 있는 방법을 제공.
수식 구문, 변수, 함수 호출 구문 등 대부분의 표현식을 사용할 수 있음.
개행문자를 포함하여 여러 줄로 작성가능.
          </pre >`
      },
      {
        title: '컬렉션',
        desc:`
        <pre>Set, Map, WeakSet, WeakMap

Set
중복 허용 안함
합집합, 교집합 같은 다양한 집합 연산을 제공
var john = new Set(["사과", "포도", "배"]);
var susan = new Set(["파인애플", "키위", "배"]);

//합집합 : Set {'사과', '포도', '배', '파인애플', '키위' }
var union = new Set([...john.values(), ...susan.values()]);

//교집합 : Set {'배'}
          var intersection = new Set([...john.values()].filter(e => susan.has(e)));

//차집합 : Set {'사과', '포도' }
var diff = new Set([...john.values()].filter(e => !susan.has(e)));

Map
키값쌍의 집합체이며, 키는 고유한 값이여야 한다.
          </pre>`
      },
      {
        title: '클래스',
        desc:`
        <pre>class Person {
            // 생성자
            constructor(name, age) {
          // 자바와 다르게 인스턴스의 전역 변수를 constructor함수에서 this에 선언해야 한다.
          this.name = name
    this.age = age

    // 모든 인스턴스가 공유할 변수(정적 변수)
    Person.desc = "사람입니다."
    if (Person.count) {
            Person.count = 0
          } else {
            Person.count++
          }
          }

  // 정적 메서드 Person.getPersonCount()
  static getPersonCount() {
    return Person.count++
  }

  // 인스턴스 메서드 new Person('jone', 20).toString()
  toString() {
    return \`name=${this.name}, age=${this.age}\`
  }
}

상속도 지원한다.
class Developer extends Person {}
        </pre>`
      },
      {
        title: '모듈',
        desc:`
        <pre>ES6에서 모듈을 js코드를 포함하고 있는 파일이라 간주해도 무방하다.
코드 블록안에서 import, export 구문을 이용해서 모듈을 가져오거나 내보낼 수 있다.
모듈 내부에서 선언된 모든 변수, 함수, 객체, 클래스는 지역적인 것으로 간주된다.
따라서 재사용 가능한 모듈을 만들려면 반드시 외부로 공개하고자 하는 것을 export해야 한다.
export된 모듈은 다른 모듈에서 import 구문으로 참조하여 사용할 수 있다.
export let a = 1000;
export function f1() {}
          export {n1, n2 as othername }

import시 주의할 점은 상대경로를 사용한다는 것이다.
import하는 코드파일의 위치로 부터 경로를 추적한다.
파일확장자 js는 생략가능.
별칭 가능
import {a as aa} from './utils/utility'

export할 값이 여러개라면 객체표현식({n1,n2})으로 나열했지만
만약 단일 값이라면 default 키워드로 export 후 import 할 수 있다.
export default calc;
import calc from ''./utils/utility';
          </pre>`
      },
      {
        title: 'Promise',
        desc:`
        <pre>비동기 호출을 위한 역할
비동기 호출시 발생하는 콜백함수의 중첩 문제를 해결함.
Promise객체 생성시 전달하는 인자로 함수를 넘겨주는데
이 함수의 인자들로 성공 실패 여부에 따른 후속조치를 할 수 있게 해준다.
이 함수 2개의 인자역시 함수이다.
첫번째 인자(resolve는 성공시 실행할 함수)
두번째 인자(reject는 실패시 실행할 함수)
var p = new Promise(function(resolve, reject) {
            // 성공 실패 여부를 판별해줄 로직을 만든 후 
            // 여부에 따른 resolve와 reject를 호출해주도록 해주면 된다.
            setTimeout(function () {
              var num = Math.round(Math.random() * 20);
              var isValid = num % 2;
              if (isValid) { resolve(num); }
              else { reject(num); }
            }, 2000);
          });

Promise 인스턴스 사용법
p.then(function (num) {
            console.log("홀수 : " + num);
          return num // return 값이 다음 실행 함수의 인자로 넘어간다.
}).then(function (num) {
            console.log("홀수 : " + num);
          }).catch(function(num) {
            console.log("짝수 : " + num);
          });
          </pre>`
        },
    ],
  },
  {
    title: 'Webpack',
    desc: 'vue 이벤트관련 기능',
    contents: [
      {
        title: 'Webpack',
        desc:`
        <pre>많은 모듈을 html문서에 &lt;script>로 참조하는 것은 끔찍하며
.vue 확장자 파일은.js가 아니므로 .js파일로 트랜스파일할 수 있어야 한다.
Webpack은 모던 자바스크립트 애플레이케이션 개발을 위한 모듈 번들러.
모듈과 모듈이 사용하는 정적 자원(css, image)들을 한데 묶어서 하나의 파일 또는 몇 개의 파일로 번들링(묶는작업)한다.

장점
초기 로딩 줄임
정적 자원들까지 모듈화가 가능
Babel, Typescript 등과 같은 트랜스파일러와 손쉽게 통합된다
HMR(Hot Module Replacement)를 지원해서 코드가 수정될 때마다 자동으로 번들링을 수행하고 페이지가 갱신된다.
다양한 로더 제공(번들링 하기 전 수행해야 할 전처리 기능 - es2015 트랜스파일링, css 전처리, image 변환 등)
다양한 플러그인 제공(번들링 도중 특별한 단계의 작업을 추가할 때 사용 - UglifyJsPlugin 등)
          </pre>`
      },
      {
        title: 'Webpack 구성',
        desc:`
        <pre>특별한 파일명을 지정하지 않으면 webpack.config.js 파일이 설정파일로 사용된다.
Entry, Output, Module, Plugins 4가지 옵션 객체가 핵심이며, 이외에 기타 옵션이 제공된다.

entry
처음 로드하는 파일을 지정(단일 파일 혹은 여러 파일 지정 가능)
여러 파일을 로드할 경우 객체 형태로 지정, 단일 파일일 경우 문장열로 파일의 경로를 지정
entry: __dirname + '/src/index.js'
entry: {
            main: __dirname + 'src/index.js',
  app: __dirname + 'src/app.js'
}

output
번들링된 결과물의 출력 방법을 지정.
output: {
            path: __dirname + '/public/dist'), // 번들링된 파일의 저장 경로
  filename: '[name].js', // 생성하는 파일의 파일명을 지정. entry 파일명을 사용할 수도 있음.
  publicPath: '/dist' // 웹서버에서 이용될 때의 사용경로를 지정
}

modules프로젝트 내부에서 사용하는 다양한 유형의 모듈을 수행하는 방법을 지정
rules 옵션에 배열 형태로 규칙을 나열할 수 있다.
module: {
            rules: [
    {
            test:/\.js$/, // 정규식을 사용해 해당 규칙이 적용될 파일을 지정한다.
      loader: 'babel-loader', // 사용할 loader를 지정
      exclude: /node_modules/ // 해당 규칙을 적용하지 않을 파일명의 정규식 패턴을 지정
    }
  ]
}

plugins
번들링중 사용자가 지정한 작업을 추가할 수 있는 기능을 제공
plugins: [
  new webpack.optimize.UglifyJsPlugin()
]
</pre>`
      },

      {
        title: '간단한 구성 예제',
        desc:`
          <pre>$ npm install -g webpack
$ npm install --save-dev babel babel-core babel-loader babel-preset-es2015

webpack.config.js
var webpack = require('webpack');
module.exports = {
              entry: {
              main: __dirname + '/src/index.js'
  },
  output: {
              path: __dirname + '/public/dist/',
    filename: '[name].js',
    publicPath: '/dist'
  },
  module: {
              rules: [{
              test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}

$ webpack
혹은 package.json 에서 scripts 속성에
"build": "webpack"
추가한 후
$ npm run build
          </pre>`
      },
      {
        title: 'Webpack 개발 서버 설정',
        desc:`
          <pre>개발 중 코드가 변경될 때마다 매번 새롭게 webpack 명령을 수행하는 것은 불편하다.
코드 변경 즉시 브라우저 화면에 반영되도록 Webpack 개발 서버(webpack-dev-server)를 사용할 수 있다.
Webpack 개발 서버는 Node.js와 express 프레임워크를 기반으로 작동하는 개발용 서버.
자체적으로 HMR(Hot Module Replacment) 기능을 제공하기 때문에 개발 생산성 향상.

$ npm install --save-dev webpack-dev-server

package.json scripts 속성에 다음을 추가
"start": "node_modules/.bin/webpack-dev-server --open --hot"
open 옵션은 개발서버가 기동되면 브라우저가 열리도록 한다.
hot은 HMR을 사용하는 옵션.

webpack.config.js 속성에 다음을 추가
devServer: {
              contentBase: './public/', // 웹서버 루트로 지정할 디렉터리 경로. 생략시 프로젝트 디렉토리가 지정.
  port: 3000, // 서버가 사용할 포트
  historyApiFallback: true // 브라우저에서 이전상태로 이동할 때 URI가 존재하지 않으면 404에러가 발생하는데 이러한 경우에 기본페이지(index.html)로 이동을 자동화 시킬지 설정.
}

** 다음 에러시 https://github.com/joeeames/WebpackFundamentalsCourse/issues/3 참고
ERROR in [번들명].js from UglifyJs
Unexpected token: name (urlParts) [main.js:4414,4]
          </pre>`
      },
      {
        title: '보일러 플레이트',
        desc:`
          <pre>$ vue init webpack-simple wepackproject
$ cd wepackproject
$ npm install

cross-env
여러 플랫폼에 걸쳐서 환경변수를 설정하고 사용하는 스크립트를 실행한다
if (process.env.NODE_ENV === 'production') {}

            css-loader
컴포넌트에서 css 파일을 파일명을 이용해 직접 import 구문으로 로드하여 사용하는 방법을 제공.
import된 css 파일에 정의된 클래스는 객체처럼 이용할 수 있다.

file-loader
정적 자원(이미지 등)을 import 구문을 이용해 코드로 로드할 수 있다.
로드된 파일은 Webpack에 의해 번들링되니다.
번들링될 때 파일명에 MD5해시값을 적용할 수 있다.

vue-loader
확장자가 .vue인 단일 파일 컴포넌트 파일을 트랜스파일하고 로드하는 기능을 수행.

vue-template-compoiler
Vue 컴포넌트 내부의 템플릿 문자열을 트랜스파일하는 기능을 수행.
          </pre>`
      },
    ],
  },
  {
    title: 'Component 심화',
    desc: 'vue 이벤트관련 기능',
    contents: [
      {
        title: '단일 파일 컴포넌트',
        desc:
        `<pre>전역 수준 컴포넌트의 몇가지 문제점
빌드 단계가 없어 최신 자바스크립트 문법을 사용할 수 없다.
css를 지원하지 않아 빌드와 모듈화를 지원하지 않는다.
여러개의 &lt;template/> 태그가 작성되어 식별하기 어렵다.

전역 컴포넌트와 단일 컴포넌트 차이
&lt;template>에는 id를 부여하지 않는다.
&lt;script>에는 Vue 컴포넌트의 template을 지정하지 않으며, Vue.component()로 이름과 template 속성을 지정하지 않는다.
반면에 name 속성을 지정 할 수 있으며, 반드시 객체를 export 해야 한다.
컴포넌트에서 사용할 스타일은 &lt;style> 내부에 작성해야한다.
          </pre>`
      },
      {
        title: '컴포넌트에서의 스타일',
        desc:
        `<pre>특정 컴포넌트만의 스타일을 지정하려면 범위 CSS(Scoped CSS)와 CSS 모듈(CSS Module)의 두가지 방법을 사용할 수 있다.

Scoped CSS
&lt;style scoped> style태그에 scoped 속성을 부여한다.

주의사항
1.특성 선택자를 사용하기 때문에 브라우저에서 스타일을 적용하는 속도가 느리다.
그렇기 때문에 속도가 빠른 id 선택자, class 선택자, tag 선택자로 요소를 선택해 스타일을 적용해야 한다.
2.하위 컴포넌트에도 반영된다.

CSS Module
&lt;style module> style태그에 module 속성을 부여한다.
스타일을 마치 객체처럼 다룰 수 있게 해준다.
template에서 v-bind:class를 통해서 $style로 style에 접근한다.
여러 스타일을 적용할 경우 배열형태로 나타낸다.

&lt;template>
  &lt;div>
    &lt;button v-bind:class="$style.hand"> CSS Module을 적용한 버튼 &lt;/button>
    &lt;div :class="[$style.box, $style.border]">Hello World&lt;/div>
  &lt;/div>
&lt;/template>
&lt;style module>
.hand {cursor:pointer; background-color:purple; color:yellow; }
.box {width:100px; height:100px; background-color:aqua; }
.border {border:solid 1px orange; }
&lt;/style>
          </pre>`
      },
      {
        title: 'slot',
        desc:
        `<pre>props를 이용하여 자식에게 내용을 전달할 수 있다.
하지만 전달할 내용이 복잡한 html 구조라면 어떨까?
상당히 불편할 것이다.
이것을 쉽게 전달할 수 있는 기능이 slot이다.

자식 컴포넌트
아래의 slot 태그는 부모로 부터 받아 내용이 적용된다.
header와 footer는 보간자로 porps를 통해서 전달받는 형태로 slot과 차이를 볼 수 있다.
&lt;template>
  &lt;div class="container">
    &lt;div class="header">{{ headerText }}&lt;/div>
    &lt;div class="content">
      &lt;slot>&lt;/slot>
    &lt;/div>
    &lt;div class="footer">{{ footerText }}&lt;/div>
  &lt;/div>
&lt;/template>

부모가 자식 컴포넌트를 사용할 때 컴포넌트 태그를 사용한다.
그 태그 안에 html 구조를 작성하면 자식 컴포넌트의 slot 태그 안에 장착된다.
&lt;speech-box :headerText="A.header" :footerText="A.footer">
  &lt;div>
    &lt;p>
      {{ A.message }}
          &lt;/p>
  &lt;/div>
&lt;/speech-box>
export default {name: 'app', components : {SpeechBox}, ... }

named slot
위의 예제는 하나의 slot만 가진 컴포넌트이다.
2개 이상이라면 명명된 slot을 사용해서 내용을 별도로 지정받아 장착할 수 있다.

자식 컴포넌트 템플릿
&lt;slot name="menu">&lt;/slot>
&lt;slot name="content">&lt;/slot>

부모 컴포넌트 템플릿
&lt;layout>
  &lt;ul slot="menu">...&lt;/ul>
  &lt;div slot="content">...&lt;/div>
&lt;/layout>
export default {name: 'app', components : {layout}, ... }

만약 부모 데이터를 이용해 slot에 들어갈 내용을 만들어야 한다면
부모 컴포넌트 템플릿에서 data에 접근해서 만들면 된다.

scoped slot
지금까지는 부모에서 자식에게 html을 전달하는 slot이었다.
반대로 자식으로 부터 부모의 html 구조가 변경되야 한다면?
정확히 말하면 부모로 부터 받은 slot(html 구조)가 자식의 데이터로 인해 동적으로 변경하려할 때 사용한다.

자식 컴포넌트 템플릿
slot 속성에 부모에게 전달한 내용을 바인딩해준다.
&lt;slot name="type1" :cx="x" :cy="y">&lt;/slot>
&lt;slot name="type2" :cx="x" :cy="y">&lt;/slot>
data() { return {x: 4, y: 5} }

부모 컴포넌트 템플릿
template 태그를 만들고 그 안에 scope 속성을 정의한다.
scope 이름을 통해서 자식으로 부터 전달받은 내용에 접근할 수 있다.
&lt;child>
  &lt;template slot="type1" scope="p1">
    &lt;div>{{ p1.cx }} + {{ p1.cy }} = {{ parseInt(p1.cx) + parseInt(p1.cy) }}&lt;/div>
  &lt;/template>
  &lt;template slot="type2" scope="p2">
    &lt;div>{{ p2.cx }} 더하기 {{ p2.cy }} 는 {{ parseInt(p2.cx) + parseInt(p2.cy) }}입니다.&lt;/div>
  &lt;/template>
&lt;/child>
          </pre>`
      },
      {
        title: '동적 컴포넌트',
        desc:
        `<pre>component 태그는 dom 구조가 거의 동일하지만
data에 의해서 보여줄 뷰와 처리 로직이 다를 경우
compoenent 태그의 is 속성으로 분기처주는 방식을 이용하면 좋다.
만약 data에 의해서 보여줄 뷰만 다르다면 같은 컴포넌트를 사용하면 되겠다.

아래와 같이 component 태그에 is 속성에 바인딩 해주면
동적으로 컴포넌트가 변한다.
&lt;a href="#" @click="changeMenu('home')">home&lt;/a>
&lt;a href="#" @click="changeMenu('about')">about&lt;/a>

&lt;keep-alive>
  &lt;component v-bind:is="currentView">&lt;/component>
&lt;/keep-alive>
export default {
            components : {Home, About, Contact },
  data() {
    return {currentView : 'home' }
  },
  methods : {
            changeMenu(view) {
          this.currentView = view;
    }
  }
}

keep-alive 태그
컴포넌트가 호출될 때마다 갱신되는데
만약 정적 파일이라 캐싱으로 불러오고 싶다면 keep-alive 태그를 사용한다.

만약 특정 컴포넌트만 keep-alive하고 싶다면
include, exclude 속성을 부여해서 컴포넌트의 name 속성을 적어주면된다.
참고로 컴포넌트 name 속성은 대소문자를 구분하지 않는다.
&lt;keep-alive include="about,home">
export default {name: 'home' }

component is 속성
is속성에 Vue 전역에 등록된 컴포넌트 이름을 넣으면 해당하는 vue 컴포넌트가 장착된다.
          </pre>`
      },
      {
        title: '재귀 컴포넌트',
        desc:
        `<pre>자기 자신 컴포넌트를 재귀적으로 호출하는 것을 말한다.
주의할 점은 name 속성을 꼭 지정해야한다.
&lt;template>
  &lt;ul>
    &lt;li v-for="s in subs" v-bind:class="s.type">
      {{ s.name }}
          &lt;tree :subs="s.subs">&lt;/tree>
    &lt;/li>
  &lt;/ul>
&lt;/template>

&lt;script>
  export default {
            name: 'tree', // template에서 이 이름의 태그를 작성해서 재귀한다.
    props: ['subs']
  }
&lt;/script>

위의 예제에서 부모로 받는 subs 데이터 역시 재귀적으로 subs가 들어 있는 구조다.
{
            name : "(주) OpenSG", type:"company",
  subs : [
    {name: "SI 사업부", type:"division",
      subs : [
        {name: "SI 1팀", type:"team" },
        {name: "SI 2팀", type:"team" }
      ]
    },
    :
          </pre>`
      },
    ],
  },
]

export { data }

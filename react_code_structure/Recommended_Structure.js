// Recommended Structure Inside React Components
// 1 Variables and Constants: Declare any constants or variables at the beginning of the component.
// 组件开头 定义变量
const LIMIT = 10; 

// 2 State Management & other hooks (Redux, Context): Initialize Redux hooks or Context API hooks next.
// 初始化 state
const user = useSelector(state => state.user)

// 3 Local State (useState, useReducer): Define local state hooks after state management hooks.
// 在状态 管理 之后定义 本地 hooks
// 比如
const user2 = useSelector(state => state.user)
const [count, setCount] = useState(0)

// 4 之后 再是 useEffect 
// Effects (useEffect): Place useEffect hooks after state declarations to capture component lifecycle events.
const user3 = useSelector(state => state.user)
const [count1, setCount1] = useState(0)

useEffect(() => {
    loadData()
},[dependency])

// 5 Event Handlers and Functions: Define event handlers and other functions after hooks.
// 在 这些 hooks 定义后 定义 事件函数 
const handleIncrement = () => {
    setCount(preCount => preCount + 1)
}
// 这种 非常 混乱的 结构 需要避免掉 

const [name, setName] = useState('');
const handleNameChange = (e) => setName(e.target.value);

const [age, setAge] = useState(0);
// ... other code ...

useEffect(() => {
  validateName(name);
}, [name]);

const LIMIT = 5;
// ... other code ...

useEffect(() => {
  // Another effect with the same dependency
}, [name]);

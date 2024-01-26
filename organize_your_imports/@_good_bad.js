// 使用 别名 @

// ✅Good Practice: Using Import Aliases
// In a React/Next.js project
import Button from '@components/Button';
// In a Node.js project
const dbConfig = require('@config/db');


// ❌Bad Practice: Without Import Aliases
// Complex and lengthy relative paths
import Button from '../../../components/Button';
const dbConfig = require('../../config/db');


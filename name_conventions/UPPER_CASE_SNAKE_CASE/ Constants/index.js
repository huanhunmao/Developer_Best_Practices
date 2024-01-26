// good  非常清楚的 常量 定义 
const MAX_RETRY_COUNT = 3;
const DEFAULT_TIMEOUT = 1000;
const API_BASE_URL = 'https://api.example.com';

// Bad Practice:
const maxRetry = 3;              // Should be uppercase
const DefaultTimeout = 1000;     // Should not use camelCase or PascalCase
const ApiBaseUrl = 'https://...';// Constants should be in uppercase

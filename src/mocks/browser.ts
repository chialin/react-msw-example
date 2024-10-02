import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// 建立並啟動 MSW worker
export const worker = setupWorker(...handlers);

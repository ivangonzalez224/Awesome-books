import { myDate } from './elements.js';
import { DateTime } from '../../../node_modules/luxon/src/luxon.js';

const loadDateTime = () => {
  const dt = DateTime.now();
  return dt.toLocaleString(DateTime.DATETIME_FULL);
};

const setDate = () => {
  setInterval(() => {
    myDate.textContent = loadDateTime();
  }, 1000);
};

export default setDate;
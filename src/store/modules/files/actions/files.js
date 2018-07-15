/*
*
* Actions of Files
*
* */

import { createRequestTypes, action } from '../../core/actions/helper';

export const FILES = {
  LOAD: createRequestTypes('FILES'),
};

export const loadFileData = (status) => action(FILES.LOAD.REQUEST, status);

export const loadedFileData = (data) => action(FILES.LOAD.SUCCESS, { data });

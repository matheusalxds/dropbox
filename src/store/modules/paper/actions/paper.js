/*
*
* Actions of Paper
*
* */

import { createRequestTypes, action } from '../../core/actions/helper';

export const PAPER = {
  LOAD: createRequestTypes('PAPER'),
};

export const loadPaperData = (status) => action(PAPER.LOAD.REQUEST, status);

export const loadedPaperData = (data) => action(PAPER.LOAD.SUCCESS, { data });

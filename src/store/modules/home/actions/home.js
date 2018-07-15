/*
*
* Actions of Home
*
* */

import { createRequestTypes, action } from '../../core/actions/helper';

export const HOME = {
  LOAD: createRequestTypes('HOME'),
};

export const loadHomeData = (status) => action(HOME.LOAD.REQUEST, status);

export const loadedHomeData = (data) => action(HOME.LOAD.SUCCESS, { data });

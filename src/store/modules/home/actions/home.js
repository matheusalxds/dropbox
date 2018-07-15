/*
*
* Actions of Home
*
* */

import { createRequestTypes, action } from '../../core/actions/helper';

export const HOME = {
  LOAD: createRequestTypes('HOME'),
};

export const loadHomeData = ({}) => action(HOME.LOAD.REQUEST, {});

export const loadedHomeData = (data) =>
action(HOME.LOAD.SUCCESS, { data });

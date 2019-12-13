import {ACTION} from '../constants';

export function addImages(images) {
  return {
    type: ACTION.ADD_IMAGES,
    images,
  };
}

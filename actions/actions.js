import {ACTION} from '../constants';

export function addImages(type, images) {
  switch (type) {
    case ACTION.ADD_IMAGES:
      const y = images.map(image => ({...image, uri: image.path}));
      return {
        type: ACTION.ADD_IMAGES,
        payload: {images: y},
      };
    default:
      return {};
  }
}

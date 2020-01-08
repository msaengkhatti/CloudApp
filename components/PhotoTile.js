import React from 'react';
import {Dimensions} from 'react-native';
import {Image} from 'react-native-elements';
import {DEFAULT_IMAGE} from '../constants';

export default function PhotoTile({source, ratio = 1}) {
  return (
    <Image
      source={source}
      style={{
        width: Dimensions.get('window').width / ratio,
        height: Dimensions.get('window').width / ratio,
      }}
      PlaceholderContent={<Image source={DEFAULT_IMAGE} />}
    />
  );
}

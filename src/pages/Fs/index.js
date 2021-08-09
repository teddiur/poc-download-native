import React from 'react';
import {Platform, View, Text, Button} from 'react-native';

import FileViewer from 'react-native-file-viewer';

import RNFS from 'react-native-fs';

function Fs() {
  const onPress = async () => {
    let path = RNFS.DownloadDirectoryPath;
    if (Platform.OS === 'ios') {
      path = RNFS.LibraryDirectoryPath;
    }

    const filename = `/test.pdf`;
    const url =
      'https://api.pagar.me/1/boletos/test_ckj9yiyvy1obb0gm5g9yfpgbw?format=pdf';
    const pathfile = path + filename;

    // DOWNLOAD
    const download = RNFS.downloadFile({
      fromUrl: url,
      toFile: pathfile,
    });

    //DOWNLOAD esperando
    download.promise
      .then(data => {
        console.log(data);
        if (data.statusCode === 200 && data.bytesWritten > 0) {
          console.log('baixou');
          return;
        }
        console.log('xii, baixou não');
      })
      .catch(err => console.log('deu ruim', err));

    await FileViewer.open(pathfile);
  };
  return (
    <View>
      <Text>Olá</Text>
      <Button onPress={onPress} title="download" color="#841584" />
    </View>
  );
}

export default Fs;

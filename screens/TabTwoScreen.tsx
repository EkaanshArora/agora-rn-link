import { StyleSheet } from 'react-native';
import AgoraUIKit from 'agora-rn-uikit';
import * as Linking from 'expo-linking';
import { Text, View } from '../components/Themed';
import { useEffect, useState } from 'react';

export default function TabTwoScreen() {
  const [channel, setChannel] = useState('')
  Linking.addEventListener('url', (u) => {
    let query = Linking.parse(u.url).queryParams
    if(query.channel) {
      setChannel(query.channel)
    }
  })
  useEffect(() => {
    const fn = async () => {
      let link
      link = await Linking.getInitialURL();
      if (link) {
        let query = Linking.parse(link).queryParams
        if(query.channel) {
          console.log('joining channel', query.channel)
          setChannel(query.channel)
        }
      }
    }
    fn()
  }, [])
  return (
    <View style={styles.container}>
      {channel ?
        <AgoraUIKit
          styleProps={{ UIKitContainer: { flex: 1, height: '100%', width: '100%', backgroundColor: '#ff00ff' } }}
          rtcProps={{ appId: '', channel: channel }}
          callbacks={{EndCall: () => {setChannel('')}}}
        /> :
        <Text> Didn't get Channel </Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

import {StyleSheet} from 'react-native';

const HomeStyle = StyleSheet.create({
  appBar: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flatList: {
    padding: 10,
    margin: 10,
    backgroundColor: 'skyblue',
    borderRadius: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
});

export default HomeStyle;

import {FlatList, ScrollView, Text, TextInput, View} from 'react-native';
import APIService from '../../service/api_service/api_service';
import {useState} from 'react';
import TextInputStyle from '../../style/textInput_style/textInput_style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeStyle from '../../style/home_style/home_style';

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [textInputValidaiton, setTextInputValidation] = useState(false);
  const fetchData = async () => {
    await APIService(textInput, setData);
  };
  const submitForm = async () => {
    if (textInput === '') {
      setTextInputValidation(true);
    } else if (textInput.length === 31) {
      setTextInputValidation(true);
      fetchData();
    } else {
      setTextInputValidation(false);
      await fetchData();
    }
  };
  console.log(data);
  return (
    <View>
      <View style={HomeStyle.appBar}>
        <TextInput
          value={textInput}
          onChangeText={value => setTextInput(value)}
          keyboardType="numeric"
          maxLength={30}
          placeholder={
            textInputValidaiton
              ? 'Amount cannot be empty and above 31'
              : 'Enter number of facts'
          }
          placeholderTextColor={textInputValidaiton ? 'red' : 'black'}
          style={TextInputStyle.TextInputStyle}
        />
        <Icon.Button
          name="search"
          onPress={submitForm}
          underlayColor={'transparent'}
          backgroundColor={'transparent'}
          color={'black'}
        />
      </View>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View style={HomeStyle.flatList}>
              <Text style={HomeStyle.text}>{index + 1}: </Text>
              <Text style={HomeStyle.text}>{item.fact}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

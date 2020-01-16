import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';

const Textblock = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('http://192.168.100.46:8000/').then(res => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <View>
      {data && (
        <Text>
          <Text>{data.users}</Text>
        </Text>
      )}
    </View>
  );
};

export default Textblock;

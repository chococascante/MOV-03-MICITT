import React from 'react';
import {View, Text} from 'react-native';
import {useQuery, gql} from '@apollo/client';

const query = gql`
  query getUsers {
    users {
      data {
        username
      }
    }
  }
`;

const GraphExample = () => {
  const {loading, error, data, refetch, fetchMore} = useQuery(query);
  console.log(data);
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default GraphExample;

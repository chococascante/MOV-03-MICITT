import React from 'react';
import TestRender, {act} from 'react-test-renderer';
import {render, waitFor} from '@testing-library/react-native';
import UserList from '.';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {ActivityIndicator, FlatList} from 'react-native';

const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
  },
];

jest.mock('axios', () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: users,
    }),
  ),
}));

const mockStore = configureMockStore([thunk]);

const initialState = {
  Users: {
    users: [],
    selectedUser: null,
  },
};

describe('UserList', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);
    TestRender.create(
      <Provider store={store}>
        <UserList />
      </Provider>,
    );
  });

  it('muestra el Activity Indicator por defecto', () => {
    const store = mockStore(initialState);
    const wrapper = TestRender.create(
      <Provider store={store}>
        <UserList />
      </Provider>,
    );
    const activityIndicator = wrapper.root.findByType(ActivityIndicator);
    expect(activityIndicator).toBeTruthy();
  });

  it('muestra el Flatlist si hay usuarios en la lista', async () => {
    const store = mockStore({...initialState, users});
    const {getByTestId} = render(
      <Provider store={store}>
        <UserList />
      </Provider>,
    );

    waitFor(() => {
      const userList = getByTestId('user-flatlist');
      expect(userList).toBeTruthy();
    });
  });
});

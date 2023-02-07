import { getFooterCopy, getFullYear, getLatestNotification } from './utils'

import React from 'react'
import Notifications from './Notifications'
import App from './App'
import { shallow } from 'enzyme'

test('returns correct year', () => {
    expect(getFullYear()).toBe(2023);
});

test('returns correct footer copy', () => {
    expect(getFooterCopy(true)).toBe('Holberton School')
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard')
});

test('returns correct notifications', () => {
    expect(getLatestNotification()).toBe(
        '<strong>Urgent requirement</strong> - complete by EOD'
    );
});

describe('Notifications component testing', () => {
    it('renders without crashing', () => {
        const notify = shallow(<Notifications />)
        expect(notify).toBeDefined();
    });
    it('renders three list items', () => {
        const notify = shallow(<Notifications />)
        expect(notify.find('li')).toHaveLength(3);
    });
    it('renders the text Here is the list of notifications', () => {
        const notify = shallow(<Notifications />)
        expect(notify.find('p').text()).toBe(
            'Here is the list of notifications'
        );
    });
});

describe('App component testing', () => {
    it('renders without crashing', () => {
        const app = shallow(<App />)
        expect(app).toBeDefined();
    });
    it('renders  a div with the class App-header', () => {
        const app = shallow(<App />)
        expect(app.find('.App-header')).toBeDefined();
    })
    it('renders  a div with the class App-body', () => {
        const app = shallow(<App />)
        expect(app.find('.App-body')).toBeDefined();
    })
    it('renders  a div with the class App-footer', () => {
        const app = shallow(<App />)
        expect(app.find('.App-footer')).toBeDefined();
    })
})
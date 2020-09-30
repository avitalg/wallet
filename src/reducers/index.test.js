import rootReducer from './index';

describe('rootReducer', () => {
    it('init the default state', () => {
        expect(rootReducer({}, {})).toEqual({balance: 0, bitcoin: {}});
    });
});
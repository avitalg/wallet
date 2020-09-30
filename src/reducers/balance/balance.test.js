import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
    const balance = 10;
    it('set a balance', () => {
        expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance})).toEqual(balance);
    });

    describe('the re-init', () => {
        it('reads the balance from cookies', () => {
            expect(balanceReducer2(undefined, {})).toEqual(balance);
        })
    })

    it('deposits into the balance', () => {
        const deposit = 10;
        const initialState = 5;

        expect(balanceReducer(initialState, { type: constants.DEPOSIT, deposit})).toEqual(initialState + deposit);
    });

    it('withdraws from the balance', () => {
        const withdrawal = 10;
        const initalState = 20;
    
        expect(balanceReducer(initalState, { type: constants.WITHDRAW, withdrawal })).toEqual(initalState - withdrawal);
    });
});
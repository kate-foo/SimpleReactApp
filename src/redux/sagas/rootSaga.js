import { all, fork } from 'redux-saga/effects';
import BoardSaga from './BoardSaga';

export default function* root() {
    const sagas = [
        ...BoardSaga.map(saga => saga()),
    ];
    
    //all([effects])
    //all 은 여러 effects 를 병렬적으로 실행하도록 결합한다.
    yield all(sagas);

}

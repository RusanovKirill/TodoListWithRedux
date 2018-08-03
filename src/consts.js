import { Record, List} from 'immutable';
import moment from 'moment';


export const TodoRecord = Record({
    title: '',
    description: '',
    deadline: '',
    priority: '',
    finished: '',
    id: null,
});


export const StateRecord = Record({
    todos: List([new TodoRecord({ id: moment() })]),
    filter: null,
});

export const TYPE = {
    ADD_TODO: 'ADD TODO',
    REMODE_TODO: 'REMOVE TODO',
    UPDATE_TODO: 'UPDATE TODO',
};
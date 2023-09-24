import {FullWeatherInfo} from '../types';

export enum RouteNames {
    Main = 'Main',
    Details = 'Details',
}

export type RootStackParamList = {
    [RouteNames.Main]: undefined;
    [RouteNames.Details]: {item: FullWeatherInfo};
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

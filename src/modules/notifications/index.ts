import {NativeModules} from 'react-native';

class NotificationModuleInterface {
    static showAppNotification(title: string, body: string) {
        const module = NativeModules.MyNotification;

        module.showNotification(title, body);
    }
}

export default NotificationModuleInterface;

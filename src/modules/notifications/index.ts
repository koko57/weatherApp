import {NativeModules} from 'react-native';

class NotificationModuleInterface {
    static showAppNotification(title: string, body: string) {
        const module = NativeModules.MyNotification;
        try {
            module.showNotification(title, body);
        } catch (e) {
            console.log(e);
        }
    }
}

export default NotificationModuleInterface;

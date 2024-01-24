declare module 'react-native-config' {
    export interface NativeConfig {
        BASE_URL: string;
        API_KEY: string;
        ENV: string;
    }

    export const Config: NativeConfig;
    export default Config;
}

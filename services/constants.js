export const isDebug = process.env.NODE_ENV === "development";
export const timeout = 12000;
export const serverUrl = isDebug ? "https://192.168.3.1:8080/zzd" : "https://192.168.3.1:8080/zzd";
export const liveServerUrl = isDebug ? "https://192.168.3.1:8080/zzd" : "https://192.168.3.1:8080/zzd";
export const photoServer = isDebug ? "https://192.168.3.1:8080/zzd" : "https://192.168.3.1:8080/zzd";
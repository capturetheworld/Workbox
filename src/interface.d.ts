export interface IElectronAPI {
    openWindow: () => void,
  }
  
  declare global {
    interface Window {
      api: IElectronAPI
    }
  }
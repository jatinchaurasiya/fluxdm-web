/// <reference types="vite/client" />

declare global {
  interface Window {
    minilytics?: ((cmd: 'goal' | 'identify' | 'pageview', a?: any, b?: any) => void) & {
      attribution?: () => { ml_visitor_id?: string; ml_session_id?: string };
    };
  }
}

export { };
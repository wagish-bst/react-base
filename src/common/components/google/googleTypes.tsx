export {};

declare global {
  interface Window {
    google: any;
    onGoogleLibraryLoad:()=> void
  }
}

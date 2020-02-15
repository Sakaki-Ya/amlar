import "reactn";

declare module "reactn/default" {
  export interface State {
    sound: HTMLAudioElement;
    setUp: boolean;
    page: "top" | "note" | "policy" | "contact";
  }
}

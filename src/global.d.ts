// typescript 에서 module.scss를 사용하기위한 파일
declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

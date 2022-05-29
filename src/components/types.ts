export type Child = {
  icon: string;
  text?: string;
  startX: number;
  startY: number;
};

export type LineItem = {
  x: number; // x轴
  y: number; // y 轴
  width: number; // 矩形的宽 高
  height: number;
  bgColor: string; // 填充颜色
};

export interface Options {
  bgColor?: string;
  bgImgUrl?: string;
  children: Array<Child>;
  lines: Array<LineItem>;
}
